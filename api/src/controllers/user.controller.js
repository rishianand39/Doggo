const router=require("express").Router();

const UserModel =require("../models/user.model")


// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    let user=await UserModel.create(req.body)

    return res.status(200).json("You have successfully signed Up.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// SIGNIN
router.post("/signin", async (req, res) => {

  try {
    let user=await UserModel.findOne({email:req.body.email})
    if(!user){
      return res.status(400).json("Wrong username or password")
    }

    if(user.password!==req.body.password){
      return res.status(400).json("Wrong username or password")
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});


module.exports=router
