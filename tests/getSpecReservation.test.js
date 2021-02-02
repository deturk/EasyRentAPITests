const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = config.get('easyrent-url')+'/reservations/18e17779-3e70-4af7-8b66-020e3e758059';
it('Testing to see if we can get specific reservation', async () =>{
    
    var options = {
        uri: reservationsUrl,
        // Project
        headers:{
        },
    };

    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    expect(errorWasCaught).toBe(false);//assertion of what is expected
})

