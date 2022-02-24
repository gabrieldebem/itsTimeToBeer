import 'dotenv/config';
import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = process.env.PORT || 5000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const whiteList = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.get(
    "/",
    cors(whiteList),
    async (req: Request, res: Response): Promise<Response> => {
        const value = Math.floor(Math.random() * 2);

        const itsTimeToBeer = [`It's Time!`, `It's not time yet :c`]
        
        return res.status(200).send({
            message: itsTimeToBeer[value],
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error}`);
}