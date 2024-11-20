const { Router } = require('express');
const adminRouter = Router();

adminRouter.post("/signup", function(req, res) {
    res.status(200).json({
        message : "Signup endpoint"
    });
});

adminRouter.post("/signin", function(req, res) {
    res.status(200).json({
        message : "Signin endpoint"
    });
});

adminRouter.post("/course", function(req, res) {
    res.status(200).json({
        message: "Course creation endpoint"
    })
});

adminRouter.put("/course", function(req, res) {
    res.status(200).json({
        message: "Edit the course endpoint"
    })
});

adminRouter.get("/course/bulk", function(req, res) {
    res.status(200).json({
        message: "get courses in bulk endpoint"
    })
});


module.exports = {
    adminRouter : adminRouter
}


