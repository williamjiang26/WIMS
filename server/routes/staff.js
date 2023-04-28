const {Router} = require('express')
const express = require('express')
const router = express.Router

router.get('/', (req, res) => {
    res.json([
        {
            username: 'will',
            age: 24
        },
        {
            username: 'will',
            age: 24
        }
    ])
})