import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const register = async(req,res) =>{
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    try {
      const newuser = await User.create({
        email,
        password: passwordHash
      });
      const savedUser = await newuser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      console.log(e);
      res.status(500).json({ error: err.message });
    }
}

export const login = async(req,res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };