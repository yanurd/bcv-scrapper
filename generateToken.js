require('dotenv').config()
const axios = require("axios")
function generateToken(){
  /**
   * @returns {token} Bearer token to use REST Api
   */
  const API = 'https://ph.airtek.com.ve:7250/Token'
  const username = process.env.USERNAME
  const password = process.env.PASSWORD
  const consulta = process.env.TIPO_CONSULTA
  debugger
  const data = JSON.stringify({
    UserName: username,
    Password: password,
    TipoConsulta: consulta
  })
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
  }

  return axios.post(API,data,options)
  .then(res => res.data)
  .catch(error => console.error(error))
}

module.exports.generateToken = generateToken