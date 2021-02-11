const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = config.get('easyrent-url') + '/reservations';

it(`Testing to see if we can make a reservation`, async () => {
    const date = new Date();
    let options = {
        method: 'POST',
        uri: reservationsUrl,
        headers: {
        },
        body: {
            "customerId" : "dan.dan@dan.com",
            "reservationItems":[
                {
                    "description":"Canoe",
                    "itemId":4949489
                },
                {
                    "description":"Canoe",
                    "itemId":4949489
                },
                {
                    "description":"Canoe",
                    "itemId":4949489
                },
                ],
                "dueDate":1610148694321
        },
        json: true,
        simple: false,
    };

    let errorWasCaught = false;
    let errorCaught = null;

    try {
        let response = await rp(options);
        return response;
    } catch (exception) {
        errorCaught = exception;
        errorWasCaught = true;
        throw console.log(errorCaught);
    }

    expect(errorWasCaught).toBe(false);
});


