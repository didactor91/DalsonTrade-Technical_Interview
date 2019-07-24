const express = require('express')
const bodyParser = require('body-parser')
const logic = require('../logic')
const handleErrors = require('./handle-errors')

const jsonParser = bodyParser.json()

const router = express.Router()

router.get('/string/reverse/:string', (req, res) => {
    handleErrors(async () => {
        const { params: { string } } = req

        const reversed = await logic.reverseString(string)
        return res.json(reversed)
    },
        res)
})

router.post('/item', jsonParser, (req, res) => {
    handleErrors(async () => {
        const { body: { username, password, isAdmin } } = req

        await logic.addItem(username, password, isAdmin )
        res.status(201).json({ message: 'Ok, item added.' })
    },
        res)
})

router.get('/items', (req, res) => {
    handleErrors(async () => {
        const items = await logic.retrieveAllItems()
        return res.json(items)
    },
        res)
})

module.exports = router