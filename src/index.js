const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", async (req, res) => {
    res.send("Hello world!")
})

app.post("/add", async (req, res) => {
    const num1 = req.body.num1, num2 = req.body.num2
    if (typeof num1 != "number" || typeof num2 != "number") {
        return res.status(400).json({
            "status": "error",
            "message": "Invalid data types",
            "result": null,
        })
    }

    if (num1 < -1000000 || num2 < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (num1 > 1000000 || num2 > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    const result = num1 + num2
    if (result < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (result > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    return res.status(200).json({
        "status": "success",
        "message": "the sum of given two numbers",
        "result": result,
    })
})

app.post("/sub", async (req, res) => {
    const num1 = req.body.num1, num2 = req.body.num2
    if (typeof num1 != "number" || typeof num2 != "number") {
        return res.status(400).json({
            "status": "error",
            "message": "Invalid data types",
            "result": null,
        })
    }

    if (num1 < -1000000 || num2 < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (num1 > 1000000 || num2 > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    const result = num1 - num2
    if (result < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (result > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    return res.status(200).json({
        "status": "success",
        "message": "the difference of given two numbers",
        "result": result,
    })
})

app.post("/multiply", async (req, res) => {
    const num1 = req.body.num1, num2 = req.body.num2
    if (typeof num1 != "number" || typeof num2 != "number") {
        return res.status(400).json({
            "status": "error",
            "message": "Invalid data types",
            "result": null,
        })
    }

    if (num1 < -1000000 || num2 < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (num1 > 1000000 || num2 > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    const result = num1 * num2
    if (result < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (result > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    return res.status(200).json({
        "status": "success",
        "message": "The product of given numbers",
        "result": result,
    })
})

app.post("/divide", async (req, res) => {
    const num1 = req.body.num1, num2 = req.body.num2
    if (typeof num1 != "number" || typeof num2 != "number") {
        return res.status(400).json({
            "status": "error",
            "message": "Invalid data types",
            "result": null,
        })
    }

    if (num1 < -1000000 || num2 < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (num1 > 1000000 || num2 > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    if (num2 == 0) {
        return res.status(400).json({
            "status": "error",
            "message": "Cannot divide by zero",
            "result": null,
        })
    }

    const result = num1 / num2
    if (result < -1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Underflow",
            "result": null,
        })
    }

    if (result > 1000000) {
        return res.status(400).json({
            "status": "error",
            "message": "Overflow",
            "result": null,
        })
    }

    return res.status(200).json({
        "status": "success",
        "message": "The division of given numbers",
        "result": result,
    })
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;