# AudioMitra: AI-Powered Document & Content Transformation

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.x-000000.svg?logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x%2B-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react&logoColor=white)](https://react.dev/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0%2B-4479A1.svg?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.0%2B-47A248.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tesseract OCR](https://img.shields.io/badge/Tesseract_OCR-5.x-F4B300.svg?logo=tesseract&logoColor=white)](https://tesseract-ocr.github.io/)
[![Google Cloud TTS](https://img.shields.io/badge/Google_Cloud_TTS-API-4285F4.svg?logo=google-cloud&logoColor=white)](https://cloud.google.com/text-to-speech)

**Author**: Vilal Ali
## 1. Introduction

AudioMitra is an innovative platform designed for **document and content transformation**, providing **authentic and trustworthy conversions** by leveraging the computational power of **Artificial Intelligence** and the cognitive abilities of **human-in-the-loop validation**. It aims to streamline language processing tasks, enhancing accessibility and efficiency.

## 2. Problem Statement

Many individuals and organizations require efficient and accurate conversion of documents and content into various formats. Traditional methods are often time-consuming, prone to errors, and lack the flexibility for diverse output needs. Specifically, there's a need for:

*   **Reliable Text Extraction**: Converting digital images or scanned documents into editable text files using **Optical Character Recognition (OCR)**.
*   **Accessible Audio Content**: Transforming text into audio formats through **Text-to-Speech (TTS) conversion**, enabling the creation of audiobooks or accessible versions of content.
*   **Quality Assurance**: Ensuring the authenticity and reliability of these transformations, often requiring a blend of automated and human validation.

AudioMitra addresses these challenges by offering a flexible solution that adapts human and machine involvement based on the required accuracy and nature of the transformations.

### Stakeholders

The primary users include:
*   **Educational Institutions (Schools, Colleges, Universities)**: For digitizing textbooks, lecture notes, and other educational materials into various accessible formats.
*   **Libraries**: For converting physical books into digital text and audio formats.
*   **Content Creators**: For generating audio versions of their written content.
*   **Individuals with Accessibility Needs**: Requiring text and audio formats of documents.

## 3. Abstract Overview of the Proposed Solution

AudioMitra provides a comprehensive solution for **text extraction, content validation, and text-to-speech/audio conversion**. The system leverages **open-source APIs** for both OCR and TTS, ensuring flexibility and scalability while offering options to integrate other advanced APIs.

Key aspects of the solution include:
*   **Text Extraction**: Utilizes an **Open-Source OCR API** (with options for others) to accurately convert text from images.
*   **Content Validation**: OCR'd content undergoes a validation process, allowing for **human intervention** to edit and refine text, ensuring high accuracy.
*   **Output Formats**: Generates both **validated text content** and high-quality **audio files** from the refined text.
*   **Web Accessibility & Multi-user System**: Accessible via web browsers with **user authentication**, supporting various roles such as **validators, authors, and voice-over contributors**, promoting collaborative efficiency and accessibility.

## 4. Technology Stack

*   **Backend**: Flask (Python), Node.js, MySQL, MongoDB, Tesseract OCR, Google Cloud TTS (or other open-source TTS APIs)
*   **Frontend**: React Framework, Bootstrap, Tailwind CSS
*   **Orchestration/Architecture**: Microservices, API Gateway, Event-Driven Architecture, Security Best Practices.
*   **Design Patterns**: Factory Pattern, Observer Pattern, Singleton Pattern.

## 5. Project Domain

AudioMitra is primarily categorized under the **Education** domain. Its core focus is on transforming educational documents and content from image to text and then to speech, directly enhancing learning experiences and the accessibility of educational materials. This also extends to **Digital Libraries** and **Content Accessibility** initiatives.

## 6. Key Functionalities

### Core Features
*   **Image to Text Transformation**: Utilizes an Open-Source API for **OCR**, converting images into editable text.
*   **Text Editing and Review**: Provides robust tools for **text editing and human review**, ensuring the accuracy and quality of the extracted text.
*   **Text to Audio Transformation**: Converts validated text into audio format using an **Open-Source/Cloud TTS API**, facilitating the creation of audiobooks and accessible content.
*   **Browser-Based Access**: Offers a user-friendly and accessible **web interface** for document conversion.
*   **Role-Based Access Control**: Supports various user roles, including **validators, authors, and voice-over artists**, enabling collaborative workflows.

### Architectural Tactics
*   **Microservices Architecture**: For modularity, scalability, and independent deployment of services.
*   **API Gateway**: Centralized entry point for managing and securing API requests.
*   **Event-Driven Architecture**: For asynchronous communication and responsiveness between services.
*   **Security**: Implementing authentication, authorization, and data encryption.

### Design Patterns
*   **Factory Pattern**: To create diverse objects seamlessly (e.g., different OCR or TTS service instances).
*   **Observer Pattern**: To efficiently track state changes (e.g., document status updates during validation).
*   **Singleton Pattern**: To ensure singular instances of critical resources (e.g., database connections).

## 7. Expected Time to Build a Prototype

This timeline assumes a dedicated team of 4 members, with each member potentially taking on multiple roles to ensure the project's success.

*   **Research and Planning**: 1 week
*   **Design**: 2 weeks
*   **Development**: 4 weeks
*   **Testing**: 1 week
*   **Refinement**: 1 week
*   **Total Estimated Time**: 9 weeks

## 8. Conclusion

AudioMitra stands as a powerful platform poised to revolutionize content accessibility and management. By ingeniously combining **OCR and TTS technologies** with **human-in-the-loop validation**, it ensures that content transformations are not only efficient but also highly authentic and reliable. Its support for multilingual content and a collaborative multi-user environment makes it an invaluable tool for enhancing educational resources, enriching digital libraries, and advancing global knowledge dissemination. With its robust **MERN-like tech stack** and thoughtful architectural design, AudioMitra is set to significantly impact how we interact with and consume information.

---

## 9. Project Configuration

Follow these steps to set up and run the AudioMitra application locally.

### Prerequisites

Ensure you have the following installed on your development machine:

*   **Node.js** (LTS version recommended, v18.x or higher) - Download from [nodejs.org](https://nodejs.org/).
*   **npm** (comes with Node.js)
*   **Python 3.9+** - Download from [python.org](https://www.python.org/downloads/).
*   **`virtualenv`**: `sudo apt install python3-virtualenv` (or `pip install virtualenv`)
*   **`ffmpeg`**: `sudo apt install ffmpeg` (required for audio processing)
*   **`tesseract-ocr`**: `sudo apt install tesseract-ocr` (required for OCR functionality)
*   **MySQL Server**: Install and configure locally (refer to [MySQL Installation Guide](https://dev.mysql.com/doc/refman/8.0/en/installing.html)).
*   **MongoDB Server** (Optional, for future use/alternative data storage; currently MySQL is defined)

### 1. Clone the Repository

Start by cloning the AudioMitra repository to your local machine:
```bash
git clone https://github.com/vilalali/audioMitra.git
cd audioMitra
```

### 2. Frontend Setup (React.js)

The frontend provides the user interface for document and content transformation.

1.  **Navigate to the frontend directory**:
    ```bash
    cd audioMitra-frontend
    ```
2.  **Install Node.js Packages**:
    ```bash
    npm install --no-lockfile
    ```
3.  **Update API Base URL**:
    *   Edit the `cred.js` file located at `audioMitra-frontend/src/creds.js`.
    *   Set `API_URL` to point to your Node.js backend server. **Important**: If running on the same machine, use `http://localhost:port` or your machine's local IP address.
        ```javascript
        // audioMitra-frontend/src/creds.js
        const API_URL = 'http://localhost:8002'; // Ensure this matches your Node.js backend port
        export { API_URL };
        ```
4.  **Start the Frontend Server**:
    ```bash
    npm start
    ```
    The frontend should now be running, typically accessible at `http://localhost:3000` (check your console for the exact port if different).

### 3. Backend Setup for Python (Flask)

The Python backend handles OCR and TTS processing.

1.  **Navigate to the Python backend directory**:
    ```bash
    cd ../audioMitra-backend
    ```
2.  **Establish Python Virtual Environment**:
    ```bash
    python3 -m venv audioMitraVenv
    source audioMitraVenv/bin/activate
    ```
3.  **Install Python Packages**:
    ```bash
    pip install -r audioMitraRequirement.txt
    ```
    *   **`audioMitraRequirement.txt` content:**
        ```
        blinker==1.7.0
        certifi==2024.2.2
        cffi==1.16.0
        charset-normalizer==3.3.2
        click==8.1.7
        cryptography==42.0.5
        Flask==3.0.2
        Flask-Cors==4.0.0
        idna==3.6
        itsdangerous==2.1.2
        Jinja2==3.1.3
        jwt==1.3.1
        MarkupSafe==2.1.5
        mysql-connector-python==8.2.0
        packaging==24.0
        pillow==10.2.0
        protobuf==4.21.12
        pycparser==2.22
        pydub==0.25.1
        pytesseract==0.3.10
        pytz==2024.1
        requests==2.31.0
        urllib3==2.2.1
        Werkzeug==3.0.1
        ```
4.  **Start Python Backend Server**:
    ```bash
    python3 app.py
    ```
5.  **Test the Python API**:
    *   Open your web browser and navigate to: `http://localhost:5000/home` (assuming Flask runs on port 5000).
    *   **Expected Output**: `Hello, your backend is running successfully.`

### 4. Backend Setup for Node.js

The Node.js backend likely serves as an API Gateway or handles specific services.

1.  **Ensure you're in the `audioMitra-backend` directory**:
    ```bash
    # If you're still in the Python venv, deactivate it first:
    # deactivate
    cd ../audioMitra-backend # Or ensure you are in the directory containing package.json for Node.js
    ```
2.  **Install Node.js Packages**:
    ```bash
    npm install --no-lockfile
    ```
3.  **Start Node.js Backend Server**:
    ```bash
    npm run start
    # or if 'start' script uses nodemon:
    # npm start
    # or you might have a custom script like:
    # npm run run
    # or
    # npm run-script run
    ```
    Ensure this server is running on the port specified in your `audioMitra-frontend/src/creds.js` (e.g., `8002`).

### 5. Database Configuration (MySQL)

AudioMitra uses MySQL for user and content data storage.

1.  **Install MySQL** if you haven't already.
2.  **Create a MySQL user and database**:
    ```sql
    CREATE USER 'audioMitra'@'localhost' IDENTIFIED BY 'password';
    CREATE DATABASE audioMitraData;
    GRANT ALL PRIVILEGES ON audioMitraData.* TO 'audioMitra'@'localhost';
    FLUSH PRIVILEGES;
    ```
    *(Adjust username, password, and host as needed for your setup.)*
3.  **Create a `.env` file** in the root directory of your Node.js backend (`audioMitra-backend/.env`) with your MySQL credentials:
    ```
    # audioMitra-backend/.env
    SQL_HOST="localhost"
    SQL_USER="audioMitra"
    SQL_PASSWORD="password"
    SQL_DATABASE="audioMitraData"
    ```
4.  **Database Schema**:
    *   You'll need to create the tables in the `audioMitraData` database.
    *   **User Table**: Stores user authentication and profile information.
        ```sql
        CREATE TABLE User (
            timeStamp VARCHAR(255) NOT NULL,
            userID VARCHAR(255) PRIMARY KEY,
            -- Add other user fields like username, password_hash, email, role, etc.
            username VARCHAR(255) UNIQUE,
            password_hash VARCHAR(255),
            email VARCHAR(255)
        );
        ```
    *   **Ocr Table**: Stores details of extracted text content.
        ```sql
        CREATE TABLE Ocr (
            ocrTimeStamp VARCHAR(255) NOT NULL,
            ocrID VARCHAR(255) PRIMARY KEY,
            userID VARCHAR(255), -- Foreign key to User
            originalImagePath VARCHAR(255),
            extractedText TEXT,
            status VARCHAR(50), -- e.g., 'pending_validation', 'validated'
            FOREIGN KEY (userID) REFERENCES User(userID)
        );
        ```
    *   **Translation Table** (If translation is implemented):
        ```sql
        CREATE TABLE Translation (
            translationTimeStamp VARCHAR(255) NOT NULL,
            translationID VARCHAR(255) PRIMARY KEY,
            ocrID VARCHAR(255), -- Foreign key to Ocr
            targetLanguage VARCHAR(50),
            translatedText TEXT,
            status VARCHAR(50), -- e.g., 'pending_review', 'reviewed'
            FOREIGN KEY (ocrID) REFERENCES Ocr(ocrID)
        );
        ```
    *   **Speech Table** (If TTS is implemented):
        ```sql
        CREATE TABLE Speech (
            speechTimeStamp VARCHAR(255) NOT NULL,
            speechID VARCHAR(255) PRIMARY KEY,
            contentID VARCHAR(255), -- Could link to Ocr or Translation
            sourceText TEXT,
            audioFilePath VARCHAR(255),
            language VARCHAR(50),
            voiceType VARCHAR(50),
            FOREIGN KEY (contentID) REFERENCES Ocr(ocrID) -- Or Translation(translationID)
        );
        ```

---
## Project Demo:

https://github.com/vilalali/audioMitra/assets/46487934/35b7d318-86fe-40f4-bce3-bde9f449e82f

---

## Author
**Vilal Ali**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vilal-ali/)
---

