import express from "express";
import { connectDB } from "./db.js";
import router from "./router.js";

const app = express();

app.use(express.json())

app.use('/students', router)

app.listen(5000, () => {
  console.log("Server 5000 ci portda hazir");
  connectDB()
});
