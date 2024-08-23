import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoutes.js";
import { residencyRoute } from "./routes/residencyRoutes.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send({ message: `Server is running on port ${PORT}` });
});
