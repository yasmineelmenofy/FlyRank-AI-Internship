import express from "express";
import router from "./routes/task.route.js";
import swaggerUi from "swagger-ui-express";
import openapiDocument from "./openapi.json" with { type: "json" };

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(openapiDocument)
);

app.get("/", (req, res) => {
  res.status(200).json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"],
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.use("/tasks", router);

export default app;
