const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  getAllDevices = async () => {
    var postgres = await this.pool.connect();
    var allDevices = await postgres
      .query(
        `
                    deviceID, 
                    brand,
                    model,
                    sdk,
                    versionName,
                    isLaunched,
    `
      )(await postgres)
      .release();
    return {};
  };

  getDeviceConfig = async (deviceID) => {
    var postgres = await this.pool.connect();
    (await postgres).release();
    return {};
  };
}

module.exports = DatabaseService;
