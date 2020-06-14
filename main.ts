pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    button = 3
    blue()
})
pins.onPulsed(DigitalPin.P13, PulseValue.High, function () {
    button = 0
    red()
})
function green () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P8, 0)
}
pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    button = 1
    yellow()
})
input.onButtonPressed(Button.A, function () {
    list = []
    playing = 1
    while (playing == 1) {
        addBeat()
        playList()
        for (let index = 0; index <= list.length - 1; index++) {
            button = 4
            basic.pause(2000)
            if (button == list[index]) {
                if (button == 0) {
                    red()
                } else if (button == 1) {
                    yellow()
                } else if (button == 2) {
                    green()
                } else {
                    blue()
                }
            } else {
                gameOver()
                playing = 0
                break;
            }
        }
    }
})
pins.onPulsed(DigitalPin.P15, PulseValue.High, function () {
    button = 2
    green()
})
function playList () {
    for (let index = 0; index <= list.length - 1; index++) {
        note = list[index]
        if (note == 0) {
            red()
        } else if (note == 1) {
            yellow()
        } else if (note == 2) {
            green()
        } else {
            blue()
        }
        basic.pause(200)
    }
}
function gameOver () {
    while (true) {
        basic.showString("Game Over!  ")
        basic.showNumber(list.length)
    }
}
function yellow () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playTone(294, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P2, 0)
}
// List Legend:
// 0=red
// 1=yellow
// 2=green
// 3=blue
function addBeat () {
    list.push(randint(0, 3))
}
function blue () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    music.playTone(349, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P12, 0)
}
function red () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let note = 0
let playing = 0
let button = 0
let list: number[] = []
music.setVolume(255)
list = []
basic.forever(function () {
	
})
