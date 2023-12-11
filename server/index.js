import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
/*------------------ ROUTES ------------------*/
app.use("/auth", authRoute);
/*---------------- ROUTES END ----------------*/
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL).then(
    () => {
        app.listen(PORT, () => { console.log(`server connected to the port ${PORT}`) })
    }
).catch((e) => { console.log(`${e} server did not connect`) })

