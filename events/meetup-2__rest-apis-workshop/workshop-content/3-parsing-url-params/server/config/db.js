import mongoose from 'mongoose';

const mongoUrl = 'mongodb://localhost/test';

export default () => {
  // establish db connection
  mongoose.connect(mongoUrl);
  mongoose.connection
    .once('open', function() {
      console.log('MongoDB running');
    })
    .on('error', function(err) {
      console.error(err);
    });
};
