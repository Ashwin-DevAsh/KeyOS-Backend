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
    for (var i in this.admins) {
      if (i.email == email && password == i.password) {
        return i;
      }
    }

    return null;
  };
}

module.exports = AdminService;
