const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

client.on('connect', () => {
  // Inform controllers that garage is connected
  client.publish('sebba/connected', 'true')
  console.log('connected','Write smth to controller ');

  rl.on('line', (answer) => {
    client.publish('sebba/connected', answer);
    console.log(answer, 'sent to the controller');
    //rl.close();
  });

})
