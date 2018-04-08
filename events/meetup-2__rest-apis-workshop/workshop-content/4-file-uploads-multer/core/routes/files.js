const router = require('express').Router()
const fileMiddleware = require('../middlewares/files')
const fileController = require('../controllers/files')

router.post('/single', fileMiddleware.uploadSingle(), fileController.fileUpload)
router.post('/profilePic', fileMiddleware.uploadProfilePic(), fileController.fileUpload)
router.post('/array', fileMiddleware.uploadArray(), fileController.fileUpload)
router.post('/fields', fileMiddleware.uploadFields(), fileController.fileUpload)

module.exports = router
