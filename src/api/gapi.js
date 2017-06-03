/* global gapi */
import { Base64 } from 'js-base64'

const CLIENT_ID = '148046407001-jn8u4hf1gb08i3uhp90aofm8uk31a522.apps.googleusercontent.com'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
const SCOPES =
    'https://www.googleapis.com/auth/gmail.readonly '+
    'https://www.googleapis.com/auth/gmail.send'

exports.handleClientLoad = function() {
    window.gapi.load('client:auth2', initClient)
}

function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
    })
}

exports.sendMessage = (userId, email, callback) => {
    const base64EncodedEmail = Base64.encodeURI(email)
    const request = gapi.client.gmail.users.messages.send({
        'userId': userId,
        'resource': {
            'raw': base64EncodedEmail
        }
    })
    request.execute(callback)
}
