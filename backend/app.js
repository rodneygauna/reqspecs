import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// Middleware
const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes - Users
import userRoutes from "./routes/userRoutes.js";
app.use("/api/v1/users", userRoutes);
// Routes - Companies
import companyRoutes from "./routes/companyRoutes.js";
app.use("/api/v1/companies", companyRoutes);
// Routes - Departments
import departmentRoutes from "./routes/departmentRoutes.js";
app.use("/api/v1/departments", departmentRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
