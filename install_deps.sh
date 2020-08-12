sudo apt-get -y update

# docker
sudo apt-get -y install docker.io

sudo systemctl start docker
sudo systemctl enable docker

docker --version


# docker-compose
sudo apt-get -y install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -f

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" -f

sudo apt-get -y install docker-ce docker-ce-cli containerd.io -f
sudo docker run hello-world

sudo curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version

sudo groupadd docker
sudo usermod -aG docker ${USER}
newgrp docker 