const translate = chr => {
  const charCode = chr.charCodeAt(0)
  
  if(/[A-Z]/.test(chr)) {
    return charCode > 77 ? String.fromCharCode(charCode - 13) : String.fromCharCode(charCode + 13)
  } else if(/[a-z]/.test(chr)) {
    return charCode > 109 ? String.fromCharCode(charCode - 13) : String.fromCharCode(charCode + 13)
  } else {
    return chr
  }
}

module.exports = str => str.split('').map(translate).join('')

