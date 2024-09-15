import { Router } from 'express'
import adminAuth from './../middlewares/adminAuth.js'

const router = Router()

// נתיב לפאנל הניהול
router.use('/admin', adminAuth, (req, res) => {
    res.send('Welcome to the admin panel!')
})

export default router