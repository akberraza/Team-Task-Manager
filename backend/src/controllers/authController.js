import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Generate Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '7d'
    })
}

export const registerUser = async(req, res) => {
    try {
        
        const {name, email, password} = req.body;

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: 'User already axists'});
        }

        const user = await User.create({name, email, password});

        const token = generateToken(user._id);

        res.cookie('token', token, {
            httpOnly: true,
            secure:false,
            sameSite: 'lax'
        })

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        });

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const loginUser = async(req, res) => {
    try {
        
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user || !(await user.comparePassword(password))){
        return res.status(400).json({message: 'Invalid Credentials'});
    }
    
    const token = generateToken(user._id);

    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    });

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email
    });

    } catch (err) {
       res.status(500).json({message: err.message}); 
    }
}

export const logout = async(req, res) => {
    res.cookie('token', '', {maxAge: 0});
    res.json({message: 'logged out '});
}