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
        from devices`,
        []
      )
    ).rows;
    var active = (await postgres.query(this.buildQuery(), [true])).rows;
    var inactive = (await postgres.query(this.buildQuery(), [false])).rows;
    var justInstalled = (await postgres.query(this.buildQuery(), [null])).rows;

    (await postgres).release();
    return { allDevices, active, inactive, justInstalled };
  };

  buildQuery() {
    return `select
                deviceID, 
                brand,
                model,
                sdk,
                versionName,
                isLaunched
        from devices where isLaunched is $1
    `;
  }

  getDeviceConfig = async (deviceID) => {
    var postgres = await this.pool.connect();
    var deviceConfig = (
      await postgres.query(`select config from devices where deviceID = $1`, [
        deviceID,
      ])
    ).rows;
    (await postgres).release();
    if (deviceConfig.length == 0) {
      return {};
    }
    return deviceConfig[0];
  };
}

module.exports = DatabaseService;
