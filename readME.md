# ✉️ Flights Reminder Service

✨ **`Dynamic Notifications`**: This service manages all reminder and notification needs for the flight booking system, including sending immediate alerts and scheduled notifications to customers about their bookings and flight details.

💬 **`Reliable Messaging with RabbitMQ`**: Leveraging RabbitMQ, the service efficiently handles message queues for seamless communication and notification dispatching, ensuring customers receive timely updates.

⚙️ **`Customizable Scheduling`**: With the support of node-cron, reminders can be scheduled to be sent at specified intervals, catering to different customer needs and preferences.

🛡️ **`Secure and Efficient`**: Using robust access control measures and secure channels, the service ensures that customer information remains confidential while providing consistent and reliable notifications.

🎯 **`Focused Customer Experience`**: By automating reminders and notifications, the service enhances the overall customer experience, keeping passengers informed and engaged throughout their journey.

## 🔍 Exploring the `Folder Structure`

The `src` folder houses all the actual source code of the project, excluding any tests. It's organized into various subfolders to keep the codebase clean and maintainable. Let's take a look inside the `src` folder:

- ⚙️ **`config`**: This folder contains configurations and setups for libraries or modules. For example:

  - **`server-config.js`**: Sets up `dotenv` for using environment variables in a cleaner fashion.

  - **`logger-config.js`**: Configuring a logging library for meaningful logs is also managed here.

  - **`config.json`**: Sets up `database` configuration, contains development, testing and production environment configuration such as
    - "username"
    - "password"
    - "database"
    - "host"
    - "dialect"

- 💼 **`controllers`**: Acts as the intermediary between incoming requests and the business layer:

  - Receives incoming requests and data, then passes them to the business layer.
  - Structures API responses based on the business layer's output before sending them to the client.

- ⚠️ **`errors`**: Contains custom error classes used across the project to handle exceptions.

- 🔍 **`middlewares`**: Intercepts incoming requests and allows for the implementation of:

  - Validators,
  - authenticators,
  - and other request interception logic.

- 🛠️ **`migrations`**: Houses database migration files to manage schema changes over time:

  - Creating new tables, altering existing tables, and adding indexes.

- 🧩 **`models`**: Contains JavaScript representations of database schemas.

- 🗃️ **`repositories`**: Provides logic for interacting with the database:

  - Houses all `raw` queries or `ORM` queries.

- 🌐 **`routes`**: Defines API routes for the application:

  - Registers routes with corresponding middlewares and controllers.

- 📝 **`seeders`**: Populates the database with default values for roles, such as customer, flight_company, and admin.

- 🔧 **`services`**: Manages core application functionality and business logic, communicating with the repository layer for database interaction.

- 🔧 **`utils`**: Contains utility functions, helper methods, enums, and error handlers:
  - These functions provide common support to the rest of the application.

## 🥇 Project Setup

1. ⬇️ **Download**: Grab this project template from GitHub and open it in your favorite text editor.

2. 📥 **Install Dependencies**: Navigate to the project folder and execute the following command to install all necessary dependencies:

   ```
   npm install
   ```

3. 🔌**Environment Configuration**: In the root directory, create a `.env` file and add the following environment variables:

   ```
    PORT=
    EMAIL_ID=
    EMAIL_PASS=
    RABBITMQ_URL=
    QUEUE_NAME=
   ```

   Here's an example configuration:

   ```
    PORT=5000
    EMAIL_ID='abc@def.xyz'
    EMAIL_PASS='ekrerjekdsnjryf'
    RABBITMQ_URL='amqp://localhost'
    QUEUE_NAME='noti-queue'
   ```

4. 🚀 **Initialize Sequelize**: Navigate to the `src` folder and execute the following command to initialize Sequelize:

   ```
   npx sequelize init
   ```

   This will create a `config.json` file inside the `config` folder.

5. 🔌 **Configure Database**: Open `config.json` and update the database configuration:

   - Add your database username, password, and dialect (e.g., `mysql`, `mariadb`, `mssql`, etc.).

6. 💾 **Database Setup**: Populate the database by running the following commands:

   ```
   npx sequelize db:create
   npx sequelize db:migrate
   ```

7. ⚡**Start the Server**: Begin running the server using this command:

   ```
   npm start
   ```

## ⚙️ Technologies Used

- **`Node.js`**: A versatile, server-side JavaScript runtime for building scalable and efficient applications.

- **`Express.js`**: A minimalist web framework for Node.js, providing robust routing and middleware capabilities.

- **`Git`**: A version control system for managing code changes and collaboration among team members.

- **`MSSQL`**: A relational database management system that offers robust data storage and querying capabilities.

- **`Sequelize ORM`**: An object-relational mapping tool for Node.js that simplifies database interactions and model management.

- **`Postman`**: A popular API development tool for testing, documenting, and collaborating on APIs.

- **`RabbitMQ`**: A robust message broker software that facilitates communication between different parts of the application by enabling asynchronous message passing and queuing. It supports advanced routing, distributed systems, and flexible message delivery, making it a reliable tool for managing events and notifications in the system.

## 📦 Packages and Their Usage

- **`amqplib`** 📬 : This package is a client for working with RabbitMQ, a popular message broker. It enables you to establish connections to RabbitMQ servers, manage message queues, publish messages, and consume messages from queues. It's essential for implementing asynchronous messaging and communication between different parts of your application.

- **`axios`** 🌐: A popular HTTP client for making requests to RESTful APIs and other web services. It provides a simple interface for sending GET, POST, PUT, DELETE, and other HTTP requests. With its promise-based syntax, axios makes it easy to handle asynchronous operations and manage responses.

- **`node-cron`** ⏰: A scheduling package that allows you to set up cron jobs in your Node.js applications. Cron jobs are tasks that run at specified intervals, such as every minute, hour, or day. This package is useful for automating repetitive tasks such as sending reminders, cleaning up data, or generating reports.

- **`nodemailer`** 📧: A Node.js library for sending emails easily and reliably. It supports various email protocols (e.g., SMTP, Sendmail) and features such as HTML formatting, attachments, and multiple recipients. Nodemailer is commonly used for sending notifications, confirmations, and other types of emails within applications.

- **`dotenv`** 🔧: Loads environment variables from a `.env` file into `process.env`, allowing you to securely store sensitive information such as API keys and database credentials.

- **`express`** 🚀: A web application framework for Node.js that provides a minimalist structure for building APIs and web applications. It offers routing, middleware, and other essential features for building scalable server-side applications.

- **`http-status-codes`** 📜: A package providing easy access to standard HTTP status codes, which makes it convenient to set response statuses and handle different types of API responses.

- **`pluralize`** 🔀: A utility library for transforming singular words into plural and vice versa. This is used mainly to converting models name in plural form, which is a use case in identity reset function.

- **`sequelize`** 💽: An object-relational mapping (ORM) library for Node.js, allowing you to interact with your database using models and associations. It simplifies database operations and offers a high-level abstraction.

- **`sequelize-cli`** 🛠️: A command-line interface for Sequelize that provides commands for managing migrations, models, and other database-related tasks. It facilitates database schema changes and updates.

- **`tedious`** 💾: A Node.js driver for interacting with Microsoft SQL Server databases. It allows you to execute queries, manage transactions, and handle database connections.

- **`winston`** 🛡️: A logging library for Node.js that supports various log levels and transports (such as file or console logging). It helps you track and manage application logs effectively for debugging and monitoring purposes.

## Project Details

### 💾 Database Structure

The project uses a relational database to store data for various entities:

**DATABASE NAME** : `Flights_ReminderDB`

---

- **NotificationTickets** 🔔: Stores notifications information such as subject, content, recepientEmail, etc.

  ```
      +-------------------------+
      |   NotificationTickets   |
      +-------------------------+
      |  id  -> (PK, Identity)  |
      |  subject                |
      |  content                |
      |  recepientEmail         |
      |  status   (Check Const) |
      |  notificationTime       |
      |  createdAt              |
      |  updatedAt              |
      +-------------------------+

      [status] values IN : ['pending','success','failed']

  ```

---

### 🌐 API Calls

The API endpoints use different `HTTP` methods(`GET`, `POST`, `PUT`, `DELETE`) and follow `RESTful` design principles.

The project provides a variety of API endpoints for different functionalities:

**Reminder Service BASE ADDRESS** : `http:localhost:5000/`

---

- **Notification Tickets**: Endpoints for creating a notification tickets.

  | HTTP Method | Endpoint            | Middleware                   | Controller            |
  | :---------- | :------------------ | :--------------------------- | :-------------------- |
  | GET         | `/api/tickets/ping` | `checkAuth`                  | `PingCheckController` |
  | POST        | `/api/tickets/`     | `validateCreateNotification` | `create`              |

---

### Subscribes to Message Queue

- The Flights Reminder Service subscribes to message queues from RabbitMQ to receive and handle notifications efficiently. The service establishes a connection with RabbitMQ and listens for messages published to specific queues. These messages can include reminders and notifications related to flight bookings and schedules.

- When a new message is received, the service processes the message by extracting the relevant information and taking appropriate action, such as sending an email or SMS reminder to the customer. This subscription to RabbitMQ queues allows the service to handle reminders asynchronously, ensuring that notifications are delivered in a timely and efficient manner.

---

### ⚠️ Error Handling

Error handling is a crucial aspect of the project, ensuring smooth operation and useful feedback for clients:

- **Custom Error Classes**: The project uses custom error classes like `BaseError`, `BadRequestError`, `InternalServerError`, and `AppError` to manage different types of errors and return appropriate HTTP status codes.

- **Middleware**: The `errorHandler` middleware function intercepts and handles exceptions by identifying the type of error and responding accordingly. It is executed just before express default error handler runs

- **Structured Responses**: Errors are structured as JSON objects with properties such as status code, message, and error explanation. This consistent response format simplifies troubleshooting for clients.

- **Default Handling**: If an unknown error occurs, the middleware throws a custom `InternalServerError` and log the error in `Logger`.

- **Logging**: All errors are logged for monitoring and troubleshooting purposes, enabling quick identification and resolution of problems.

The combination of these features ensures reliable and user-friendly error handling throughout the application.

---
