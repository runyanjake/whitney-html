function tagline() {
	console.log("Generating today's tagline.")
	
	var taglines = [
		"Performance Lives Here.",
		"Four Nines? More Like Four Zeroes.",
		"0.0009999% is still technically Four Nines.",
		"It's Gooch."
	]
	var idx = Math.floor((new Date()).getTime()/86400)
	document.getElementById("tagline").innerHTML = taglines[Math.floor(idx % 2)]
}
