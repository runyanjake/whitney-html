var taglines = [
    ["Performance Lives Here.", "//whitney.rip"],
    ["Four Nines? More Like Four Zeroes.", ""],
    ["0.0009999% is still technically Four Nines.", ""],
    ["It's Gooch.", ""],
    ["PWS, Powered by DWS", "https://www.onlypriests.com"],
    ["SportsCenter NOT Top 10", "https://www.youtube.com/watch?v=KZk1ncguwHo"]
    ["click the logo", ""],
    ["buy me real internet","https://www.paypal.me/runyanjake"]
]

function tagline() {
	console.log("Generating today's tagline.")
    var idx = Math.floor((new Date()).getTime()/86400000)
    document.getElementById("tagline").innerHTML = taglines[Math.floor(idx % taglines.length)][0]
    document.getElementById("tagline").href = taglines[Math.floor(idx % taglines.length)][1]
    if(taglines[Math.floor(idx % taglines.length)][1] == ""){
        document.getElementById("tagline").classList.add('inactiveLink')
    }else{
        document.getElementById("tagline").classList.remove('inactiveLink')
    }
}

function randomTagline() {
	console.log("Generating a random tagline.")
    var idx = Math.floor(Math.random() * taglines.length)
	document.getElementById("tagline").innerHTML = taglines[Math.floor(idx % taglines.length)][0]
    document.getElementById("tagline").href = taglines[Math.floor(idx % taglines.length)][1]
    if(taglines[Math.floor(idx % taglines.length)][1] == ""){
        document.getElementById("tagline").classList.add('inactiveLink')
    }else{
        document.getElementById("tagline").classList.remove('inactiveLink')
    }
}
