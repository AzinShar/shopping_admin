import { userExists, saveUserToDatabase } from '../../db_functions/user_functions';
import bcrypt from 'bcrypt';


export async function POST(req: Request) {
    const { email, password } = await req.json();
    if (!email || !password) {
        return new Response(JSON.stringify({
            error: 'Username and password are required'
        }), {
            status: 400
        })

    }

    const finedUserExists = await userExists(email);
    if (finedUserExists) {
        return new Response(JSON.stringify({
            error: 'Email already exists'
        }), {
            status: 409
        })

    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await saveUserToDatabase(email, hashedPassword);

    return new Response(JSON.stringify({
        message: 'User signed up successfully'
    }), {
        status: 200
    })

}