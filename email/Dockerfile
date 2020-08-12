FROM python:3.8-slim-buster
COPY . ./app
WORKDIR /app

# Install dependencies:
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Run the application:
RUN ls
RUN pip list

EXPOSE 5000
ENTRYPOINT [ "python3", "app.py" ] 

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
