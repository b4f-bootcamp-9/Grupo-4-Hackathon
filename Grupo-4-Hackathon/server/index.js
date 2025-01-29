const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});


//connectar com o mongodb será nesse block de codigo
mongoose.connect('mongodb://localhost:27017/SociArt')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define os dados da coleção dos users
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
  })

  // faz de " User" um modelo based on the schema
const User = mongoose.model('User', userSchema);

// Middleware - JSON 
app.use(express.json());


const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      req.user = decoded;
      next();
    });
  };
  
  // Route p registar novo usuario
  app.post('/api/register', async (req, res) => {
    try {
      // Verificar se email existe
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Hash  password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      // Crear new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
      
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route auth and log in usuario
  app.post('/api/login', async (req, res) => {
    try {
      // Check email exist
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Comparar pass
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // G JWT token
      const token = jwt.sign({ email: user.email }, 'secret');
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // route paara pegar  user os details dos usuarios
  app.get('/api/user', verifyToken, async (req, res) => {
    try {
      // Fetch users details usando o token decodificado
      const user = await User.findOne({ email: req.user.email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ username: user.username, email: user.email });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Default route
  app.get('/', (req, res) => {
    res.send('Welcome to my User Registration and Login API!');
  });
  
  // Start o server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });