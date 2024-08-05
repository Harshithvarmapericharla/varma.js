import express from "express";
import dbInit from "./database/init";
// 
 import studentRoute from "./database/routes/student.routes";
// 
const port = 4004


const app = express();

app.use(express.json());
 dbInit()
 app.use('/',studentRoute)
app.get('/', (req,res) =>{
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });