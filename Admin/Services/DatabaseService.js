const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  constructor() {
    this.deleteGoogleDevices();
  }

  getAllDevices = async () => {
    var postgres = await this.pool.connect();
    var allDevices = await this.getAll(postgres);
    var active = await this.getLaunchedDevice(postgres, "true");
    var inactive = await this.getLaunchedDevice(postgres, "false");
    var justInstalled = await this.getInstalledDevice(postgres);
    postgres.release();
    return { allDevices, active, inactive, justInstalled };
  };

  getDevices = async () => {
    var postgres = await this.pool.connect();
    var allDevices = await this.getAll(postgres);
    var active = await this.getLaunchedDevice(postgres, "true");
    var inactive = await this.getLaunchedDevice(postgres, "false");
    var justInstalled = await this.getInstalledDevice(postgres);
    postgres.release();
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
                isLaunched,
                isOnline,
                installedAt,
                wifiMac
        from devices
        ORDER  BY (case when isOnline then 1 else 2 end) asc,
        installedAt DESC;`,
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
                isLaunched,
                isOnline,
                installedAt,
                wifiMac
        from devices where isLaunched = $1 and config is not null
        ORDER  BY (case when isOnline then 1 else 2 end) asc,
        installedAt DESC`,
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
                isLaunched,
                isOnline,
                installedAt,
                wifiMac
        from devices where config is null
        ORDER  BY (case when isOnline then 1 else 2 end) asc,
        installedAt DESC`,
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
    return deviceConfig[0]["config"];
  };

  getRegisteredDevice = async () => {
    var postgres = await this.pool.connect();
    var devices = (
      await postgres.query(
        `select * from devices where (cast(config->>'recoveryEmail' as varchar)) != ''`
      )
    ).rows;
    (await postgres).release();
    return devices;
  };

  getUsers = async () => {
    var postgres = await this.pool.connect();
    var users = (
      await postgres.query(
        `select
            (cast(config->>'recoveryEmail' as varchar)) as email , count(*) as devicesCount , string_agg(deviceID::text, ',') as deviceID
         from 
            devices 
         where 
           (cast(config->>'recoveryEmail' as varchar)) != ''
         group by email 
         order by devicesCount desc`
      )
    ).rows;
    (await postgres).release();
    return users;
  };

  getUserdevices = async (email) => {
    var postgres = await this.pool.connect();
    var devices = (
      await postgres.query(
        `select
             *
         from 
            devices 
         where 
           (cast(config->>'recoveryEmail' as varchar)) = $1`,
        [email]
      )
    ).rows;
    (await postgres).release();
    return devices;
  };

  deleteGoogleDevices = async () => {
    console.log("Deleting google devices Started");
    var interval = 1000 * 60 * 60;
    setInterval(async () => {
      console.log("Deleting google devices");
      var postgres = await this.pool.connect();
      await postgres.query(
        `delete from devices where brand = $1 and (config is null or model like '%Android%' or model like '%sdk%')`,
        ["google"]
      );
      (await postgres).release();
    }, interval);
  };
}

module.exports = DatabaseService;
