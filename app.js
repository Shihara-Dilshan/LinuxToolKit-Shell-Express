const express = require('express');
const { exec } = require('child_process');
const { join } = require('path');
const cors = require('cors');

const port = process.env.PORT || 54774
const app = express();

app.use(cors());
app.use(express.static(join(__dirname, 'static')))


app.get('/api/v2/mongoDB/status', (req, res) => {
  exec(join(__dirname, '/mongoDB/shellfile.sh'), (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ output: null, error: err.message })
    }

    res.status(200).json({ output: stdout, error: null })
  })
})


app.get('/api/v2/mongoDB/port', (req, res) => {
  exec(join(__dirname, '/mongoDB/port.sh'), (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ output: null, error: err.message })
    }

    res.status(200).json({ output: stdout, error: null })
  })
})












app.get('/api/v2/postgres/status', (req, res) => {
  exec(join(__dirname, '/postgres/shellfile.sh'), (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ output: null, error: err.message })
    }

    res.status(200).json({ output: stdout, error: null })
  })
})

app.get('/api/v2/postgres/start', (req, res) => {
  exec(join(__dirname, '/postgres/start.sh'), (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ output: null, error: err.message })
    }

    res.status(200).json({ output: stdout, error: null })
  })
})


app.get('/api/v2/postgres/stop', (req, res) => {
  exec(join(__dirname, '/postgres/stop.sh'), (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ output: null, error: err.message })
    }

    res.status(200).json({ output: stdout, error: null })
  })
})

app.get('/api/v2/postgres/port', (req, res) => {
  exec(join(__dirname, '/postgres/port.sh'), (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ output: null, error: err.message })
    }

    res.status(200).json({ output: stdout, error: null })
  })
})



app.listen(port, () => {
  console.log('server listening on port', port)
})
