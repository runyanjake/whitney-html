var taglines = [
    ["Performance Lives Here.", "//www.whitney.rip"],
    ["Four Nines? More Like Four Zeroes.", ""],
    ["0.0009999% is still technically Four Nines.", ""],
    ["It's Gooch.", ""],
    ["PWS, Powered by DWS", "https://www.onlypriests.com"],
    ["SportsCenter NOT Top 10", "https://www.youtube.com/watch?v=KZk1ncguwHo"],
    ["click the logo", ""],
    ["buy me real internet","https://www.paypal.me/runyanjake"]
]

var lastTagline = -1

window.onload = function tagline() {
	console.log("Generating today's tagline.")
    var htmlElement = document.getElementById("tagline")
    var day = Math.floor((new Date()).getTime()/86400000)
    var idx = Number(Math.floor(day % taglines.length))
    lastTagline = idx
    htmlElement.innerHTML = taglines[Math.floor(idx % taglines.length)][0]
    htmlElement.href = taglines[Math.floor(idx % taglines.length)][1]
    if(taglines[Math.floor(idx % taglines.length)][1] == ""){
        document.getElementById("tagline").classList.add('inactiveLink')
    }else{
        document.getElementById("tagline").classList.remove('inactiveLink')
    }
}

function randomTagline() {
	console.log("Generating a random tagline.")
    var idx = lastTagline;
    while(idx == lastTagline){
        idx = Math.floor(Math.random() * taglines.length)
    }
    lastTagline = idx;
	document.getElementById("tagline").innerHTML = taglines[Math.floor(idx % taglines.length)][0]
    document.getElementById("tagline").href = taglines[Math.floor(idx % taglines.length)][1]
    if(taglines[Math.floor(idx % taglines.length)][1] == ""){
        document.getElementById("tagline").classList.add('inactiveLink')
    }else{
        document.getElementById("tagline").classList.remove('inactiveLink')
    }
}
