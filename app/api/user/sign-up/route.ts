import { NextRequest, NextResponse } from "next/server";
import User from '@/app/models/user';
import connect from '@/lib/connect';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    try {
        const response = await request.json();
        const { username, email, password, tag } = response;

        if (!username || !password || !tag || !email) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        await connect();

        const user = await User.findOne({ email: email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
            tag: tag
        });

        await newUser.save();

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return NextResponse.json({ error: "JWT secret is not defined" }, { status: 500 });
        }

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email, username: newUser.username },
            secret
        );

        const res = NextResponse.json({ message: "User created successfully" }, { status: 201 });
        res.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        return res;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}