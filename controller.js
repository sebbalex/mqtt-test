const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')


client.on('connect', () => {
  client.subscribe('sebba/connected')
})

client.on('message', (topic, message) => {
  if(topic === 'sebba/connected') {
    connected = (message.toString() === 'true');
    console.log(topic, message.toString());
  }
})
