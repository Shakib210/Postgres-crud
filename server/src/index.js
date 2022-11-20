import express from "express";
import cors from "cors";
import configureAllRoutes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
configureAllRoutes(app);

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});
