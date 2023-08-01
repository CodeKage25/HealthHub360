require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const PORT_SERVER = process.env.PORT_SERVER || 8000;
// const PORT_CLIENT = process.env.PORT_CLIENT || 3000; // Change this to your desired client port

const MONGO_URL = process.env.MONGO_URL;
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

app.get('/', (req, res) => {
  return res.send('Failed to log in!');
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


  const server = http.createServer(app);

  server.listen(PORT_SERVER, () => {
    console.log(`Server listening on port ${PORT_SERVER}...`);
  });
}

startServer();

// Start the Next.js client separately
// const { exec } = require('child_process');
// exec('cd ../client && npm run start', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error starting Next.js client: ${error.message}`);
//     return;
//   }
//   console.log(`Next.js client running on port ${PORT_CLIENT}...`);
// });
