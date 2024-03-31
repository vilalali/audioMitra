import { useState, useContext } from "react";
import axios from "axios";
import Stage1_1UploadImage from "./Stage1_1UploadImage";
import Stage1_2SourceLanguage from "./Stage12SourceLanguage";
import Stage1_3SelectTask from "./Stage13SelectTask";

import { GlobalContext } from "../../context/GlobalContext";
import IconsSubmit from "../IconsSubmit";
import Popup from "../../popup/Popup";

const Stage14Action = ({ setImgListName, setTextStatus }) => {
  const { API_URL } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFileType, setSelectedFileType] = useState("text");
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [ocrEnabled, setOcrEnabled] = useState(false);
  const [languageOCR, setLanguageOCR] = useState("");
  const [selectTTSEngine, setSelectTTSEngine] = useState("");

  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleTTSEngineChange = (e) => {
    setSelectTTSEngine(e.target.value);
  };

  const handleLanguageOCR = (e) => {
    setLanguageOCR(e.target.value);
  };

  const handleOcrToggle = () => {
    setOcrEnabled(!ocrEnabled);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTextStatus(false);
    setImgListName([]);

    // Check required fields based on the value of selectedFile
    if (
      selectedFileType === "text" &&
      (selectedLanguage === "" || selectTTSEngine === "")
    ) {
      setAlertMessage(true);
      setMessage("Please select source language and TTS engine");
      setIsLoading(false);
      setTimeout(() => {
        setAlertMessage(false);
        setMessage("");
      }, 30000);
      return;
    } else if (
      selectedFileType === "image" &&
      (selectedLanguage === "" || languageOCR === "" || selectTTSEngine === "")
    ) {
      setAlertMessage(true);
      setMessage("Please select source language, OCR, and TTS engine");
      setIsLoading(false);
      setTimeout(() => {
        setAlertMessage(false);
        setMessage("");
      }, 30000);
      return;
    }

    const formData = new FormData();
    if (selectedFileType === "image") {
      formData.append("file", selectedFile, selectedFile.name);
      formData.append("sourceLanguage", selectedLanguage);
      formData.append("languageOCR", languageOCR);
      formData.append("TTSEngine", selectTTSEngine);
    } else {
      formData.append("text", "True");
      formData.append("sourceLanguage", selectedLanguage);
      formData.append("TTSEngine", selectTTSEngine);
    }

    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setImgListName(response.data.filename);
      setTextStatus(response.data.textStatus);
      console.log("response:", response.data);
    } catch (error) {
      console.error("Error in api/upload:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        {alertMessage ? (
          <Popup setOpenModal={setAlertMessage} message={message} />
        ) : null}
      </div>
      <div className="flex flex-wrap border-t-2 border-orange-200 mt-0.5 justify-between">
        <div className="w-full sm:w-12">
          <h1 className="text-3xl text-center h-10 rounded-full text-slate-900 bg-orange-200 font-bold mb-4 border border-orange-400 -ml-5 -m-1 w-10 border-t-0 -mt-0.5">
            1
          </h1>
        </div>
        <div className="w-full sm:w-1/5">
          <Stage1_1UploadImage
            selectedFile={selectedFile}
            selectedFileType={selectedFileType}
            setSelectedFileType={setSelectedFileType}
            handleFileChange={handleFileChange}
          />
        </div>
        <div className="w-full sm:w-1/5">
          <Stage1_2SourceLanguage
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
          />
        </div>

        <div className="w-full sm:w-1/5">
          <Stage1_3SelectTask
            handleOcrToggle={handleOcrToggle}
            languageOCR={languageOCR}
            handleLanguageOCR={handleLanguageOCR}
            ocrEnabled={ocrEnabled}
            selectedFileType={selectedFileType}
            selectTTSEngine={selectTTSEngine}
            handleTTSEngineChange={handleTTSEngineChange}
          />
        </div>

        <div className="w-full sm:w-1/4">
          <div>
            <div className="bg-orange-200 font-bold py-2 pl-4 mb-2">
              1.4 Action
            </div>
            <div className="text-center justify-between">
              <button
                className="px-2 py-2 mt-2 bg-orange-200 font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-orange-400 hover:bg-blue-100 rounded-full text-start"
                onClick={handleSubmit}
              >
                {isLoading ? <IconsSubmit /> : "Submit Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stage14Action;
