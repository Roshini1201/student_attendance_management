const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const stuRoutes = require("./routes/stu");
const staffRoutes = require("./routes/staff");
const adminRoutes = require("./routes/admin");

app.use("/sturoutes", stuRoutes);
app.use("/staff", staffRoutes);
app.use("/admin", adminRoutes);

app.listen(7000, () => {
    console.log("Server running on port 5000");
});
