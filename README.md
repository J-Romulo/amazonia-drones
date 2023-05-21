# Amazonia Drones

Welcome to the README file of the Amazonia Drones project, a small frontend application built using Next.js. This document will guide you on how to start the application in development mode, build a Docker image, create a Docker container, and provide an overview of the application's purpose and functionality.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Building Docker Image](#building-docker-image)
3. [Creating Docker Container](#creating-docker-container)
4. [Application Purpose](#application-purpose)

## Getting Started

To get started with the Amazonia Drones, follow the steps outlined below:

1. Clone the repository to your local machine:
```bash
   git clone <repository-url>
```
2. Navigate to the project directory:
```bash
   cd amazonia-drones
```
3. Install the dependencies using npm / yarn:
```bash
   npm install | yarn
```
4. Create a .env file in the root directory and set the required environment variables. You can use the .env.example file as a template.
```bash
   cp .env.example .env
```
   Update the variables in the .env file as per your configuration.

5. Run the application in development mode:
```bash
   npm run dev | yarn dev
````
   This will start the development server, and you can access the application in your browser at http://localhost:3000.

## Building Docker Image

To build a Docker image for the Fastest Route Calculator application, perform the following steps:

1. Ensure Docker is installed on your machine.

2. Build the Docker image using the provided Dockerfile:
```bash
   docker build -t amazonia-drones .
````
   This command will build a Docker image named amazonia-drones using the Dockerfile in the repository.

## Creating Docker Container

Once the Docker image is built, you can create a Docker container to run the application. Follow these steps:

1. Run the Docker container using the built image:
```bash
   docker run -p 3000:3000 amazonia-drones
````
   This command maps the container's port 3000 to the host's port 3000 and starts the application within the container.

2. Open your browser and access the application at http://localhost:3000.

## Application Purpose

The Amazonia Drones is a web application that helps users determine the fastest route between an initial position, an object position, and a finish position. It utilizes Next.js as the framework and is deployed on Vercel on this [link](https://amazonia-drones.vercel.app).

By selecting the initial position, object position, and finish position on the map, users can calculate the fastest route based on a predefined algorithm. The application provides visual representation of the route and additional information such as time of arrival.

Feel free to explore the application's functionality and experiment with different route scenarios.
