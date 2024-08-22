# reqspecs

![reqspects](/frontend/public/logo-423x528.png "reqspec")

## mPulse Innovation Day 2024

This open source project was created for the mPulse Innovation Day 2024 event.

### Problem

Product Managers often struggle with keeping track of various documents, requirements, and strategies across multiple platforms, leading to inefficiencies and lost information. Without a dedicated tool, product strategy and requirements can become fragmented, leading to a lack of clarity and focus. Teams often face difficulties in collaborating effectively on product strategies and requirements, especially when these documents are scattered or managed inconsistently.

Here is a list of common challenges faced by product managers:

- Disorganized Documentation: Product managers frequently struggle with keeping track of various documents, requirements, and strategies across multiple platforms, leading to inefficiencies and lost information. This app centralizes all project-related documents in a single, long-term repository, ensuring everything is organized and easily accessible.
- Fragmented Product Strategy: Without a dedicated tool, product strategy and requirements can become fragmented, leading to a lack of clarity and focus. The app provides a structured environment where product managers can define, refine, and align their strategies with specific requirements, ensuring a cohesive approach to feature development.
- Inefficient Collaboration: Teams often face difficulties in collaborating effectively on product strategies and requirements, especially when these documents are scattered or managed inconsistently. The app enables seamless collaboration by allowing multiple users to contribute to and refine project strategies in real-time, ensuring that everyone is on the same page.
- Lack of Historical Insight: Product managers need to reference past projects and decisions to inform current and future strategies. This app provides a long-term repository, allowing for easy access to historical data and insights, which can be critical in making informed decisions.

### Solution

To address these challenges, we propose a web application called "reqspecs" that provides a centralized platform for product managers to define, refine, and align their product strategies and requirements. The app offers the following key features:

- Document Repository: reqspecs serves as a central repository for all project-related documents, including product strategies, requirements, user stories, and more. Users can create, organize, and access projects and their requirements in a structured manner, ensuring that all project-related information is easily accessible.
- Strategy Alignment: Product managers can define and refine their product strategies within the app, aligning them with specific requirements and user stories. This feature ensures that product strategies are clear, focused, and directly tied to the features being developed, helping teams stay on track and work towards common goals.
- Collaboration: reqspecs enables seamless collaboration by allowing multiple users to contribute to and refine project strategies. Users can comment on strategies, suggest changes, and provide feedback, ensuring that everyone is on the same page and working towards a shared vision.
- Historical Insights: The app provides a historical record of past projects, decisions, and strategies, allowing product managers to reference this data to inform current and future strategies. This feature helps teams learn from past experiences and make informed decisions based on historical insights.

## How to run the project

### Step 1: Fork and clone the repository

Fork the repository and clone it to your local machine.


### Step 2: Ensure Docker and Docker Compose are installed

Make sure you have Docker and Docker Compose installed on your machine.
To test if Docker is installed, run the following command in your terminal:

```bash
docker --version
```

To test if Docker Compose is installed, run the following command in your terminal:

```bash
docker-compose --version
```

If you don't have Docker and Docker Compose installed, you can download them from the official Docker website:
[https://www.docker.com/get-started](https://www.docker.com/get-started)

### Step 3: Configure environment variables

Copy the .env.sample file to .env and update the environment variables as needed.

```bash
cp .env.sample .env
```

Change the values of the environment variables in the .env file as needed.

```text
MONGO_USERNAME=username_goes_here
MONGO_PASSWORD=password_goes_here
MONGO_DATABASE=reqspecs
JWT_SECRET="long_random_string_here"
```

### Step 4: Build and run the Docker containers

Run the following command to build and run the Docker containers:

```bash
docker-compose up --build
```

This command will build the Docker containers and start the application. You should see the output of the application in the terminal.

You can also use the make command to build and run the Docker containers:

```bash
make up
```

### Step 5: Access the application

Once the Docker containers are running, you can access the application by opening a web browser and navigating to the following URL:
[http://localhost:3000](http://localhost:3000)

You should see the reqspecs application running in your browser.

### Stopping the Docker containers

To stop the Docker containers, press `Ctrl + C` in the terminal where the containers are running.

You can also use the following command to stop the Docker containers:

```bash
docker-compose down
```

You can also use the make command to stop the Docker containers:

```bash
make stop
```

### Restarting the Docker containers

To restart the Docker containers, using the following make command:

```bash
make restart
```

This command will stop and restart the Docker containers.

## Tech Stack

This application is using the MERN (MongoDB, ExpressJS, ReactJS, and NodeJS) stack:

- UI Styling: Tailwind CSS
- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Deployment: Docker, Docker Compose

## Team Members

- Nicole Naegeli
- Robert (Bob) Martin
- Rodney Gauna
- Sherri Yandell

## Support

If you have any questions, you can do one of the following:

- Send an email to [rodney.gauna@healthtrio.com](mailto:rodney.gauna@healthtrio.com)
- Send an email to [rodneygauna@gmail.com](mailto:rodneygauna@gmail.com)
- Create an issue in the GitHub repo - guide here [GitHub - Create an issue or pull request](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop)
