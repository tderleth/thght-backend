FROM node:12.10-alpine as dependencies
ARG ENVIRONMENT=production
COPY package*.json ./
RUN npm install --$ENVIRONMENT --loglevel=silent

FROM node:12.10-alpine as build
ARG ENVIRONMENT=development
COPY package*.json ./
COPY ts*.json ./
RUN npm install --$ENVIRONMENT --loglevel=silent
COPY src/ ./src/
RUN npm run build

FROM node:12.10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY --from=dependencies /node_modules node_modules
COPY --from=build /dist dist

EXPOSE 3000

CMD ["npm", "run", "start"]
