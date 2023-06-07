//your code here
let touristsSopts = ['The Virupaksha Temple', 'Vicoria Memorial', 'Tajmahal'];
function strip(word){
	let regex = new RegExp('^(a | an | the'),i)
	return word.replace(regex, '').trim()
}
const sortedBands = touristsSopts.sort((a,b) => (strip(a)>strip(b)) ? 1 : -1)
document.querySelector('#bands').innerHTML = sortedBands.map(item => `<li>${item}</li>`).join('')
