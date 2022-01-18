const axios = require("axios")
const utils = require('./utils/formatDate')
const strings = require('./utils/formatString')

function updateData(dollarValue, commentText, authToken){
  /**
   * Crea un nuevo registro en BBDD con la tasa del dolar
   * @params {dollarValue} number
   * @params {commentText} string
   */
  const formatToday = utils.formatDate(commentText)


  const API = process.env.REQUEST_TASA_BANCARIA_ENDPOINT
  const data = JSON.stringify({
    Fecha_Aplica: formatToday,
    Monto: dollarValue,
    Comentario:  strings.formatString(commentText)
  })
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
  }
  return setTimeout(async ()=>{
    await axios.post(API,data,options)
      .then(res => res.data)
      .catch(error => console.error(error))}
      ,200)
}

module.exports.updateData = updateData