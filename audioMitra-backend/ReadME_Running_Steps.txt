1. Download ffmpeg:
Visit the official ffmpeg website: https://ffmpeg.org/download.html
Under "Get Packages & executable files," select the appropriate version for your operating system (Windows).
Download the ffmpeg binary.
Extract ffmpeg to a Directory:
Once downloaded, extract the contents of the ffmpeg archive to a directory on your computer (e.g., C:\ffmpeg).
Add ffmpeg to PATH:
Add the directory containing ffmpeg (e.g., C:\ffmpeg\bin) to your system's PATH environment variable.
Open Command Prompt as Administrator.
Execute the following command to append ffmpeg directory to PATH:
setx /m PATH "C:\ffmpeg\bin;%PATH%"



2. Install RabbitMQ on your machine or use a cloud-based RabbitMQ service for message queuing. You can download and install RabbitMQ from the official website.
3. Install necessary Python packages. Navigate to the project directory in the command line and run:

                                 pip install -r requirements.txt


4. RabbitMQ Setup:
Install and start RabbitMQ server.
Create necessary queues (e.g., database_events, tts_events) for message routing.
Environment Variables:
Ensure your .env file (or environment variables) contains the necessary configuration for connecting to RabbitMQ and database.
Example .env file:

RABBITMQ_HOST=localhost
RABBITMQ_PORT=5672
RABBITMQ_USER=guest
RABBITMQ_PASSWORD=guest
SQL_HOST=localhost
SQL_USER=audioMitra
SQL_PASSWORD=password
SQL_DATABASE=audioMitraData

5. Running the Application:
Start Consumers:
Open separate terminal windows or tabs for each consumer:

python main/dbConfig/connection_to_database.py
python main/text_to_speech_bhashini/tts.py
These consumers will listen for messages on respective queues (database_events and tts_events).

6. Run the Flask Application:
In the project directory, start the Flask application:

python app.py

This will start the Flask server, exposing RESTful API endpoints for interacting with the application.

7. Testing the Application:
Use a REST client (e.g., Postman, cURL) to send requests to the API endpoints (/api/home, /api/upload, /api/extractText, /api/textSpeech).
Monitor the terminal windows where the consumers are running to observe message processing and interactions with RabbitMQ.

8. Example API Requests
Upload File:
curl -X POST -F "file=@/path/to/your/file.wav" http://localhost:8002/api/upload

Extract Text from Image:
curl -X POST -F "file=image.jpg" http://localhost:8002/api/extractText

Convert Text to Speech:
curl -X POST -H "Content-Type: application/json" -d '{"q":"Hello, world!"}' http://localhost:8002/a