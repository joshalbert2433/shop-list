import dotenv from "dotenv"
import express, { Request, Response } from "express";
import { router as ProductsRoute } from "./routes/products.routes"
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use("/api/products", ProductsRoute)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});