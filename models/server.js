import express from "express"
import cors from "express"

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3000;

        // DATABASE
        this.dbConenction()

        // MIDDLEWARES
        this.middlewares()

        // ROUTES
        this.routes()

    }

    async dbConenction(){

    }

    middlewares(){

    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("running application on port: ", this.port);
        })
    }
}


export default Server