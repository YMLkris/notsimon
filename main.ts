control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    button = 1
    yellow()
    waiting = 0
    basic.pause(200)
})
function green () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    music.playTone(330, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P8, 0)
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    button = 0
    red()
    waiting = 0
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    list = []
    playing = 1
    while (playing == 1) {
        addBeat()
        playList()
        for (let index = 0; index <= list.length - 1; index++) {
            waiting = 1
            while (waiting == 1) {
                basic.pause(20)
            }
            if (button != list[index]) {
                gameOver()
                playing = 0
            }
            basic.pause(500)
        }
        basic.pause(1000)
    }
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
        basic.pause(1000)
    }
}
function gameOver () {
    while (true) {
        basic.showString("Game Over!")
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
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    button = 2
    green()
    waiting = 0
    basic.pause(200)
})
function red () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P1, 0)
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    button = 3
    blue()
    waiting = 0
    basic.pause(200)
})
let note = 0
let playing = 0
let waiting = 0
let button = 0
let list: number[] = []
music.setVolume(255)
music.setTempo(60)
list = []
pins.setEvents(DigitalPin.P13, PinEventType.Edge)
pins.setEvents(DigitalPin.P14, PinEventType.Edge)
pins.setEvents(DigitalPin.P15, PinEventType.Edge)
pins.setEvents(DigitalPin.P16, PinEventType.Edge)
basic.forever(function () {
	
})
