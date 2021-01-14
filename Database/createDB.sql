create table Devices(
      deviceID varchar primary key, 
      brand varchar,
      model varchar,
      sdk varchar,
      versionName varchar,
      isLaunched varchar,
      config json,
      isOnline boolean default FALSE,
      socketID varchar,
      wifiMac varchar,
      installedAt timestamp with time zone default CURRENT_TIMESTAMP
);


