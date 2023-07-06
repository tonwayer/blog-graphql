# Online shop

## Application break down

The application is comprised of 2 parts

1. webapp -> Frontend for the applicaiton (written in React and Typescript, MUI)
2. api -> Backend (written in Node.js)

## Requirements

1. Docker [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
2. Docker Compose [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
3. Node v17.9.1 [https://nodejs.org/fr/blog/release/v17.9.1/](https://nodejs.org/fr/blog/release/v17.9.1/)

## Setup

### webapp

The client side applicaiton uses node version 17, node 16 should also work as well. From the root of the `webapp` directory install the node dependencies using the command bellow

```Bash
npm ci
```

and build the docker image for the webapp container using the command bellow from the root of the `webapp` directory

```Bash
docker build -t webapp:latest .
```

### api

To build the docker image for api.orders run the command bellow from the root of the `api.orders` directory

```Bash
docker build -t api:latest .
```

### Starting the application

To start application run the following command from the root directory

```Bash
docker compose up -d
```

To connect to the app go to [http://localhost:80](http://localhost:80)

NOTE: If you see an NGINX 502 wait a couple of seconds, then refresh the page. It just means node is not done compiling the application
