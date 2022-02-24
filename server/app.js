const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require("./routes/user-routes");
const healthRouter = require("./routes/health-routes");
const authRouter = require("./routes/auth-routes");



require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log('Database connected...')
);

app.use("/api/users", usersRouter);
app.use("/api/health", healthRouter);
app.use("/api", authRouter);

app.get('/', (req, res) => res.send('Softhouse API'));

module.exports = app;