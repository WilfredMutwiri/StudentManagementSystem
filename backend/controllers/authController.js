const User=require('../models/userModel');
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')

const signup=async(req,res,next)=>{
    const {userName,email,password}=req.body;
    if(
        !userName ||
        !email ||
        !password ||
        userName===""||
        email===""||
        password===""
    ){
        console.log("All fields must be filled");
    }
    const hashPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({
        userName,
        email,
        password:hashPassword
    });
    try {
        await newUser.save()
        res.json("Signup successful")
    } catch (error) {
        next(error)
    }

}

const signin=async(req,res,next)=>{
const {userName,email,password}=req.body;
if(
    !userName ||
    !email ||
    !password ||
    userName===""||
    email===""||
    password===""
){
    console.log("All fields must be filled");
}
try {
    // check user availability in db
    const validUser=await User.findOne({email})
    if(!validUser){
        console.log("User not found");
    }
    // check user password
    const validPassword=bcryptjs.compareSync(password,validUser.password);
    if(!validPassword){
        console.log("Incorrect password");
    }
    // create token
    const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
    // separate password from response
    const {password:pass,...rest}=validUser._doc;
    // create cookie
    res.status(200)
    .cookie('access_token',token,{
        httpOnly:true
    })
    .json(rest)
} catch (error) {
    
}
}

module.exports={
    signup,
    signin
}
