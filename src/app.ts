import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import router from './routes';



const app: Application = express();

app.use(express.json());
app.use(cors({origin:['https://batch-3-assignemnt-4-floramart-client.vercel.app' ] , credentials:true}));
app.use("/api",router)


app.get('/', (req:Request, res:Response) => {
  res.send('Welcome to the project - FloraMart Server')
})






export default app