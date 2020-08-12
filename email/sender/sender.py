# !/usr/bin/python
# coding=utf-8
from email_builder.email_builder import EmailBuilder

import smtplib, ssl

# receivers = ['przemyslaw.jozwiakowski@gmail.com', 'jagiello.m00@gmail.com']
me = 'microservice@localhost-group.com'

class EmailSender:
    def __init__(self, config):
        self.config = config
        self.ctx = ssl.create_default_context()
        self.server = None

    def connect(self):
        self.server = smtplib.SMTP(self.config['host'], self.config['port'])
        self.server.set_debuglevel(self.config['debug_level'])
        self.server.starttls(context=self.ctx)

        print("login", self.server)
        self.server.login(self.config['user'], self.config['password'])

    def disconnect(self):
        print("quit")
        self.server.quit() 


    def send_mail(self, recipients, html="<h1>Mail</h1>"):

        email = EmailBuilder() \
            .add_from('Przemocny z Gladiatorów Javascriptu <contact@localhost-group.com>') \
            .add_recipient(me) \
            .add_subject('Ładny email z Gladiatorów') \
            .add_html(html)

        to_addresses = ', '.join([me] + recipients)

        data = self.server.sendmail(email.mail['From'], to_addresses, email.prepare_to_send())
        return data
