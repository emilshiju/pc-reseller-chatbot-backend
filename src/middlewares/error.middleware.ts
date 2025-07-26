

import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(" Global Error:", err);

  res.status(500).json({success: false,message: "Internal Server Error" });
};

