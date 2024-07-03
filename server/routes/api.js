import {Router} from 'express';
import User from '../models/User.js';
import connectDB from '../db/connectDB.js';

var router = Router();
/* GET user listing. */
router.get('/users', async function(req, res, next) {
    await connectDB();
    let allUsers = await User.find({})
    res.send({allUsers});
});

router.post('/users', async function(req, res, next) {
    await connectDB();
    let newUser = new User(req.body);
    await newUser.save();
    res.send({newUser});
});

export default router;
