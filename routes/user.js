const express = require('express');
const Router = express.Router;
const userRouter = Router();

userRouter.post("/signup", function(req, res) {
    res.status(200).json({
        message : "Signup endpoint"
    });
});

userRouter.post("/signin", function(req, res) {
    res.status(200).json({
        message : "Signin endpoint"
    });
});


userRouter.get("/purchases", function(req, res) {
    res.status(200).json({
        message : "My purchases endpoint"
    });
});

module.exports = {
    userRouter : userRouter
}