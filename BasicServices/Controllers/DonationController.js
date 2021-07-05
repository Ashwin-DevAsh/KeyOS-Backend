var DonationService = require("../Services/DonationService");
const EmailService = require("../Services/EmailService");

class DonationController {
  donationService = new DonationService();
  emailService = new EmailService();


  createOrder = async(req, res) => {
    const {amount,id} = req.body
    var orderID = await this.donationService.createOrder(amount,id)
    this.emailService.sendMail(
        `New Donation Created`,
        `<h1>${id}</h1><br/>` +
           `Amount = ${amount}` +
          "<br/>" ,
        this.emailService.devEmail
    );
    res.send({orderID:orderID.id,keyID:process.env.key_id})
  };
}

module.exports = DonationController;
