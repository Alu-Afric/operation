import express from 'express';
import User from 'Models/user';
const userRouter = express.Router();

userRouter.route('/')
    .post((req, res) => {
        let user = new User({
        	name: req.body.name,
        	 email: req.body.email,
        	 password : req.body.password
        });
        user.save();
        res.status(201).send('done');
    });
   export default userRouter;