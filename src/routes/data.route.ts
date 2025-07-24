import { fetchMatchingRecords, getAllData } from "../controllers/data/data.controller";

import { Router } from "express";


const data = Router();

data.get("/all",getAllData); 

data.get('/search/:value',fetchMatchingRecords)

export default data;
