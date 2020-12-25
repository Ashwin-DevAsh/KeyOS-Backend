const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  getAllDevices = async () => {
    var postgres = await this.pool.connect();
    var allDevices = (
      await postgres.query(
        `select
                deviceID, 
                brand,
                model,
                sdk,
                versionName,
                isLaunched
        from devices
    `,
        []
      )
    ).rows;
    (await postgres).release();
    return allDevices;
  };

  getDeviceConfig = async (deviceID) => {
    var postgres = await this.pool.connect();
    var deviceConfig = (
      await postgres.query(`select config from devices where deviceID = $1`, [
        deviceID,
      ])
    ).rows;
    (await postgres).release();
    return deviceConfig;
  };
}

module.exports = DatabaseService;
