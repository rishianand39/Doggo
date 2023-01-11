const express =require("express")
const cors=require("cors")
const app = express();
const connect =require("./configs/db");
const dotenv=require("dotenv")
dotenv.config();


app.use(cors())
app.use(express.json());


// controller
const userController=require("./controllers/user.controller")


// user route
app.use("/", userController)


const PORT =process.env.PORT || 8000;
app.listen(PORT,async()=>{
    try {
        await connect;
        console.log(`server running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})
