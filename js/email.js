{
    coded = "60S@S0GGuw01.0S"
    key = "HaK8mvjCsVGdrPYD05ySfZEhOlXwMiUbWeoQgB1zkJ496ALn3cNuIq7x2tTpFR"
    shift = coded.length
    link = ""
    for (i = 0; i < coded.length; i++) {
        if (key.indexOf(coded.charAt(i)) == -1) {
            ltr = coded.charAt(i)
            link += (ltr)
        }
        else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
            link += (key.charAt(ltr))
        }
    }
    document.write("<a href='mailto:" + link + "' target='_blank' class='fas fa-envelope social'></a>")
}