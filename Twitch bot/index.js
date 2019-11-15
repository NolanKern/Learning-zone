const tmi = require('tmi.js');
const pass = require('secret.json');

const options = {
    options : {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'testBot',
        password: pass,
    },
    channels: ['testStream123'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    if(message === '!game'){
        client.action('testStream123', 'This is a test message');
    }
    

    client.action('testStream123', `Hello $[user['display-name']]`);
})