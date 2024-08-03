import express from "express";
import cors from "cors";
import openaiRoutes from "./routes/openaiController.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", openaiRoutes);

app.get("/", (req, res) => {
  res.send("Hello from ChatGPT");
});

export default app;
