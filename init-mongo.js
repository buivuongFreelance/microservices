db.createUser({
  user: "buivuong",
  pwd: "your_password",
  roles: [
    {
      role: "readWrite",
      db: "my_db",
    },
  ],
});
db.createCollection("test");
