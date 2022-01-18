const request = require('request')
const cheerio = require('cheerio')
const update = require('./updateData')
const token = require('./generateToken')
//Endpoint to scrape
const BCV_URL = 'http://www.bcv.org.ve/'

request(BCV_URL, (error, response, html) => {
  if (!error && response.statusCode === 200){
    const $ = cheerio.load(html)
    
    //Get the HTML element by a dolar ID, if this ever changes its ID or node class values,
    //then the scrapper won't work
    const dollar = $('#dolar>.field-content>.row.recuadrotsmc>.col-sm-6.col-xs-6.centrado')
    const exchange = dollar.text()
    const comment = $('.pull-right.dinpro.center')
    const commentText = comment.text()
    /**
     * BCV returns a dollar value like this: 4,12132
     * but to work with float numbers, we must change that 
     * comma to a point.
     * 
     * Be careful when this number is bigger, like 100.000,02
     */
    const transformExchange = parseFloat(exchange.replace(',','.'))
    
    //return exchange rate
    const saveData = new Promise((resolve,reject) => {
      setTimeout(() => {
        let authToken = token.generateToken()
        authToken ? resolve(authToken) : reject(error)
      }, 100);
    })
    return saveData
      .then(res => update.updateData(transformExchange,commentText,res))
      .catch(error => console.error(error))
  }
})