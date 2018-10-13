import express from 'express';
import User from '~/models/user';
const userRouter = express.Router();

userRouter.route('/try1')
    .post((req, res) => {
        let user = new User({name: 'Hesham', age: '25'});
        user.save();
        res.status(201).send(user);
    })