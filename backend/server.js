import nextConnect from "next-connect";
import mongoose from 'mongoose';
import { connectDb } from "./db";

import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";
import {User} from "./models/user"


// start the connection to MongoDb

connectDb();


// this is like express, in fact it is a middlewere made on express that is specific for next js
// think of handler as routes in simple expressjs 
const handler = nextConnect()

handler.post("/signIn", (req, res) =>{

    res.status(200).send("Connection Now")
})