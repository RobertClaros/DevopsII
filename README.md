# Folder and File Storage and Listing Service

This repository contains a service for storing and listing folders and files. The architecture used is the Onion architecture, with the following layers: Domain, Application, Infrastructure, and Presentation.

## Running the Project

To run the project, you can use Docker Compose. Make sure you have Docker installed on your system and then run the following command at the root of the project:

- ```bash
  docker-compose up
  ```

  This will start the project and run it in the environment configured by Docker Compose.

## Design Patterns

In this project, the following design patterns are used:

### Adapters for Different Storage Types

Adapters pattern is used to allow integration with different types of storage. The first adapter implemented is designed to work with MongoDB as the data storage system.

## Main Routes

The main routes of the service are as follows:

- `/api/files`: This route is used to list and manage files.
- `/api/folders`: This route is used to list and manage folders.
- `/api/files/:id`: This route is used to access detailed information about a specific file.

## Project Architecture

The project follows the Onion architecture, with the following layers:

### Domain Layer

This layer contains the core business logic of the project.

### Application Layer

This layer implements the use cases and application services that interact with the domain layer.

### Infrastructure Layer

This layer handles technical details such as database access and the implementation of adapters for different types of storage.

### Presentation Layer

This layer manages user interfaces and interactions with clients.

## File and Class Naming Convention

For interfaces and classes, we use PascalCase naming convention. For TypeScript files, we use camelCase.

## Contributing

Feel free to contribute to this project! You can send pull requests with improvements, bug fixes, or new features. Before sending a pull request, make sure to review the project's contribution guidelines.
