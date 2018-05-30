from flask import Flask
from flask_restplus import Api, Resource, fields
from marshmallow import Schema, fields as ma_fields, post_load
import requests
import json
import re

app = Flask(__name__) #instantiate flask app
api = Api(app) #instantiate api

@api.route('/escalation_policies')
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
                "title": "Case# " + caseNum + summary, 
                "service": {
                    "id": "PD8LF40",
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
