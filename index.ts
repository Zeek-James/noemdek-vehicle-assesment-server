import express from "express";
import cors from "cors";
import { vehicleData } from "./constants/data";

const app = express();
const port = 3440;

// Enable CORS for all routes
app.use(cors());

app.get("/vehicles", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET"); // Allow GET requests
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
