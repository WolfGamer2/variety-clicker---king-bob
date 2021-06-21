controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (50 <= info.score()) {
        info.changeScoreBy(-50)
        power2 += 6
        game.showLongText("You bought a moderate clicker using 50 points! You have 6 extra clicks!", DialogLayout.Bottom)
    } else {
        game.showLongText("Not enough points for a moderate clicker! You need 50 points", DialogLayout.Bottom)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score()) {
        info.changeScoreBy(-10)
        power2 += 1
        game.showLongText("You bought a simple clicker using 10 points! You have 1 extra clicks.", DialogLayout.Bottom)
    } else {
        game.showLongText("Not enough points for a simple clicker! You need 10 points", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(power2)
    mySprite.startEffect(effects.spray, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (200 <= info.score()) {
        info.changeScoreBy(-200)
        power2 += 25
        game.showLongText("You bought a monster clicker using 200 points! You have 25 extra clicks!", DialogLayout.Bottom)
    } else {
        game.showLongText("Not enough points for a monster clicker! You need 200 points", DialogLayout.Bottom)
    }
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (2000 <= info.score()) {
        info.changeScoreBy(-2000)
        power2 += 300
        game.showLongText("You bought a stupendous clicker using 2000 points! You have 300 extra clicks!", DialogLayout.Bottom)
    } else {
        game.showLongText("Not enough points for a stupendous clicker! You need 2000 points", DialogLayout.Bottom)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (750 <= info.score()) {
        info.changeScoreBy(-750)
        power2 += 100
        game.showLongText("You bought a insane clicker using 750 points! You have 100 extra clicks!", DialogLayout.Bottom)
    } else {
        game.showLongText("Not enough points for a insane clicker! You need 750 points", DialogLayout.Bottom)
    }
})
let power2 = 0
let mySprite: Sprite = null
scene.setBackgroundColor(11)
info.startCountdown(60)
game.showLongText("Welcome to Variety Clicker! Press the Key Z to click or click the button A in the arcade! Also try keys: X, W, A, S, and D.", DialogLayout.Full)
mySprite = sprites.create(img`
    .........bbbbb................
    ........bb111bb...............
    .......b1111111b..............
    ......bb1111111bb....bbb......
    ...bbbbd11111111bbbbbb1bb.....
    ..bb111dd111111111111111b.....
    .bb111111111111111111111b.....
    .b1111111111111111d11111bb....
    bb111111111111111d1111111bb...
    b111111111111111d111111111bb..
    bb111111111111111d111111111bb.
    .bbb11ddd111111111d11111111bb.
    ...bbbbbd1111111111bbb11bbbb..
    .......bb11111111bbb.bbbb.....
    ........bbb11111bb............
    ..........bbbbbbb.............
    `, SpriteKind.Player)
power2 = 1
