# Online shop

## Application break down

The application is comprised of 2 parts

1. webapp -> Frontend for the applicaiton (written in React and Typescript, MUI)
2. api -> Backend (written in Node.js)
3. db -> DB using MySql

## Requirements

1. Docker [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
2. Docker Compose [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
3. Node v17.9.1 [https://nodejs.org/fr/blog/release/v17.9.1/](https://nodejs.org/fr/blog/release/v17.9.1/)

## Setup

### webapp

The client side application uses node version 18 From the root of the `webapp` directory install the node dependencies using the command bellow

```Bash
npm install
```

and build the docker image for the webapp container using the command bellow from the root of the `webapp` directory


### api

The client side application uses node version 18 From the root of the `webapp` directory install the node dependencies using the command bellow

```Bash
npm install
```

### Starting the application

To start application run the following command from the root directory

```Bash
docker compose up -d
```

To connect to the app go to [http://localhost:3000](http://localhost:3000)
