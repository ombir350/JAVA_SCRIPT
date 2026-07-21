function payment(amount,callback){
    console.log(`${amount} payment is initialized`);
    console.log("payment is resieved");
    callback();
}

function zomato_order(){
 console.log("we have started for preparing your food!");
}

function blinkit_order(){
    console.log("we have started packing your order!");
}

payment(500,zomato_order);
payment(300,blinkit_order);
/*
OUTPUT

500 payment is initialized
payment is resieved
we have started for preparing your food!

300 payment is initialized
payment is resieved
we have started packing your order!
 */
