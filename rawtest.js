request = require ('request');

request('https://easyrent-api-prod.cit362.com/reservations', (err,response, body)=>{
    console.log('Error: '+err);
    console.log('Body: '+body);
});