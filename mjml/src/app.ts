import express from 'express'
import { writeFileSync } from 'fs'
import router from './router'
const cors = require('cors')
const ip = require('ip');


function onInit(){
  const app = express()
  app.use(express.json());
  app.use(cors())
  app.use(router)
  
  writeFileSync('./shared/mjml.json', JSON.stringify({ ip: ip.address() }))
  
  app.listen(process.env.PORT || 3000, () => {
    console.log(`mjml service is listening at port ${process.env.PORT || 3000}!`)
  })
}

onInit()