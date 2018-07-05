const fs = require('fs')
const readWords = require('./word-reader.js')

class Game {

	static create(increment,data) {
		return new Promise((resolve, reject) => {
		var json = {
			id: increment,
        	hint: data,
        	leftAttempts: 5
		}
		

    	if(Object.keys(json).length != 0) {
    		console.log(json)
			return resolve(json)		
    	}
    	else {
    		return reject()
    	}
		})
	}	

	static save(data,json) {
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

