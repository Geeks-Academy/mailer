
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# builder -> chaining methods

class EmailBuilder:
    def __init__(self):
        self.mail =  MIMEMultipart('alternative')
    
    def add_from(self, address):
        self.mail['From'] = address
        return self

    def add_recipient(self, address):
        if isinstance(address, list):
            as_string = ", ".join(address)
            self.mail['To'] = as_string

        else:
            self.mail['To'] = address

        return self

    def add_subject(self, subject):
        self.mail['Subject'] = subject
        return self

    def add_html(self, html):
        html_prepared = MIMEText(html, 'html')
        self.mail.attach(html_prepared)
        return self
    
    def prepare_to_send(self):
        # validation
        return self.mail.as_string()

