import data from "@/routes/data.route";
import dataModel from "../../models/data/data.model";
import { Request, Response } from "express";

export const getAllData = async (req: Request, res: Response): Promise<void> => {
  try {
    const all=await dataModel.find()
    console.log('get alll',all)
    res.status(200).json({ success:true,message: "Fetched all data",data:all });
  } catch (error) {
    res.status(500).json({ success:false,message: "Server error"});
  }
};



export const fetchMatchingRecords=async(req:Request,res:Response):Promise<void>=>{


    try {
    
      const value = req.params.value;

      console.log("got value",value)

    if (!value) {
      res.status(400).json({ success: false, message: 'Search value is required' });
      return;
    }

    const regex = new RegExp(value, 'i'); 

    const matchedData = await dataModel.find({
      $or: [
        { name: { $regex: regex } },
        // { content: { $regex: regex } }
      ]
    });


    console.log('get matched data ',matchedData )
    res.status(200).json({ success:true,message: "Fetched all data",data:matchedData });
  } catch (error) {
    res.status(500).json({ success:false,message: "Server error"});
  }

}