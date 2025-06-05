const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🔥 Backend Server is Running!');
});


// ✅ Route: Projects
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Sample Project One",
      description: "Awesome React and Express based project.",
      image: "sampleimg1.jpg"
    },
    {
      id: 2,
      title: "Sample Project Two",
      description: "Another fantastic creation using modern tech.",
      image: "sampleimg2.jpg"
    }
  ]);
});

// ✅ Route: Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Submission:', { name, email, message });

  // Send response
  res.status(200).json({ message: 'Message received! Thank you 🙌' });
});

// ✅ Only ONE listener at the end
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
