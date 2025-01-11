import { redirect } from 'next/navigation'
import { getUserByEmail } from "../../db_functions/user_functions";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const user = await getUserByEmail(email)

    if (!user) {
        return new Response(JSON.stringify({
            error: 'User is not found!'
        }), {
            status: 404
        })
    } else {
        const real_password = user.password;
        if(password === real_password){
            return new Response(JSON.stringify({
                msg: 'success'
            }), {
                status: 200
            })
        } else {
            return new Response(JSON.stringify({
                error: 'Your Password is incorrect!'
            }), {
                status: 401
            })
        }
    }
}