# Nodemailer Email Sender API

This project is a simple yet powerful Node.js and Express application that allows you to send emails directly from a server using the **Nodemailer** library.

The application requires a connection to a MongoDB database and uses a Gmail account with an **App Password** for authentication.

## ✨ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Emailing:** Nodemailer
- **Environment Variables:** Dotenv
- **Live Reloading:** Nodemon

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/en/) (v14 or higher is recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure the MongoDB server is running)

### 1\. Clone the Repository

First, clone the project from GitHub to your local machine.

```sh
git clone https://github.com/maruf-pfc/send-email-using-nodemailer.git
cd send-email-using-nodemailer
```

### 2\. Install Dependencies

Install all the required npm packages listed in `package.json`.

```sh
npm install
```

### 3\. Configure Environment Variables

Create a `.env` file in the root of the project directory.

```sh
touch .env
```

Now, open the `.env` file and add the following configuration. Replace the placeholder values with your actual data.

```env
PORT=7777
COMPASS="mongodb://localhost:27017/nodemailer"
pass=<YOUR_GMAIL_APP_PASSWORD>
```

### 4\. Get Your Gmail App Password

To use Gmail with Nodemailer, you need to enable 2-Step Verification on your Google Account and generate an **App Password**.

1. Go to your [Google Account](https://myaccount.google.com/).
2. Navigate to the **Security** tab.
3. Under "Signing in to Google," make sure **2-Step Verification** is turned **On**.
4. Click on **App passwords**. You may need to sign in again.
5. At the bottom, click **Select app** and choose **Mail**.
6. Click **Select device** and choose your operating system (e.g., _Windows Computer_).
7. Click **Generate**.
8. Google will provide a 16-character password. **Copy this password** and paste it as the value for the `pass` variable in your `.env` file.

> 🔥 **Important:** Do not use your regular Google account password. You must use the generated App Password.

### 5\. Start the Server

Once your `.env` file is configured, you can start the application.

```sh
npm start
```

The server will start on the port you defined (e.g., `http://localhost:7777`).

## ✉️ How to Use

You can send an email by making a `POST` request to the `/sendemail` endpoint. Use an API client like [Postman](https://www.postman.com/) or Thunder Client.

- **Endpoint:** `POST /sendemail`
- **Body Type:** `JSON`

### Example Request Body

```json
{
  "to": "friend@example.com",
  "from": "your-email@gmail.com",
  "subject": "Learning Nodemailer",
  "body": "This is a test email sent from my Node.js application! I am learning full stack technologies."
}
```

If the request is successful, the email will be sent to the recipient's inbox.
