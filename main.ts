function Pokretlo12 () {
    if (pins.analogReadPin(AnalogPin.P0) > 983 && pins.analogReadPin(AnalogPin.P0) <= 990) {
        basic.showIcon(IconNames.Duck)
    } else if (pins.analogReadPin(AnalogPin.P0) > 979 && pins.analogReadPin(AnalogPin.P0) <= 985) {
        basic.showIcon(IconNames.TShirt)
    } else if (pins.analogReadPin(AnalogPin.P0) > 974 && pins.analogReadPin(AnalogPin.P0) <= 981) {
        po3()
    } else if (pins.analogReadPin(AnalogPin.P0) > 963 && pins.analogReadPin(AnalogPin.P0) <= 970) {
        basic.showIcon(IconNames.Rollerskate)
    } else if (pins.analogReadPin(AnalogPin.P0) > 955 && pins.analogReadPin(AnalogPin.P0) <= 960) {
        basic.showIcon(IconNames.Snake)
    } else if (pins.analogReadPin(AnalogPin.P0) > 944 && pins.analogReadPin(AnalogPin.P0) <= 950) {
        basic.showIcon(IconNames.QuarterNote)
    } else if (pins.analogReadPin(AnalogPin.P0) > 933 && pins.analogReadPin(AnalogPin.P0) <= 940) {
        po7()
    } else if (pins.analogReadPin(AnalogPin.P0) > 915 && pins.analogReadPin(AnalogPin.P0) <= 930) {
        basic.showIcon(IconNames.Happy)
    } else if (pins.analogReadPin(AnalogPin.P0) > 890 && pins.analogReadPin(AnalogPin.P0) <= 900) {
        basic.showIcon(IconNames.Yes)
    } else if (pins.analogReadPin(AnalogPin.P0) > 850 && pins.analogReadPin(AnalogPin.P0) <= 860) {
        basic.showIcon(IconNames.StickFigure)
    } else if (pins.analogReadPin(AnalogPin.P0) > 823 && pins.analogReadPin(AnalogPin.P0) <= 830) {
        basic.showIcon(IconNames.Silly)
    } else if (pins.analogReadPin(AnalogPin.P0) > 780 && pins.analogReadPin(AnalogPin.P0) <= 790) {
        basic.showIcon(IconNames.Giraffe)
    }
}
function po3 () {
    R = 3
    basic.showIcon(IconNames.Ghost)
    soundExpression.giggle.play()
    basic.showNumber(R)
}
function po7 () {
    R = 7
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
    basic.showNumber(R)
}
function klaw16 () {
    if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 10) {
        basic.showIcon(IconNames.Duck)
    } else if (pins.analogReadPin(AnalogPin.P1) > 60 && pins.analogReadPin(AnalogPin.P1) <= 70) {
        basic.showIcon(IconNames.TShirt)
    } else if (pins.analogReadPin(AnalogPin.P1) > 120 && pins.analogReadPin(AnalogPin.P1) <= 140) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (pins.analogReadPin(AnalogPin.P1) > 175 && pins.analogReadPin(AnalogPin.P1) <= 220) {
        basic.showIcon(IconNames.Rollerskate)
    } else if (pins.analogReadPin(AnalogPin.P1) > 230 && pins.analogReadPin(AnalogPin.P1) <= 300) {
        basic.showIcon(IconNames.Snake)
    } else if (pins.analogReadPin(AnalogPin.P1) > 310 && pins.analogReadPin(AnalogPin.P1) <= 350) {
        basic.showIcon(IconNames.QuarterNote)
    } else if (pins.analogReadPin(AnalogPin.P1) > 360 && pins.analogReadPin(AnalogPin.P1) <= 400) {
        basic.showIcon(IconNames.Meh)
    } else if (pins.analogReadPin(AnalogPin.P1) > 410 && pins.analogReadPin(AnalogPin.P1) <= 470) {
        basic.showIcon(IconNames.Happy)
    } else if (pins.analogReadPin(AnalogPin.P1) > 500 && pins.analogReadPin(AnalogPin.P1) <= 550) {
        basic.showIcon(IconNames.Yes)
    } else if (pins.analogReadPin(AnalogPin.P1) > 560 && pins.analogReadPin(AnalogPin.P1) <= 600) {
        basic.showIcon(IconNames.StickFigure)
    } else if (pins.analogReadPin(AnalogPin.P1) > 620 && pins.analogReadPin(AnalogPin.P1) <= 670) {
        basic.showIcon(IconNames.Silly)
    } else if (pins.analogReadPin(AnalogPin.P1) > 700 && pins.analogReadPin(AnalogPin.P1) <= 750) {
        basic.showIcon(IconNames.Giraffe)
    } else if (pins.analogReadPin(AnalogPin.P1) > 760 && pins.analogReadPin(AnalogPin.P1) <= 800) {
        basic.showIcon(IconNames.Angry)
    } else if (pins.analogReadPin(AnalogPin.P1) > 800 && pins.analogReadPin(AnalogPin.P1) <= 850) {
        basic.showIcon(IconNames.Sword)
    } else if (pins.analogReadPin(AnalogPin.P1) > 880 && pins.analogReadPin(AnalogPin.P1) <= 920) {
        basic.showIcon(IconNames.Butterfly)
    } else if (pins.analogReadPin(AnalogPin.P1) > 930 && pins.analogReadPin(AnalogPin.P1) <= 990) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # # . #
            # . . . #
            # . . . #
            `)
    }
}
let R = 0
let tm = TM1637.create(
DigitalPin.P15,
DigitalPin.P16,
7,
4
)
tm.on()
basic.forever(function () {
    tm.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(200)
})
basic.forever(function () {
    klaw16()
})
basic.forever(function () {
	
})
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogPin.P0) + " - pokretlo    " + pins.analogReadPin(AnalogPin.P1) + " - klawiatura")
})
