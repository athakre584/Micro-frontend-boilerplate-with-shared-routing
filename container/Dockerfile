FROM node:14.15.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

# Environment variables defined in Terraform used as build arguments
ARG environment

# Environment variables from the Jenkins environment used as build argument
ARG GIT_BRANCH
ARG GIT_COMMIT
ARG BUILD_DISPLAY_NAME

# Environment variables not defined below are set on the task definition in ECS by Terraform
ENV GIT_BRANCH=${GIT_BRANCH}
ENV GIT_COMMIT=${GIT_COMMIT}
ENV BUILD_DISPLAY_NAME=${BUILD_DISPLAY_NAME}

RUN npm install
RUN npm -v
RUN node -v

COPY . ./

EXPOSE 9000

RUN npm run build
CMD ["npm", "run", "start"]
