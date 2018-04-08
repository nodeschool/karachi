const path = require('path')
const multer = require('multer')
const mimeType = require('mime-types')

const uploadDir = path.join(__dirname, '../../tmp/')
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const ext = mimeType.extension(file.mimetype)
    cb(null, `file-${Date.now()}.${ext}`)
  },
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  }
})

const upload = multer({ storage: storage })
const uploadPicture = multer({ storage: storage, fileFilter: _imgFilter })

module.exports = {
  uploadSingle,
  uploadArray,
  uploadFields,
  uploadProfilePic
}

function uploadSingle () {
  return upload.single('file')
}

function uploadArray () {
  return upload.array('files', 4) // first param is for key against which the multer is expecting files,
                                  // other is maxCount allowed
}

function uploadFields () {
  return upload.fields({
    name: 'avatar',
    maxCount: 1
  }, {
    name: 'gallery',
    maxCount: 5
  })
}

function uploadProfilePic () {
  return uploadPicture.single('image')
}

function _imgFilter (req, file, cb) {
  if (!file.originalname.match(/\.(png|jpeg|jpg|gif)/)) {
    cb(new Error('Only images are allowed'), false) // setting the second param
  }
  cb(null, true)
}
