import {PrismaClient} from "@prisma/client";
//same as import mongoose from "mongoose";

const client = new PrismaClient();

async function createUser(){
    await client.user.create({
        data:{
            username:"testuser",
            password:"testpassword",
            age : 25,
            city : "New York"
        }
    })
}

async function getUser(){
    const user = await client.user.findFirst({
        where:{
            id:1
        },
        include:{
            todos:true
        }
    })
    console.log(user);
}

// createUser()
// getUser()