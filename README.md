# Gamez - React Native Project

## Project Overview

**Gamez** is a React Native project designed for creating a mobile gaming prediction experience. This README file provides essential information about the project structure, dependencies, and how to get started.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed (version 16 or later). You can download it from [nodejs.org](https://nodejs.org/).

- **npm**: npm is required for package management and comes bundled with Node.js.

- **React Native CLI**: Install the React Native CLI globally using npm:

  ```bash
  npm install -g react-native-cli
  ```

- **Android/iOS development setup**: Ensure you have either Android Studio or Xcode installed, depending on the platform you want to develop for. Follow the official React Native documentation for platform-specific setup.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd gamez
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project structure follows a typical React Native project layout:

- **android**: Contains Android platform-specific files.

- **ios**: Contains iOS platform-specific files.

- **src**: This is where you will write your application code.

- **node_modules**: Contains project dependencies.

- **package.json**: Defines project metadata and lists dependencies.

- **index.js**: The entry point of the application.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run android`: Build and run the Android app.

- `npm run ios`: Build and run the iOS app.

- `npm run lint`: Run ESLint for code linting.

- `npm start`: Start the React Native development server.

- `npm test`: Run Jest for testing.

## Dependencies

The project uses several third-party libraries and packages, including:

- `@gorhom/bottom-sheet`: Version 4.5.0
- `@react-navigation/bottom-tabs`: Version 6.5.8
- `@react-navigation/native`: Version 6.1.7
- `@react-navigation/native-stack`: Version 6.9.13
- `react`: Version 18.2.0
- `react-native`: Version 0.72.4
- `react-native-badge-avatar`: Version 1.1.2
- `react-native-gesture-handler`: Version 2.12.1
- `react-native-raw-bottom-sheet`: Version 2.2.0
- `react-native-reanimated`: Version 3.5.1
- `react-native-safe-area-context`: Version 4.7.2
- `react-native-screens`: Version 3.25.0
- `react-native-tab-view`: Version 3.5.2
- `react-native-vector-icons`: Version 10.0.0
- `react-native-wheel-pick`: Version 1.2.2

Dev dependencies include tools like ESLint, Prettier, and Jest for code quality and testing.

## Development

To start developing your game, open the project in your favorite code editor and navigate to the `src` directory. This is where you'll write your application code. Refer to the documentation of the libraries and tools used in the project for more information on how to use them.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Push your changes to your fork.
5. Create a pull request to the original repository.
