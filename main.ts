input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Sad)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
