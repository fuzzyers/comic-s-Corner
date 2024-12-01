import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import db from "@/lib/db"

type RequestBody = {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}

export const POST = async (req: NextRequest) => {
    try {
        const data: RequestBody = await req.json()

        if (data.password !== data.confirmPassword){
            return NextResponse.json({message: "Passwords do not match"}, {status: 401})
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)

        await db.query(
            `INSERT INTO users (username, password, email) VALUES ($1, $2, $3)`,
            [data.username, hashedPassword, data.email]
        )

        return NextResponse.json({data, hashed: hashedPassword})
    } catch (error) {
        return NextResponse.json({ message: error}, {status: 500})
    }
}