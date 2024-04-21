from flask import Flask, request, make_response
import logging
import pika
import json

app = Flask(__name__)

logging.basicConfig(level=logging.DEBUG, format='%(asctime)5s-%(levelname)s - %(filename)s : line+%(lineno)d:function name : %(funcName)s - %(name)s - %(threadName)s: message is %(message)s')
log = logging.getLogger()

# RabbitMQ setup for handling text-to-speech events
def setup_tts_event_publisher():
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='tts_events')

    def publish_tts_event(text, source_language):
        event_data = {
            'text': text,
            'source_language': source_language
        }
        channel.basic_publish(exchange='', routing_key='tts_events', body=json.dumps(event_data))
        print(f"Published TTS event: {event_data}")

    return publish_tts_event

publish_tts_event = setup_tts_event_publisher()

@app.route('/api/home', methods=['GET', 'POST', 'OPTIONS'])
def home():
    return {"message": "API data accessed without DB..."}

@app.route('/api/upload', methods=['POST', 'OPTIONS'])
def upload():
    response = None
    reqText = False
    imgNamelist = list()
    try:
        if request.method == 'POST':
            if request.files:
                reqFile = request.files['file']
            else:
                reqText = request.form['text']

        if reqText:
            reqText = True
            # Publish TTS event
            publish_tts_event(reqText, 'hindi')

        else:
            imgNamelist.append(reqFile.filename)
            # Save uploaded file to directory
            uploadDestinationDir = './datadir/uploads'
            os.makedirs(uploadDestinationDir, exist_ok=True)
            inputFile = os.path.join(uploadDestinationDir, reqFile.filename)
            reqFile.save(inputFile)

        response = f"{reqText}"

    except Exception as e:
        return {"message": str(e)}

    finally:
        return {"textStatus": response, "filename": imgNamelist}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8002)
