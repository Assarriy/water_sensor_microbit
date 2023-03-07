basic.forever(function () {
    serial.writeValue("Level", pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P2) >= 500) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(1)
        music.setVolume(255)
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showNumber(0)
})
