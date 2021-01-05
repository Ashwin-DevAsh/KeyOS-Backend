const { Pool } = require("pg");
const clientDetails = require("../Database/ClientDetails");

class DatabaseService {
  pool = new Pool(clientDetails);

  updateOnline = async (deviceID, socketID) => {
    var postgres = await this.pool.connect();
    await postgres.query(
      `update Devices set isOnline = true , socketID = $2 where deviceid = $1`,
      [deviceID, socketID]
    );
    (await postgres).release();
  };

  updateOffline = async (socketID) => {
    var postgres = await this.pool.connect();
    await postgres.query(
      `update Devices set isOnline = false , socketID = null where socketID = $1`,
      [socketID]
    );
    (await postgres).release();
  };
}

module.exports = DatabaseService;
