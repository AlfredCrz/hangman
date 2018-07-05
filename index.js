const express = require('express')
const app = express()
const Dictionary = require('./src/dictionary.js')
const Game = require('./src/game.js')
let data = require('./assets/saved-game.json')
console.log(data)

let word;
let increment = 0;

app.get('/game', (req, res) => {
    increment++;
    Dictionary.getWord().then(data =>word = data)
    Game.create(increment, word)
        .then(game => {
            res.send(game)  
            Game.save(game,data)          
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