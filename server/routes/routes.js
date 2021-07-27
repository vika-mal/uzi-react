const { Router } = require("express");
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const router = new Router();
const jwt = require('jsonwebtoken')

router.post('/registration', async (req, res) => {
    try {
        const { email, password } = req.body;
        const candidate = await User.findOne({ email })
        if (candidate) {
            return res.status(400).json({ message: 'User already exist' })
        }
        const hashPassword = await bcrypt.hash(password, 7)
        const user = new User({ email, password: hashPassword })

        await user.save();
        return res.json({ message: 'User was created' })

    } catch (e) {
        res.send({ message: "Server error" })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return res.status(400).json({ message: 'Invalid password' })
        }
        const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' })
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email
            }
        })

    } catch (e) {
        res.send({ message: "Server error" })
    }
})

module.exports = router;