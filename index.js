const mongoose = require('mongoose');
const app = require('./app');
const SERVER_PORT = process.env.PORT || 3977;
const { API_VERSION, SERVER_IP, DB_PORT, DB_NAME } = require('./config');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(
  `mongodb://${SERVER_IP}:${DB_PORT}/${DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log('La conexión a la base de datos es correcta.');
      app.listen(SERVER_PORT, () => {
        console.log('#########################');
        console.log('####### API REST ########');
        console.log('#########################');
        console.log(`http://${SERVER_IP}:${SERVER_PORT}/api/${API_VERSION}`);
      });
    }
  }
);
