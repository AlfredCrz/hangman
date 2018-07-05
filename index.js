const express = require('express')
const app = express()
const Dictionary = require('./src/dictionary.js')
const Game = require('./src/game.js')

Dictionary.getWord().then(word => console.log('word: ', word))

/*var Game = new Gam();*/

app.get('/game', (req, res) => {
    Game.create()
        .then(game => {
            res.send(game)  
            Game.save(game)          
        })
        .catch(err => {
            res.status(500).send({
                error: 'Game could not be created'
            })
        })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})


/*app.get('/game', (req, res) => {
    res.send({
        id: 1,
        hint: '_ _ _ _ A',
        leftAttempts: 5,
        image: `
 |_____________
 |            | 
 |           ( )
 |            |
 |           /|\\
 |          / | \\
 |            |
 |           / \\
 |          /   \\
 |         /     \\
 |
`
    })
})*/