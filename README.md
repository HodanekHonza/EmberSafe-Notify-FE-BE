# EmberSafe Notify Backend

Welcome to the EmberSafe Notify repository! This project consists of both frontend and backend components for the EmberSafe Notify App, which provides real-time temperature monitoring, customizable thresholds for temperature alerts, historical temperature data analysis, and automated emergency response and notification functionalities.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The EmberSafe Notify Backend serves as the backend infrastructure for the EmberSafe Notify application, enabling temperature monitoring, alerting, and historical data analysis functionalities.


## Setup

### Prerequisites

Before getting started, ensure that you have the following installed on your system:

- Node.js (version 14.x or higher)
- MongoDB (version 4.x or higher)
- Access to Clerk and MongoDB accounts with necessary API keys and credentials.
- Hardwario playground installed(iot gateway)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/HodanekHonza/EmberSafe-Notify-FE-BE.git
    ```

2. Navigate to the project directory:

    ```bash
    cd EmberSafe-Notify-FE-BE 
    ```

3. Install dependencies:

    ```bash
    cd server
    npm i
    cd ..
    cd client
    npm i 
    ```

### Configuration

1. Create a `.env` file in the backend directory and configure the MongoDB connection URI:

    ```plaintext
    # MongoDB Configuration
    MONGO_URI=mongodb://localhost:27017/embernotify
    ```

2. Create a `.env.local` file in the frontend directory and configure the Clerk public key for client-side authentication:

    ```plaintext
    # Clerk Client Configuration
    CLERK_PK=your-clerk-public-key
    ```

3. In the backend, create a `.env.local` file and configure the Clerk secret key for backend authentication:

    ```plaintext
    # Clerk Backend Configuration
    CLERK_SK=your-clerk-secret-key
    ```

Ensure that you have proper permissions and access to both MongoDB and Clerk platforms.



## Usage

To start the EmberSafe Notify Backend server, run the following command:

```bash
node index.mjs

---

The server will start listening for incoming requests on the specified port (default is 3000).

To start the EmberSafe Notify client , run the following command:

```bash
npm run dev

---

The server will start listening for incoming requests on the specified port (default is 3000).
## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to use this Markdown content for your README.md file. Let me know if you need further assistance!
