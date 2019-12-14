const app = require('express')();
const {executor} = require('./executor')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/compilador', (req, res) => {
  const resultado = executor(req.query.language, req.query.code)
  res.end(resultado)
})

app.listen(3000, () => console.log('Rodando!'))