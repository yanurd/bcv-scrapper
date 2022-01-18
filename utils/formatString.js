function formatString (text) {
  const formattedString =  text.replaceAll('\n', '')
  const trimString = formattedString.trim()
  return trimString
}

module.exports.formatString = formatString