const express =require("express")
const cors=require("cors")
const app = express();

app.use(cors())
app.use(express.json());


// controller
const userController=require("./controllers/user.controller")


// user route
app.use("/", userController)



module.exports=app