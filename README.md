# EmberSafe Notify Backend

Welcome to the EmberSafe Notify repository! This project consists of both frontend and backend components for the EmberSafe Notify App, which provides real-time temperature monitoring, customizable thresholds for temperature alerts, historical temperature data analysis, and automated emergency response and notification functionalities.

## Table of Contents

- [Introduction](#introduction)
- [Business Requests Overview](#business-requests-overview)
  - [Automated Emergency Response and Notification System](#automated-emergency-response-and-notification-system)
  - [Real-time Temperature Monitoring with Customizable Thresholds](#real-time-temperature-monitoring-with-customizable-thresholds)
  - [Historical Temperature Data](#historical-temperature-data)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The EmberSafe Notify Backend serves as the backend infrastructure for the EmberSafe Notify application, enabling temperature monitoring, alerting, and historical data analysis functionalities.

## Business Requests Overview

### Automated Emergency Response and Notification System

#### User Story

- **Goal:** Implement an automated emergency response and notification system to promptly inform firefighters of dangerous temperature changes, ensuring rapid response in case of fire or hazardous conditions.
- **Context:** In environments where fire safety is critical, an integrated system that combines temperature monitoring with automated notification capabilities is essential. This system aims to detect and alert emergency responders to potential hazards, such as fires, and provide critical information for swift response.
- **Initial Situation:** Prior to this user story, there was no automated system in place to notify firefighters of dangerous temperature changes, potentially leading to delayed response times during emergencies.
- **Scenario:**
  - Temperature sensors continuously monitor room conditions.
  - As soon as the temperature exceeds a safe threshold (e.g., due to a fire or overheating of equipment), the system automatically identifies this as a potential hazard.
  - The system immediately generates an emergency notification with the actual temperature.
  - Firefighters and relevant personnel are notified via email or phone call and can take immediate action.
  - The notification system ensures that emergency responders are promptly informed, allowing for rapid intervention and mitigation of potential damage or harm.

### Real-time Temperature Monitoring with Customizable Thresholds

#### User Story

- **Goal:** Provide users with the ability to monitor real-time temperature readings and customize temperature thresholds within the EmberSafe Notify application.
- **Context:** Users, such as homeowners, desire real-time temperature monitoring capabilities to ensure comfort and safety. They also want the flexibility to customize temperature thresholds based on their preferences and specific needs.
- **Initial Situation:** Users need a solution to monitor temperature levels in real-time and customize temperature alerts according to their preferences.
- **Scenario:**
  - Users can check real-time temperature readings in the EmberSafe Notify app.
  - They can navigate to the "Temperature Monitoring" section to view current temperature data.
  - Users can observe temperature changes and fluctuations in real-time.
  - They have the option to customize temperature thresholds in the app settings.
  - Users can set thresholds for different temperature ranges (e.g., cold, normal, hot, danger) based on their preferences.
  - After saving the settings, users can confidently monitor and customize temperature settings for comfort and safety.

### Historical Temperature Data

#### User Story

- **Goal:** Enable users to track and review past temperature data within the EmberSafe Notify application.
- **Context:** Users, such as homeowners, want to analyze historical temperature data to gain insights into temperature fluctuations over time. This feature aids in maintaining awareness of potential fire risks and ensuring a safe living environment.
- **Initial Situation:** Users need a feature to track and review past temperature data within the EmberSafe Notify app to assess heating system performance and prevent potential fire hazards.
- **Scenario:**
  - Users can access the Historical Temperature Data feature in the EmberSafe Notify app.
  - They can review temperature trends over a specified period (e.g., past month).
  - Users analyze fluctuations in temperature, particularly during colder mornings and warmer afternoons.
  - After reviewing the data, users can assess heating system performance and ensure fire safety measures are in place.

## Setup

### Prerequisites

Before getting started, ensure that you have the following installed on your system:

- Node.js (version 14.x or higher)
- MongoDB (version 4.x or higher)
- Access to Clerk and MongoDB accounts with necessary API keys and credentials.

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
