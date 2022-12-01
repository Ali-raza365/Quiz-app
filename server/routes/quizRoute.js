const router = require('express').Router()
const quizCtrl = require('../controllers/quizCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/create',auth, quizCtrl.create)
router.put('/update',auth, quizCtrl.update)
router.post('/delete',auth, quizCtrl.delete)
router.post('/submit',auth, quizCtrl.submit)
router.get('/find/:id',auth, quizCtrl.findById)
router.get('/all',quizCtrl.findAll)
router.get('/findbyuser/:id',auth,quizCtrl.findByUser)



module.exports = router