FROM node:14.5-alpine
ADD . ./app
WORKDIR /app

# RUN ls -a 

# Install dependencies:
RUN npm install -g typescript \
    && npm install -g ts-node \
    && npm install -g nodemon \
    && npm install
# RUN chmod +x ./*

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ] 

# CMD ["/opt/venv/bin/activate && exec python app.py"]

# FROM python:3.6
# ADD . ./app
# WORKDIR /app

# RUN pip install virtualenv 
# RUN virtualenv -p /usr/bin/python3 venv
# RUN source venv/bin/activate

# RUN pip install -r ./requirements.txt

# RUN ls



# RUN /opt/venv/bin/pip list
