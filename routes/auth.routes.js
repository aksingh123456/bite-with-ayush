import express from 'express'
import { signup } from '../controllers/auth.controlllers';
const authRouter=express.Router();
authRouter.post('/signup',signup)
authRouter.post('/signin',signin)
authRouter.get('/signout',signout)
export default authRouter;