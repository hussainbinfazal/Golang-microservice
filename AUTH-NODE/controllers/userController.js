// Here we shall define the userController for handling user-related operations
import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import { auth } from '../auth.js';
const prisma = new PrismaClient();
export const createUser = (req, res) => {
    try {

        const { email, password, name, phone, role, profilePicture } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const user = prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                phone,
                role,
                profilePicture
            }
        });
        return res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getUser = async (req, res) => {
    try {


        if (!req.params.id) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User found', user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    session.user = auth(req, res);
    if (!session.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User found', user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}