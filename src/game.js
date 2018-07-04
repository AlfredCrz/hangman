class Game {
	constructor() {
		this.id = 0;
		this.leftAttempts = 5;
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
		return new Promise((resolve,reject) => {
			var map = new Map();
			map.set(data['id'],data);
			return resolve(console.log(map))
		})
	}
}

module.exports = Game

