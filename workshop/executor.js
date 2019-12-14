const { spawnSync } = require('child_process')

const languages = new Map();

languages.set('javascript', (codeString) => {
  return {
    start: 'node',
    args: ['-p', codeString]
  }
})

languages.set('python', (codeString) => {
  return {
    start: 'python',
    args: ['-c', codeString]
  }
})

const executor = (language, codeString) => {
  const params = languages.get(language)(codeString)

  const executado = spawnSync(params.start, params.args, {
    encoding: 'utf8'
  })

  return executado.stdout
}

module.exports = { executor }