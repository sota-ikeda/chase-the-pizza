sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    info.startCountdown(10)
})
let pizza: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e 5 f 5 5 5 5 f 5 e . . . . 
. . f 5 5 5 4 4 5 5 5 f . . f f 
. . f 4 5 5 f f 5 5 6 f . f 5 f 
. . . f 6 6 6 6 6 6 4 4 f 5 5 f 
. . . f 4 5 5 5 5 5 5 4 4 5 f . 
. . . f 5 5 5 5 5 4 5 5 f f . . 
. . . f 5 f f f 5 f f 5 f . . . 
. . . f f . . f f . . f f . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Food)
