let DEGREE = 0
basic.forever(function () {
    DEGREE = input.compassHeading()
    if (DEGREE < 45 || DEGREE > 315) {
        basic.showString("N")
    } else if (DEGREE < 135) {
        basic.showString("E")
    } else if (DEGREE < 225) {
        basic.showString("S")
    } else if (DEGREE < 315) {
        basic.showString("W")
    }
})
