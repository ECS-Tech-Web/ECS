
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express()

app.use(
    cors({
        origin:["https://ecs-rouge.vercel.app", "http://localhost:5173","https://ecsnits.in"],
        credentials:true
    })
)

//Commonly Used Middlewares
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js"
import registrationRouter from "./routes/registrationRoutes.js";


app.use("/api/v1/healthcheck",healthcheckRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/registrations", registrationRouter);


export {app}