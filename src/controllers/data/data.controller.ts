import data from "@/routes/data.route";
import dataModel from "../../models/data/data.model";
import { NextFunction, Request, Response } from "express";

export const getAllData = async (req: Request, res: Response,next: NextFunction): Promise<Response | void> => {
  try {
    const all=await dataModel.find()
    console.log('get alll',all)
    return res.status(200).json({ success:true,message: "Fetched all data",data:all,status:true });
  } catch (error) {
    next(error)
    // return res.status(500).json({ success:false,message: "Server error"});
  }
};



export const fetchMatchingRecords=async(req:Request,res:Response, next: NextFunction):Promise<Response | void>=>{


 

    try {
    
      const value = req.params.value;

      console.log("got value",value)

    if (!value) {
      return res.status(400).json({ success: false, message: 'Search value is required' });
      
    }

    const regex = new RegExp(value, 'i'); 

    const matchedData = await dataModel.find({
      $or: [
        { name: { $regex: regex } },
        // { content: { $regex: regex } }
      ]
    });

    if(matchedData.length==0){
     return  res.status(200).json({ success:true,message: "not found",data:matchedData,status:false });
    }


    console.log('get matched data ',matchedData )
   return  res.status(200).json({ success:true,message: "Fetched all data",data:matchedData ,status:true });
  } catch (error) {
    next(error)
    // return res.status(500).json({ success:false,message: "Server error"});
  }

}