const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  insertNewDevice = async (deviceInfo) => {
    var postgres = await this.pool.connect();
    var { deviceID, sdk, model, brand, versionName, wifiMac } = deviceInfo;
    var isDeviceExist = (
      await postgres.query(`select * from devices where deviceID = $1`, [
        deviceID,
      ])
    ).rows;

    if (isDeviceExist.length == 0) {
      await postgres.query(
        `insert into Devices(deviceID,sdk,model,brand,versionName,wifiMac) values($1,$2,$3,$4,$5,$6)`,
        [deviceID, sdk, model, brand, versionName, wifiMac]
      );
    }
    (await postgres).release();
  };

  updateLaunchedInfo = async (deviceInfo, config, isLaunched) => {
    var postgres = await this.pool.connect();
    var { deviceID, sdk, model, brand, versionName, wifiMac } = deviceInfo;
    var isDeviceExist = (
      await postgres.query(`select * from devices where deviceID = $1`, [
        deviceID,
      ])
    ).rows;

    if (isDeviceExist.length == 0) {
      await postgres.query(
        `insert into Devices(deviceID,sdk,model,brand,versionName,config,isLaunched,wifimac) values($1,$2,$3,$4,$5,$6,$7,$8)`,
        [deviceID, sdk, model, brand, versionName, config, isLaunched, wifiMac]
      );
    } else {
      if (isLaunched) {
        await postgres.query(
          `update Devices set config = $2,isLaunched = $3, versionName = $4, wifiMac = $5 where deviceID = $1 `,
          [deviceID, config, isLaunched, versionName, wifiMac]
        );
      } else {
        await postgres.query(
          `update Devices set isLaunched = $2, versionName = $3, wifiMac = $4 where deviceID = $1 `,
          [deviceID, isLaunched, versionName, wifiMac]
        );
      }
    }

    (await postgres).release();
  };

  getDeviceConfig = async (deviceID) => {
    var postgres = await this.pool.connect();
    var deviceConfig = (
      await postgres.query(`select config from devices where deviceID = $1`, [
        deviceID,
      ])
    ).rows;
    (await postgres).release();
    if (deviceConfig.length == 0) {
      return null;
    }
    return deviceConfig[0]["config"];
  };
}

module.exports = DatabaseService;
