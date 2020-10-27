const express = require('express')
const { exec } = require('child_process')
const { join } = require('path')

const port = process.env.PORT || 54774
const app = express()

app.use(express.static(join(__dirname, 'static')))

app.get('/hello', (req, res) => {
  exec(join(__dirname, 'shellfile.sh'), (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ output: null, error: err.message })
    }

    res.status(200).json({ output: stdout, error: null })
  })
})


app.listen(port, () => {
  console.log('server listening on port', port)
})
