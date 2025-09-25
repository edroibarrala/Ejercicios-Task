const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();
app.use(express.json()); 

app.use("/api/tasks", tasksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


