const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = config.get('easyrent-url') + '/reservations';

async function createReservation() {
    // const date = new Date();
    let options = {
        method: 'POST',
        uri: reservationsUrl,
        headers: {
        },
        body: {
            "customerId" : "dan.dan@dan.com",
            "reservationItems":[
                {
                    "description":"Ben and Jerry",
                    "itemId":4949489
                },
                {
                    "description":"Cover of Moon",
                    "itemId":4949489
                },
                {
                    "description":"god of science",
                    "itemId":4949489
                },
                ],
                "dueDate":1610148694321
        },
        json: true,
        simple: false,
    };

let response = await rp(options);
return response;
}

async function getSpecificReservation(params){
    let options = {
        uri: reservationsUrl + "/" + params,
        headers: {
        },
    };
    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
        return response;
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
}

it(`Testing to see if we can  get specific reservation`, async () =>{
    const reservationID = createReservation();
    getSpecificReservation(reservationID);
})

