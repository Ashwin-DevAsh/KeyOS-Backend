const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  getAllDevices = async () => {
    var postgres = await this.pool.connect();
    var allDevices = await this.getAll(postgres);
    var active = await this.getLaunchedDevice(postgres, "true");
    var inactive = await this.getLaunchedDevice(postgres, "false");
    var justInstalled = await this.getInstalledDevice(postgres);

    (await postgres).release();
    return { allDevices, active, inactive, justInstalled };
  };

  async getAll(postgres) {
    return (
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
  }

  async getLaunchedDevice(postgres, isLaunched) {
    return (
      await postgres.query(
        `select
                deviceID, 
                brand,
                model,
                sdk,
                versionName,
                isLaunched
        from devices where isLaunched = $1`,
        [isLaunched]
      )
    ).rows;
  }

  async getInstalledDevice(postgres) {
    return (
      await postgres.query(
        `select
                deviceID, 
                brand,
                model,
                sdk,
                versionName,
                isLaunched
        from devices where isLaunched is null`,
        []
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
