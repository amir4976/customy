const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

 const generateToken = (payload: any): string => {
    console.log(payload)
     const token = jwt.sign({email:payload}, process.env.JWT_SECRET, { expiresIn: '1h' });
     return token;
};


 const verifyToken = (token: string): any => {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     return decoded;
};



const hashPassword = (password: string): string => {
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(password, salt);
     return hash;
};

const comparePassword = (password: string , hash: string): boolean => {
     return bcrypt.compareSync(password, hash);
};



export { generateToken, verifyToken, hashPassword, comparePassword};

