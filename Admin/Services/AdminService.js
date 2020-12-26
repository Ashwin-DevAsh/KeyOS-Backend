class AdminService {
  admins = [
    {
      name: "Ashwin",
      email: "2017ashwin@gmail.com",
      phoneNumber: "919551574355",
      password: process.env.ROOT_ADMIN_PASSWORD,
    },
  ];

  getAdmin = (email, password) => {
    for (var i = 0; i < this.admins.length; i++) {
      var admin = this.admins[i];
      console.log(admin);
      if (admin.email == email && password == admin.password) {
        return admin;
      }
    }

    return null;
  };
}

module.exports = AdminService;
