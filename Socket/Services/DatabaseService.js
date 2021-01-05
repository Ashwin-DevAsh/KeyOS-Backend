const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  updateOnlineStatus = async (deviceID, isOnline) => {
    var postgres = await this.pool.connect();
    await postgres.query(
      `update Devices set isOnline = $2 where device id = $1`,
      [deviceID, isOnline]
    );
    (await postgres).release();
  };
}

module.exports = DatabaseService;
