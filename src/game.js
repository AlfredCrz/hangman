const fs = require('fs')
const readWords = require('./word-reader.js')

class Game {
	constructor() {
		this.index = 1;
		/*Dictionary.getWord().then(word => this.word = word)*/
		/*this.word = */

	}	

	static create() {
		return new Promise((resolve, reject) => {
		var json = {
			id: 1,
        	hint: '_ _ _ _ A',
        	leftAttempts: 5
		}

    	if(Object.keys(json).length != 0) {
			return resolve(json)		
    	}
    	else {
    		return reject()
    	}
		})
	}	

	static save(data) {
		console.log(data)
		let map = new Map().set(data['id'],data)
		var myJsonString = JSON.stringify([...map]);
		fs.writeFileSync('./assets/saved-game.json',myJsonString)
	}

	static getWord() {
		return readWords({path:'./assets/es-ES.dic'})
			.then(totalWords => {
			  const index =  Math.floor(Math.random() * (totalWords.length + 1));
			  return totalWords[index];
			})
	}
}

module.exports = Game

