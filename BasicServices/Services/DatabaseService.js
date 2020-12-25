const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  insertNewDevice = async (deviceInfo) => {
    var postgres = await this.pool.connect();
    var { deviceID, sdk, model, brand, versionName } = deviceInfo;
    var isDeviceExist = (
      await postgres.query(`select * from devices where deviceID = $1`, [
        deviceID,
      ])
    ).rows;

    if (isDeviceExist.length == 0) {
      await postgres.query(
        `insert into Devices(deviceID,sdk,model,brand,versionName) values($1,$2,$3,$4,$5)`,
        [deviceID, sdk, model, brand, versionName]
      );
    }
    (await postgres).release();
  };

  updateLaunchedInfo = async (deviceInfo, config, isLaunched) => {
    var postgres = await this.pool.connect();
    var { deviceID, sdk, model, brand, versionName } = deviceInfo;
    var isDeviceExist = (
      await postgres.query(`select * from devices where deviceID = $1`, [
        deviceID,
      ])
    ).rows;

    if (isDeviceExist.length == 0) {
      await postgres.query(
        `insert into Devices(deviceID,sdk,model,brand,versionName,config,isLaunched) values($1,$2,$3,$4,$5,$6,$7)`,
        [deviceID, sdk, model, brand, versionName, config, isLaunched]
      );
    } else {
      if (isLaunched) {
        await postgres.query(
          `update Devices set config = $2,isLaunched = $3 where deviceID = $1`,
          [deviceID, config, isLaunched]
        );
      } else {
        await postgres.query(
          `update Devices set config = $2,isLaunched = $3 where deviceID = $1`,
          [deviceID, config, isLaunched]
        );
      }
    }

    (await postgres).release();
  };
}

module.exports = DatabaseService;
