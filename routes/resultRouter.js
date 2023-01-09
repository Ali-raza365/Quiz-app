const router = require('express').Router()
const resultCtrl = require('../controllers/resultCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.get('/find/:id',auth, resultCtrl.findById)
router.get('/all',resultCtrl.findAll)
router.get('/findbyuser/:id',auth,resultCtrl.findByUser)
router.get('/findbyquiz/:id',auth,resultCtrl.findByQuizId)
router.post('/delete',auth,resultCtrl.delete)



module.exports = router