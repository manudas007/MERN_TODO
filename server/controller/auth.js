import bcrypt from "bcrypt"
import User from "../models/User.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: passwordHash,
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}
export const login = async (req, res) => {
    console.log(req.body);
    try {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "user does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials." });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}