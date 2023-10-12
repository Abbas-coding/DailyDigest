
# DailyDigest - Real-time News App

This project uses an External API and Only Works on Localhost.
Get your API Key from https://newsapi.org/ and insert it in App.js for the app to function

# Getting Started with Create React App


DailyDigest is a simple and efficient news app that utilizes the NewsAPI to provide real-time news updates. With DailyDigest, you can stay informed about the latest headlines, breaking news, and trending stories from around the world. This README file provides information on how to set up and use the DailyDigest app.

## Table of Contents

- [Introduction](#dailydigest---real-time-news-app)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Real-time news updates from various sources.
- Search for specific news topics and keywords.
- Dark mode for a comfortable reading experience at night.

## Getting Started

These instructions will help you set up the project on your local machine and start using the DailyDigest app.

### Prerequisites

Before you start, you'll need the following:

- Node.js and npm installed on your machine.
- A NewsAPI API key. You can get one by signing up at [https://newsapi.org/](https://newsapi.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Abbas-coding/DailyDigest.git
   ```

2. Navigate to the project directory:

   ```bash
   cd DailyDigest
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add your NewsAPI API key:

   ```
   REACT_APP_NEWS_API_KEY=YOUR_API_KEY_HERE
   ```

   Replace `YOUR_API_KEY_HERE` with your actual NewsAPI API key.

## Configuration

The DailyDigest app uses environment variables for configuration. You can find the configuration settings in the `.env` file. You should update the `.env` file with your API key as described in the installation section.

## Usage

To start the DailyDigest app, run the following command:

```bash
npm start
```

This will start the app locally, and you can access it in your web browser at `http://localhost:3000`.

You can browse through the latest news, search for specific topics, save articles, and switch to dark mode for nighttime reading.

## Contributing

If you would like to contribute to the DailyDigest app, please follow these steps:

1. Fork the repository to your GitHub account.
2. Clone your fork to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push your changes to your GitHub fork.
6. Create a pull request to the original repository.

Please ensure that your code follows best practices and is well-documented.

---

Thank you for using DailyDigest! If you have any questions or encounter any issues, feel free to create an issue on the GitHub repository. Happy reading!