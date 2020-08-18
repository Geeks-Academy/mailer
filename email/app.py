import time
from flask import Flask, jsonify

from sender.sender import EmailSender
from settings import STMPConfig

from mjml_service.handler import MJMLHandler

from service_ip import save_ip_for_service, get_ip_for_service


app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'name':'email_service', 'ip': get_ip_for_service('email_service')['ip']})


@app.route('/send-email', methods=['POST'])
def send_email():
    # pobierac recipients i variables z post body bo to array emaili
    recipients = ['test@gmail.com']
    templateName = 'test'
    variables = [{exampleGithubLogin:'Tester mikroserwisu'}]

    service = MJMLHandler(get_ip_for_service('mjml')['ip'])
    # trzeba sprawdzić jak działa

    _sender = EmailSender(STMPConfig)
    _sender.connect()

    for idx, recipient in enumerate(recipients, 1):
        converted_mail = service.convert(templateName, variables)

        res_email = _sender.send_mail(recipients=recipient, html=data['templateHtml'])
        print('sent', idx,  '/', len(recipients))            
    
    _sender.disconnect()

    # sprawdz czy wpadło coś do kolejki jeśli tak to wykonaj

    return jsonify('some message')

if __name__ == "__main__":
    save_ip_for_service('email_service')
    app.run(host='0.0.0.0', port=5000, debug=True)