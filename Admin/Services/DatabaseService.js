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
    var active = this.buildQuery(true);
    var inactive = this.buildQuery(false);
    var justInstalled = this.buildQuery(null);

    (await postgres).release();
    return { allDevices, active, inactive, justInstalled };
  };

  async buildQuery(postgres, isLaunched) {
    return (
      await postgres.query(
        `select
                deviceID, 
                brand,
                model,
                sdk,
                versionName,
                isLaunched
        from devices where isLaunched is $1`,
        [isLaunched]
      )
    ).rows;
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
