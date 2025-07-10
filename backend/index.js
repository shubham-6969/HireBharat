import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

// Load env variables
dotenv.config();

// App instance
const app = express();


app.use(cors(corsOptions)); // Handle CORS
app.use(express.json()); //  JSON body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); //   Cookie parser


// Middleware
const corsOptions = {
  origin: ["https://hire-bharat.vercel.app", "http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



// server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Servr running on port: ${PORT}`);
});
