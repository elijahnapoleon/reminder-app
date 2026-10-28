import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {router as userRouter} from "../routes/users.js";
import { fetchGithubEvents } from "../services/githubservices.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());

app.use("/api", userRouter)


app.get("/api/health", (req,res) => {
    res.json({status : "ok"});
});

app.get("/api/github/:username", async (req, res) => {
  try {
    const events = await fetchGithubEvents(req.params.username);
    res.json(events);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
