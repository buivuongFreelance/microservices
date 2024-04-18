db.createUser({
  user: "admin",
  pwd: "testne",
  roles: [
    {
      role: "readWrite",
      db: "my-crm",
    },
  ],
});
