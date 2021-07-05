var DonationService = require("../Services/DonationService");

class DonationController {
  donationService = new DonationService();

  createOrder = async(req, res) => {
    const {amount,id} = req.body
    var orderID = await this.donationService.createOrder(amount,id)
    res.send({orderID:orderID.id,keyID:process.env.key_id})
  };
}

module.exports = DonationController;
