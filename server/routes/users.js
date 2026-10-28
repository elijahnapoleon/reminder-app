import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const router = express.Router();

router.use(bodyParser.json());
router.use(cors());

let users = [];
 
router.get("/users", (req,res) => {
    res.json(users);
});

router.post("/users", (req,res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

export {router};