import socket
import json
import os

path_to = './shared'

def save_ip_for_service(service_name):
    HOST_NAME = socket.gethostname()
    SERVICE_IP = socket.gethostbyname(HOST_NAME)
    
    if not os.path.exists(f'{path_to}'):
        os.mkdir(f'{path_to}')
        
    with open(f'{path_to}/{service_name}.json', 'w') as file:
        json.dump({'ip':SERVICE_IP}, file)


def get_ip_for_service(service_name):
    with open(f'{path_to}/{service_name}.json', 'r') as file:
        data = json.load(file)
        return data