function formatDate(date){
  /**
   * @params {date} ie. Fecha Valor: Martes, 18 Enero  2022
   * @returns 'dd MMMM YYYY' i.e '05 Enero 2022'
   */
/*    const options = {year: 'numeric', month: 'long', day: 'numeric' }
   const formattedDate = date.toLocaleDateString('es-VE',options)

   const requiredDateFormat = formattedDate.replaceAll('de','') */

  const requiredDateFormat = date.split(',')[1].trim()
  //replaces all duplicated whitespaces with a single space
  const formattedDate = requiredDateFormat.replace(/ +(?= )/g,'');
  return formattedDate
}

module.exports.formatDate = formatDate