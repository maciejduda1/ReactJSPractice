var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		picture: 'https://imgix.ranker.com/user_node_img/57/1133862/original/harry-potter-and-the-goblet-of-fire-films-photo-u6?w=650&q=50&fm=jpg&fit=fill&bg=fff'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		picture: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
	},
	{
		id: 3,
		title: 'Kontakt',
		desc: 'Film o pierwszym kontakcie z UFO',
		picture: 'https://scannersuniverse.neocities.org/poster_2.jpg'
	},
	{
		id: 4,
		title: 'Człowiek ze stali',
		desc: 'Film o Supermanie', 
		picture: 'https://upload.wikimedia.org/wikipedia/en/8/85/ManofSteelFinalPoster.jpg'
	}
];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('div', {},
			React.createElement('img', {src: movie.picture})
		)
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista Filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));