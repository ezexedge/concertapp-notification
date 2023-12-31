import express , { Router ,Request,Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router:Router = express.Router();

export function healtRoutes():Router{
    router.get('/notification-healt',(_req: Request, res: Response)=>{
        res.status(StatusCodes.OK).send('NOTIFICATION SERVICE HEALTY IS OK');
    });

    return router;
}
