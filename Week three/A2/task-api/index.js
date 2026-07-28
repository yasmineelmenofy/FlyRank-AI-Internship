import app from "./app.js";
import "./database/database.js";

const port = 3000;



app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})