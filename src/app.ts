import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from '../src/routes'

require('dotenv').config()

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares ():void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database ():void {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mateusfcc-x5rzm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
  }

  private routes ():void {
    this.express.use(routes)
  }
}

export default new App().express
