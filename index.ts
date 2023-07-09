import express, { Request, Response } from "express";
import cors from "cors";
import { vehicleData } from "./constants/data";
const app = express();

const port = 3440;

// Enable CORS for all routes
app.use(cors());

app.get("/vehicles", (req: Request, res: Response) => {
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
