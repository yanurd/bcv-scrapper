const request = require('request')
const cheerio = require('cheerio')

//Endpoint to scrape
const BCV_URL = 'http://www.bcv.org.ve/'

request(BCV_URL, (error, response, html) => {
  if (!error && response.statusCode === 200){
    const $ = cheerio.load(html)
    
    const dollar = $('#dolar>.field-content>.row.recuadrotsmc>.col-sm-6.col-xs-6.centrado')
    const exchange = dollar.text()
    
    /**
     * BCV returns a dollar value like this: 4,12132
     * but to work with float numbers, we must change that 
     * comma to a point.
     * 
     * Be careful when this number is bigger, like 100.000,02
     */
    const transformExchange = exchange.split(',')
    //transforming value
    const intValue = transformExchange[0]
    const floatValue = transformExchange[1]
    //return exchange rate
    const exchangeRate = `${intValue}.${floatValue}`
    return console.log(parseFloat(exchangeRate))
  }
})