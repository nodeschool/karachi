module.exports = {
  fileUpload: fileUpload
}

function fileUpload (req, res, next) {
  res.json({
    success: true,
    msg: 'file(s) upload successful'
  })
}
