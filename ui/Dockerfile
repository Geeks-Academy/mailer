FROM node:14.5-alpine
ADD . ./app
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
RUN ls -a 

# Install dependencies:
# RUN npm install -g typescript 
# RUN npm install -g ts-node
RUN npm install serve --silent

# RUN npm install -g react-scripts --silent
# RUN npm install --silent
RUN node --version
RUN npm --version

RUN chmod +x ./run.sh

EXPOSE 5000
EXPOSE 3000

ENTRYPOINT [ "sh", "run.sh" ] 
