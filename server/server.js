import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import sponsorRoutes from "./routes/sponsorRoutes.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/sponsors", sponsorRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(" MongoDB connected");
        app.listen(PORT, () =>
            console.log(` Server kører på http://localhost:${PORT}`)
        );
    })

