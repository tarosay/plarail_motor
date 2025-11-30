radio.onReceivedNumber(function (receivedNumber) {
    動く(receivedNumber, receivedNumber)
})
// タイヤの回転は、0～100% の範囲で設定します
// +が前に進む、-が後に進む
function 動く (右タイヤ: number, 左タイヤ: number) {
    if (右タイヤ >= 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 1)
        動く右 = 右タイヤ
    } else {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        動く右 = 0 - 右タイヤ
    }
    if (左タイヤ >= 0) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        動く左 = 左タイヤ
    } else {
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        動く左 = 0 - 左タイヤ
    }
    P13_PWM = 1023 * (動く左 / 100)
    if (P13_PWM > 1023) {
        P13_PWM = 1023
    }
    P16_PWM = 1023 * (動く右 / 100)
    if (P16_PWM > 1023) {
        P16_PWM = 1023
    }
    pins.analogWritePin(AnalogPin.P13, P13_PWM)
    pins.analogWritePin(AnalogPin.P16, P16_PWM)
}
let P16_PWM = 0
let P13_PWM = 0
let 動く左 = 0
let 動く右 = 0
if (input.buttonIsPressed(Button.B)) {
    basic.showArrow(ArrowNames.North)
    while (true) {
        動く(90, 90)
    }
} else if (input.buttonIsPressed(Button.A)) {
    radio.setGroup(3)
    basic.showNumber(3)
} else {
    radio.setGroup(4)
    basic.showNumber(4)
}
動く(0, 0)
