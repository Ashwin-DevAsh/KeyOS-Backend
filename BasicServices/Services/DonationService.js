const Razorpay = require("razorpay");

module.exports = class DonationService{


    instance = new Razorpay({
        key_id: process.env.key_id,
        key_secret: process.env.key_secret,
    });


    createOrder = async(amount,recpID) =>{
       
        var options = {
            amount: amount * 100, // amount in the smallest currency unit
            currency: "INR",
            receipt: recpID,
        };
        var orderID = await this.instance.orders.create(options);
        return orderID;
    }

    makePayment = async(orderID)=>{

    }
}