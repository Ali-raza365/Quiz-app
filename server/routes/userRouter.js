const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.get('/all', userCtrl.getUsers)
router.get('/info', auth,  userCtrl.getUser)
router.put('/update', auth,  userCtrl.updateUser)
router.post('/delete', auth,  userCtrl.deleteUser)

module.exports = router