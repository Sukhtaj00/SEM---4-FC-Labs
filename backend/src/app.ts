import express from "express";
import cors from "cors";

import employeeRoutes from "./routes/employeeRoutes";
import organizationRoutes from "./routes/organizationRoutes";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use("/employees", employeeRoutes);
app.use("/organization", organizationRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});