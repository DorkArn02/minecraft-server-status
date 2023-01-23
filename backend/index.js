import express from "express"
import { router } from "./controllers/statusControllers.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use('/api', router)

app.listen('8080', () => console.log('Listening on :8080'))