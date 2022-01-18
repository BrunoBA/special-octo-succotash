let text = 'fala brasil <a target="_blank">edição passada</a>  Aenean lacinia bibendum sed consectetur. <a href="/work">Work</a> quis risus eget urna mollis ornare <a href="/about">about</a> leo.'

const regex = new RegExp("<\s*a[^>]*>(.*?)<\s*/\s*a>", "g")

let result = regex.exec(text)
while (result != null) {
  console.log(result[1]);
  result = regex.exec(text)
}