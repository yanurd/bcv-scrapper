const formatDate = (date) => {
  /**
   * @params {date} new Date JS object
   * @returns 'dd MMMM YYYY' i.e '05 Enero 2022'
   */
   const options = {year: 'numeric', month: 'long', day: 'numeric' }
   const formattedDate = date.toLocaleDateString('es-VE',options)

   const requiredDateFormat = formattedDate.replaceAll('de','')
   return requiredDateFormat
}

export default formatDate