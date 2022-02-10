# Shared Routing Micro-frontend

This example demos a basic host application loading remote component.

- `container` is the App Container
- `mf` - standalone application

# Running Demo

in the terminal , switch to `cd container`
to start app `npm run start`

another terminal , switch to `cd mf`
to start app `npm run start`

This will build all the apps `container`, `mf` on different ports as shown below

- [localhost:9000](http://localhost:9000/) (HOST) - `container`
- [localhost:9001](http://localhost:9001/) (STANDALONE REMOTE) - `mf`

You will notice that each of the above URLs will look exactly same.

# create .env file for container -

CONTAINER_HOST=http://localhost:9000/
MF_HOST=http://localhost:9001

# create .env file for container -

CONTAINER_HOST=http://localhost:9000
MF_HOST=http://localhost:9001/


