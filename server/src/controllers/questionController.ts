import { Request, Response } from "express";
import fs from "fs";
import path from "path";

let filePath = path.resolve('./', './src/data/questions.json')

export const getQuestions = async (req: Request, res: Response) => {
    fs.readFile(filePath, "utf-8", (err, jsonString) => {
        if(err){
            console.log(err);
        }else{
            try {
                res.send(JSON.parse(jsonString));
            } catch (error) {
                console.log(error);
            }
        }
    })
  };