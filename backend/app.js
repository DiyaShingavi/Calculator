const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const execPath = "C:/IMPORTANT/CODING/Projects/Calculator/backend/cpp/calculator.exe";

app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;

    const input = `${num1} ${operator} ${num2}`;

    const process = exec(execPath, (err, stdout, stderr) => {
        if (err) {
            console.error("Execution error:", err);
            return res.status(500).json({ error: 'Execution failed' });
        }
        return res.json({ result: stdout.trim() });
    });

    process.stdin.write(input);
    process.stdin.end();
});

app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});
