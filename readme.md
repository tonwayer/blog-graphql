# Simpel Blog (Just reading feature now)

It uses React, TypeScript, MUI, GraphQL, MySQL, Node.js.
It only has a reading feature now. 

## Application breakdown

The application is comprised of 2 parts

1. webapp -> Frontend for the application (written in React and Typescript, MUI)
2. api -> Backend (written in Node.js)
3. db -> DB using MySql

## Requirements

1. Docker [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
2. Docker Compose [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
3. Node 18 [https://nodejs.org/en/blog/release/v18.14.2](https://nodejs.org/en/blog/release/v18.14.2)
## Setup

### webapp

The client-side application uses node version 18. From the root of the `webapp` directory install the node dependencies using the command bellow

```Bash
npm install
```

and build the docker image for the webapp container using the command below from the root of the `webapp` directory


### api

The backend application uses node version 18. From the root of the `api` directory install the node dependencies using the command bellow

```Bash
npm install
```

### Starting the application

To start application run the following command from the root directory

```Bash
docker compose up -d
```

To connect to the app go to [http://localhost:80](http://localhost:80)

NOTE: If you see an NGINX 502 wait a couple of seconds, then refresh the page. It just means node is not done compiling the application

