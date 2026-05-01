import jwt from 'jsonwebtoken';
import User from '../models/User';

export const protect = async (req, res, next) => {
    let token;

    if(req.cookie.token){
        token = req.cookie.token;
    }

    if(!token){
        return res.status(401).json({message: 'Not authorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = User.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        return res.status(401).json({message: "Token failed"});
    }
}