import express from "express"
import { status } from 'minecraft-server-util'

export const router = express.Router()

router.get('/', async (req, res) => {
    const { host, port } = req.query
    try {
        const response = await status(host, parseInt(port), { timeout: 2000 })
        if (response) {
            return res.send(response)
        }
    } catch (error) {
        return res.status(400).send({ error: "Wrong host or port." })
    }
})