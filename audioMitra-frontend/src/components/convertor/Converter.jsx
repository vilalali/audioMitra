import { useState, useContext } from "react";
import Stage1_1UploadImage from "./Stage1_1UploadImage";
import Stage1_2SourceLanguage from "./Stage1_2SourceLanguage";
import Stage1_3SelectTask from "./Stage1_3SelectTask";
import Stage2_1View from "./Stage2_1ImageView";
import Stage2_2TextView from "./Stage2_2TextView";
import Stage3AudioPlayer from "./Stage3AudioPlayer";

import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";


const Process = () => {
  const { API_URL } = useContext(GlobalContext);
  const [imgListName, setImgListName] = useState([]);
  const [textStatus, setTextStatus] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [audioName, setAudioName] = useState(null);

  const audioUrl = `${API_URL}/datadir/audio/${audioName}`;

  const textToAudio = async () => {
    setIsLoading(true);
    setAudioName(null);

    try {
      const response = await axios.post(
        `${API_URL}/api/textSpeech`,
        { q: editedText },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 200) {
        setAudioName(response.data.audioName);
        console.log("extracted Text:", response.data);
      }
    } catch (error) {
      console.log("Error extracting text:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Stage1_1UploadImage setImgListName={setImgListName} setTextStatus={setTextStatus} />

      <div className="container flex flex-wrap mt-5 border-t-2 border-orange-200">
        <h1 className="text-3xl text-center h-10 rounded-full text-slate-800 bg-orange-200 font-bold border border-orange-200 -ml-5 w-10 border-t-0">
          2
        </h1>
      </div>

      {textStatus === "True" ? (
        <div>
          <div className="w-[500px] mx-auto text-center">
            <TextView editedText={editedText} setEditedText={setEditedText} />
          </div>
        </div>
      ) : (
        <Stage2_2TextView
          imgListName={imgListName}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      )}

      {(textStatus === "True") | (editedText.length > 0) ? (
        <div className="text-center">
          <button
            className="text-3xl px-6 py-3 mt-2 bg-orange-200 font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-orange-600 hover:bg-orange-100 ml-auto rounded-full"
            onClick={textToAudio}
          >
            {isLoading ? "Processing, Please wait..." : "Text To Speech"}
          </button>
        </div>
      ) : (
        ""
      )}

      {audioName ? (
        <div className="">
          <h1 className="text-3xl">Audio Player</h1>
          <Stage3AudioPlayer audioUrl={audioUrl} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Process;
