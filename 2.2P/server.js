const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/add", (req, res) => {
    const x = parseFloat(req.query.num1);
    const y = parseFloat(req.query.num2);

    assertNumbersAreValid(res, x, y);

    const result = x + y;
    res.json({ result });
});

app.post("/subtract", (req, res) => {
    const { x, y } = req.body;

    assertNumbersAreValid(res, x, y);

    const result = x - y;
    res.json({ result });
});

app.get("/multiply", (req, res) => {
    const x = parseFloat(req.query.num1);
    const y = parseFloat(req.query.num2);

    assertNumbersAreValid(res, x, y);

    const result = x * y;
    res.json({ result });
});

app.post("/divide", (req, res) => {
    const { x, y } = req.body;

    assertNumbersAreValid(res, x, y);

    const result = x / y;
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

function assertNumbersAreValid(res, x, y) {
    if (isNaN(x) || isNaN(y)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }
}
