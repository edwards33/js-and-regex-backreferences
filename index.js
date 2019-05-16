var text01 = `
It is like this this!
`

var regex01 = /(this)\s?\1/g //finds typo

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}
console.log('\nregex01:')
loop(text01, regex01)

//replace duplicate
var regex02 = /(this)\s?(?=\1)/g

console.log(text01.replace(regex02, ''))

var text02 = `
It is like this this thing thing!
`
var regex03 = /(\w+)\s?(?=\1)/g
console.log(text02.replace(regex03, ''))

var text03 = `
<p>Some text</p><div>Div's text</div>
`
var regex04 = /<(\w+)>(.*)<\/\1>/g
console.log(text03.replace(regex04, '$2\n'))
