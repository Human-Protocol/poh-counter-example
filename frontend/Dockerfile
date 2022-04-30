FROM node:16-alpine
ENV NPM_CONFIG_LOGLEVEL=warn
WORKDIR /usr/src/app
COPY . .
RUN npm install 
RUN npm run build
CMD npm run preview
