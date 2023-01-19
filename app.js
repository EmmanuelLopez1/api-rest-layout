// PACKAGES
import dotenv from "dotenv"
// SERVER 
import Server from "./models/server.js"

// CONFIG 
dotenv.config()

const server = new Server()
server.listen()
