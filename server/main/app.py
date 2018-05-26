from flask import Flask
from flask_restplus import Api, Resource, fields
from marshmallow import Schema, fields as ma_fields, post_load
import requests
import json
import re

app = Flask(__name__) #instantiate flask app
api = Api(app) #instantiate api

"""
class TheLanguage(object):
    def __init__(self, language, framework):
        self.language = language
        self.framework = framework

    def __repr__(self):
        return '{} is the language. {} is the framework.'.format(self.language, self.framework)

class LanguageSchema(Schema):
    language = ma_fields.String()
    framework = ma_fields.String()

    @post_load
    def create_language(self, data):
        return TheLanguage(**data)

#this is duplicated to ensure swagger picks up data correctly. Duplicates info in LanguageSchema
a_language = api.model('Language', {'language': fields.String('The language'), 'framework': fields.String('The Framework')}) #, 'id': fields.Integer('ID')})


languages = []
#python = {'language': 'Python', 'id': 1}
python = TheLanguage(language='Python', framework='Flask')
languages.append(python)
"""

@api.route('/test')
class Test(Resource):
    def get(self):
        return requests.get('http://api.openweathermap.org/data/2.5/weather?q=Portland,us&appid=6d48c4262115fcf9f8a9d608fbe4288b').json()

@api.route('/field_escalate')
class Field_Escalate(Resource):
    def get(self):
        API_KEY = 'YCWYWbvpsKUzFtuxxTE2'
        url = 'https://api.pagerduty.com/escalation_policies'
        headers = {
            'Accept': 'application/vnd.pagerduty+json;version=2',
            'Authorization': 'Token token={token}'.format(token=API_KEY)
        }
        r = requests.get(url, headers=headers)
        return r.json()

@api.route('/services')
class Field_Escalate(Resource):
    def get(self):
        API_KEY = 'YCWYWbvpsKUzFtuxxTE2'
        url = 'https://api.pagerduty.com/services'
        headers = {
            'Accept': 'application/vnd.pagerduty+json;version=2',
            'Authorization': 'Token token={token}'.format(token=API_KEY)
        }
        r = requests.get(url, headers=headers)
        return r.json()

@api.route('/esc_trigger/<casenum>/<summary>')
class Esc_Trigger(Resource):
    def post(self, casenum, summary):
        API_KEY = 'YCWYWbvpsKUzFtuxxTE2'
        FROM = 'TSE@IB.COM'

        if re.match("[0-9][0-9][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][0-9][0-9]", casenum):
            caseNum = casenum
        else:
            caseNum = "000000-000000" 


        url = 'https://api.pagerduty.com/incidents'
        headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.pagerduty+json;version=2',
        'Authorization': 'Token token={token}'.format(token=API_KEY),
        'From': FROM
        }

        payload = {
            "incident": {
                "type": "incident",
                "title": "This is a field escalation.  The case number is:" + caseNum + "description:" + summary,
                "service": {
                    "id": "PVGDAR3",
                    "type": "service_reference"
                },
                "escalation_policy": {
                    "id": "PLW05MG",
                    "type": "escalation_policy_reference"
                }
            }
        }

        r = requests.post(url, headers=headers, data=json.dumps(payload))
        return r.json()


if __name__ == '__main__':
    app.run(debug=True)
