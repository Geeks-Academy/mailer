FROM node:14.5-alpine
ADD . ./app
WORKDIR /app
RUN ls -a 
# Install dependencies:
RUN npm install -g typescript --silent \ 
    && npm install -g ts-node --silent \
    && npm install -g nodemon --silent \
    && npm install -g next --silent \
    && npm install --silent
# RUN chmod +x ./*
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "dev" ] 