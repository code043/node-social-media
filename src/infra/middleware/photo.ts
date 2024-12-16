import { NextFunction, Request, Response } from "express";
import { Token } from "../../application/services/token/user-token";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const validateToken = new Token()

  const auth = req.headers['authorization']
  const token = auth?.split(' ')[1] as string
  const id = validateToken.validate(token)
  if(!id){
    return
  }
  next()
}