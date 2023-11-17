import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookie from 'cookie';

dotenv.config();

export const register = async (req:Request,res:Response) =>{
    const {
        originalName,
        originalEmail,
        password,
        confirmPassword,
      } = req.body;

      const name = originalName.toUpperCase();
      const email = originalName.toLowerCase();
    const userRepository = getRepository(User);
    const existingUser = await userRepository.findOne({where:{email:email.toLowerCase()}})
    if(existingUser){
        return res.status(400).json({message:"Email already in use"})
    }

    if(password!== confirmPassword){
        return res.status(400).json({message:"Passwords do not match"})
    }

    const senhaComHash = bcrypt.hashSync(password, 10);

    const newUser = userRepository.create({
        name:name,
        email:email,
        password:senhaComHash
    })
    await userRepository.save(newUser);
    return res.status(201).json({message:"User created"});
};

export const login = async (req:Request,res:Response) => {
    try{
        let {email,password} = req.body;
        email = email.toLowerCase();

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({where:{email}})

        if(user && bcrypt.compareSync(password,user.password)){
            const token = jwt.sign({id:user.id,name:user.name,email:user.email},process.env.JWT_CHAVE,{expiresIn:3600});
            res.setHeader('Set-Cookie', cookie.serialize('token', token, {
                httpOnly: true, 
                maxAge: 3600, 
                sameSite: 'strict', 
                secure: process.env.NODE_ENV === 'production', 
                path: '/', 
            }));
            return res.status(200).json({message:` Bem-Vindo - ${user.name}, seu Token ${token}` });
        }
    }catch (error) {
        console.error('Erro:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
      }
}
