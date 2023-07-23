// server.js
const next = require('next');
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://carefinder-api:9gzS1lfzfYS3rTpT@carefindercluster.zwhhgad.mongodb.net/?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Express routes and middleware
//   app.get('/custom-route', (req, res) => {
//     res.send('This is a custom route in Express!');
//   });

  // All other requests will be handled by Next.js
  app.get('*', (req, res) => {
    return nextHandle(req, res);
  });

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

nextApp.prepare().then(() => {
  startServer();
});