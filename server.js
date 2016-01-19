var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var styles = fs.readFileSync('styles.css');
var msFlixApp = fs.readFileSync('msFlixApp.js');

http.createServer(function (req, res) {
	switch(req.url) {
		
		case '/index.html': {
			res.writeHead(200, {'Content-Type': 'text/html'});
  			res.end(index);
  			break;
		}
		case '/styles.css': {
			res.writeHead(200, {'Content-Type': 'text/css'});
  			res.end(styles);
  			break;
		}
		case '/msFlixApp.js': {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
  			res.end(msFlixApp);
  			break;
		}
		default: {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(DATA));
			break;
		}
	}
}).listen(3000);

var DATA = [{
	genre: 'Trending Now',
	movies: [{
		title: 'Archer',
		img_url: 'http://cdn1.nflximg.net/webp/9823/21439823.webp'
	}, {
		title: 'The Office',
		img_url: 'http://cdn1.nflximg.net/webp/0207/8390207.webp'
	}, {
		title: 'Star Trek the Next Generation',
		img_url: 'http://cdn1.nflximg.net/webp/6325/8956325.webp'
	}, {
		title: 'her',
		img_url: 'http://cdn0.nflximg.net/webp/4738/21654738.webp'
	}, {
		title: 'House',
		img_url: 'http://cdn1.nflximg.net/webp/0111/8380111.webp'
	}, {
		title: '3rd Rock from the Sun',
		img_url: 'http://cdn1.nflximg.net/webp/6867/12056867.webp'
	}, {
		title: 'Gilmore Girls',
		img_url: 'http://cdn0.nflximg.net/webp/7478/11317478.webp'
	}, {
		title: 'Gotham',
		img_url: 'http://cdn1.nflximg.net/webp/0097/21500097.webp'
	}]
}, {
	genre: 'Comedies',
	movies: [{
		title: 'The Grand Budapest',
		img_url: 'http://cdn0.nflximg.net/webp/6174/11626174.webp'
	}, {
		title: 'Kung Fury',
		img_url: 'http://cdn0.nflximg.net/webp/4714/22964714.webp'
	}, {
		title: 'Birdman',
		img_url: 'http://cdn0.nflximg.net/webp/0840/21900840.webp'
	}, {
		title: 'The Big Lebowski',
		img_url: 'http://cdn0.nflximg.net/webp/0932/8140932.webp'
	}, {
		title: 'Trailer Park Boys',
		img_url: 'http://cdn1.nflximg.net/webp/6201/8716201.webp'
	}, {
		title: '21 Jump Street',
		img_url: 'http://cdn0.nflximg.net/webp/5318/8755318.webp'
	}]
}, {
	genre: 'Sci-Fi',
	movies: [{
		title: '12 Monkeys',
		img_url: 'http://cdn1.nflximg.net/webp/9421/8929421.webp'
	}, {
		title: 'Interstellar',
		img_url: 'http://cdn0.nflximg.net/webp/0924/22330924.webp'
	}, {
		title: 'Gravity',
		img_url: 'http://cdn1.nflximg.net/webp/5489/22815489.webp'
	}, {
		title: 'Elysium',
		img_url: 'http://cdn1.nflximg.net/webp/1335/21041335.webp'
	}, {
		title: 'Matrix Reloaded',
		img_url: 'http://cdn0.nflximg.net/webp/3198/8623198.webp'
	}, {
		title: 'Star Trek First Contact',
		img_url: 'http://cdn0.nflximg.net/webp/6088/24636088.webp'
	}, {
		title: 'Terminator',
		img_url: 'http://cdn1.nflximg.net/webp/4287/8404287.webp'
	}, {
		title: 'I am Legend',
		img_url: 'http://cdn0.nflximg.net/webp/1272/8091272.webp'
	}]
}, {
	genre: 'Action & Adventure',
	movies: [{
		title: 'The Beach',
		img_url: 'http://cdn1.nflximg.net/webp/2869/8632869.webp'
	}, {
		title: 'V for Vendetta',
		img_url: 'http://cdn0.nflximg.net/webp/5090/22935090.webp'
	}, {
		title: 'Sherlock Holmes',
		img_url: 'http://cdn1.nflximg.net/webp/0921/8210921.webp'
	}, {
		title: 'Inside Man',
		img_url: 'http://cdn0.nflximg.net/webp/9008/9089008.webp'
	}, {
		title: 'Avengers Age of Ultron',
		img_url: 'http://cdn1.nflximg.net/webp/9345/23449345.webp'
	}, {
		title: 'Django Unchained',
		img_url: 'http://cdn0.nflximg.net/webp/7532/12167532.webp'
	}, {
		title: 'Public Enemies',
		img_url: 'http://cdn1.nflximg.net/webp/1769/12071769.webp'
	}]
}, {
	genre: 'Documentaries',
	movies: [{
		title: 'Making a Murderer',
		img_url: 'http://cdn0.nflximg.net/images/5786/23715786.jpg'
	}, {
		title: 'Life',
		img_url: 'http://cdn0.nflximg.net/webp/9942/23079942.webp'
	}, {
		title: 'Cosmos a Spacetime Odysey',
		img_url: 'http://cdn1.nflximg.net/webp/2669/9972669.webp'
	}, {
		title: 'Cowspiracy',
		img_url: 'http://cdn1.nflximg.net/webp/9417/13039417.webp'
	}, {
		title: 'Wildest Arctic',
		img_url: 'http://cdn1.nflximg.net/webp/0041/10830041.webp'
	}, {
		title: 'Back in Time',
		img_url: 'http://cdn0.nflximg.net/webp/7566/22827566.webp'
	}]
}];