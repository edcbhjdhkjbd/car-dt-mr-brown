enum RadioMessage {
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    let item = 0
    if (item == 0) {
        pins.servoWritePin(AnalogPin.P8, 90)
        pins.servoWritePin(AnalogPin.P12, 90)
    }
    if (item == 1) {
        pins.servoWritePin(AnalogPin.P8, 180)
        pins.servoWritePin(AnalogPin.P12, 180)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
