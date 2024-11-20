const { Router } = require('express');
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {

    // skipping payment for now
    res.status(200).json({
        message : "buy course endpoint"
    });
});



courseRouter.get("/preview", function(req, res) {
    res.status(200).json({
        message: "Courses preview endpoint"
    })
})

module.exports = {
    courseRouter : courseRouter
}
