import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import contactsRoute from './routes/contactsRoute.js';
import usersRoute from './routes/usersRoute.js';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';

dotenv.config();
const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// Default Message
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to Portfolio Application' });
});

mongoose.connect('mongodb://127.0.0.1:27017/Lab_Assignment_4', {

 useNewUrlParser: true,

 useUnifiedTopology: true,

});

mongoose.connection.once('open', () => {

 console.log('Connected to MongoDB');

});

app.use('/api/auth', authRoute);
app.use('/api/contacts', contactsRoute);
app.use('/api/users', usersRoute)


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));