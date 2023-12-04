// const mongoose = require('mongoose');

// const url = `mongodb+srv://chat_app_admin:Saad99@cluster0.h3f0i4y.mongodb.net/?retryWrites=true&w=majority`

// mongoose.connect(url,{
        
//         deprecationErrors: true,
// }).then(()=>console.log('Connected to DB')).catch((e)=>console.log('Error',e))

const mongoose = require('mongoose');

const url = mongoose.connect('mongodb+srv://chat_app_admin:Saad99@cluster0.h3f0i4y.mongodb.net/?retryWrites=true&w=majority')
url.then(()=>console.log('Connected to DB')).catch((e)=>console.log('Error',e));

// Handle deprecation warnings globally
// process.on('warning', (warning) => {
//   if (warning.name === 'MongooseDeprecationWarning') {
//     console.warn(`Mongoose Deprecation Warning: ${warning.message}`);
//   } else {
//     console.warn(warning);
//   }
// });

// mongoose.connection.on('connected', () => {
//   console.log('Connected to DB');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('Error connecting to DB:', err);
// });

// // Optionally, handle disconnection events
// mongoose.connection.on('disconnected', () => {
// console.log('Disconnected from DB');
// });

// // Close the Mongoose connection if the Node process is terminated
// process.on('SIGINT', () => {
// mongoose.connection.close(() => {
//     console.log('Mongoose connection closed due to app termination');
//     process.exit(0);
// });
// });