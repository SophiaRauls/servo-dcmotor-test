let Mot = 0
let Servo = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Mot != 1) {
        Mot = 1
        motors.dualMotorPower(Motor.M0, 100)
        basic.setLedColors(0x00ffff, 0x00ffff, 0x00ffff)
    } else {
        Mot = 0
        motors.dualMotorPower(Motor.M0, 0)
        basic.setLedColors(0x000000, 0x000000, 0x000000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Servo != 1) {
        Servo = 1
        pins.servoWritePin(AnalogPin.P1, 180)
    } else {
        Servo = 0
        pins.servoWritePin(AnalogPin.P1, 45)
    }
})
