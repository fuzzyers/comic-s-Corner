import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import db from "@/lib/db"

const SECRET = process.env.JWT_TOKEN

type RequestBody = {
    email: string;
    password: string;
}

export const POST = async (req: NextRequest) => {
    try {
        const { email, password}: RequestBody = await req.json()

        const emailExists = await db.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        )

        if (emailExists.length < 1){
            return NextResponse.json({message: "Invalid Login Credentials"})
        }

        const isPasswordValid = bcrypt.compareSync(password, emailExists[0].password)

        if (isPasswordValid === false){
            return NextResponse.json({message: "Invalid Login Credentials"})
        }

        if (typeof SECRET !== "string"){
            return NextResponse.json({ message: "Server Error"}, {status: 500})
        }

        const token = jwt.sign({email: emailExists[0].email, username: emailExists[0].username}, SECRET, {
            expiresIn: "1hr",
        })

        // Set JWT in cookie for protection
        const response = NextResponse.json({message: "Logged In Successfully"})
        response.cookies.set("comicsCornerAuthToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60,
        })

        return response
    } catch (error) {
        return NextResponse.json({ message: error}, {status: 500})
    }
}