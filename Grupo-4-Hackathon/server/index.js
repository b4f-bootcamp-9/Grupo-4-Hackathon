const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require("./data/MongoDB");
const pedidosRoutes = require('./routes/PedidosRoutes');
const userRoutes = require('./routes/UserRoutes');
const contactRoutes = require('./routes/ContactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const startServer = async () => {
    try {
        await connectToDatabase();
        console.log('Database is ready');

        // Mount all routes
        app.use("/orders", pedidosRoutes);
        app.use("/api", userRoutes);
        app.use("/contacts", contactRoutes);

        app.get("/", (req, res) => {
            res.send("Hello World!");
        });

        app.listen(3027, () => {
            console.log("Server is running on port 3027");
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();