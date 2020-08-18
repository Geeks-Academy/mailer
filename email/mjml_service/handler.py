from __future__ import print_function
import json
from flask import Blueprint, request, jsonify
import os
from urllib.error import URLError
import socket
import requests


def MJMLHandler_converter(ip, template_name='beforeLiveCodeReview'):
    data = {
        'templateName':template_name,
        'templateVariables': {'title':'TYTUŁ POSTA'}
    }
    MJML_IP = f'http://{ip}:3000/convert'
    try:
        resp = requests.post(MJML_IP,  json=data)
        return resp.json()

    except requests.exceptions.RequestException as e:  
        return {'error':str(e)}

    # def templates(self, templateName):
    
    #     MJML_IP = f'http://{self.ip}:5004/templates'

    #     with urlopen(f'{MJML_IP}') as response:
    #         html = response.read()
    #         data = json.loads(html)
    #         return data





