import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('goodbye world\n')
})

const PORT = 3000
app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`)
})
