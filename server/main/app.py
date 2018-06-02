from flask import Flask
from flask_restplus import Api, Resource, fields
from marshmallow import Schema, fields as ma_fields, post_load
import requests
import json
import re

app = Flask(__name__) #instantiate flask app
api = Api(app) #instantiate api

# get API key from local text file
with open("API_Key.txt", "r") as mykey:
    API_KEY = mykey.read()
mykey.close()

@api.route('/escalation_policies')
class Escalation_Policies(Resource):
    def get(self):

        # get API key from local text file
        #with open("API_Key.txt", "r") as mykey:
        #    API_KEY = mykey.read()
        #ykey.close()

        print(API_KEY)

        url = 'https://api.pagerduty.com/escalation_policies'
        headers = {
            'Accept': 'application/vnd.pagerduty+json;version=2',
            'Authorization': 'Token token={token}'.format(token=API_KEY.rstrip('\n'))
        }
        r = requests.get(url, headers=headers)
        return r.json()

@api.route('/services')
class Services(Resource):
    def get(self):
        
        # get API key from local text file
        #with open("API_Key.txt", "r") as mykey:
        #    API_KEY = mykey.read()
        #mykey.close()

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
        FROM = 'TSE@IB.COM'

        if re.match("[0-9][0-9][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][0-9][0-9]", casenum):
            caseNum = casenum
        else:
            caseNum = "000000-000000" 

        # get API key from local text file
        #with open("API_Key.txt", "r") as mykey:
        #    API_KEY = mykey.read()
        #mykey.close()

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
                "title": "Case: " + caseNum + ", " + summary, 
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
