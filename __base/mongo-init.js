db.createUser({
  user: "buivuong",
  pwd: "buivuong123",
  roles: [
    {
      role: "readWrite",
      db: "my-crm",
    },
  ],
});

db = db.getSiblingDB("my-crm");
db.createCollection("test");
