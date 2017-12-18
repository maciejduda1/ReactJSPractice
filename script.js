/*var movies = [
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
*/
var Counter = React.createClass({
	 
	 propTypes: {
	 	step: React.PropTypes.number.isRequired,
	 },

	 getInitialState: function(){
	 	return {
	 		counter: 0
	 	};
	 },
	 
	 getDefaultProps: function(){
	 	console.log('getDefaultProps użyjemy gdy przy towrzeniu instancji do klasy nie przekażemy wymaganych propsów');
	 },
	 componentWillMount: function(){
	 	console.log('componentWillMount użyjemy żeby wykonać jakąć akcję po uzyskaniu propsów, wykonaniu jakichś działań, ale przed renderowaniem elementu');
	 },
	 componentDidMount: function(){
	 	console.log('componentDidMount użyjemy by pracować na gotowym elemencie. Np. zmienić style');
	 },
	 componentWillReciveProps: function(){
	 	console.log('componentWillReciveProps użyjemy do zmiany elementu na skutek przyjścia nowych propsów');
	 },
	 shouldComponentUpdate: function(){
	 	console.log('shouldComponentUpdate użyjemy do sprawdzenia czy dany element powinien być przerenderowany');
	 	return true;
	 },
	 componentWillUpdate: function(){
	 	console.log('componentWillUpdate można użyć do wykonania z wyprzedzeniem obliczeń przy ponownym renderowaniu elementu (taki pomysł mój :))');
	 },
	 componentDidUpdate: function(){
	 	console.log('componentDidUpdate: Po przerenderowaniu elementu można manipulować drzewem DOM');
	 },
	 componentWillUnmount: function(){
	 	console.log('componentWillUnmount użyjemy do zmian w drzewie DOM po usunięciu danego elementu');
	 },
	 increment: function(){
	 	this.setState({
	 		counter: this.state.counter + this.props.step
	 	});
	 },
	 decrement: function(){
	 	this.setState({
	 		counter: this.state.counter - this.props.step
	 	});
	 },
	 render: function(){
	 	return React.createElement('div', {},
	 		React.createElement('button', {onClick: this.decrement}, 'Odejmowanie'),
	 		React.createElement('span', {className: 'nomberCounter'}, 'Licznik ' + this.state.counter),
	 		React.createElement('button', {onClick: this.increment}, 'Dodawanie'),
	 	);
	} 
});
var CounterList = React.createClass({
	render: function(){
		return (
			React.createElement('div', {},
				React.createElement(Counter,{step: 5}),
				React.createElement(Counter,{step: 1}),
			)		
		);
	}
});
/*
var Counter2 = React.createClass({
	getInitialState: function(){
		return {
			counter: 10
		};
	},
	increment: function(){
		this.setState({
			counter: this.state.counter + 5
		});
	},
	decrement: function(){
		this.setState({
			counter: this.state.counter - 5
		});
	},
	render: function(){
	 	return React.createElement('div', {},
	 		React.createElement('button', {onClick: this.decrement}, 'Odejmowanie'),
	 		React.createElement('span', {className: 'nomberCounter'}, 'Licznik ' + this.state.counter),
	 		React.createElement('button', {onClick: this.increment}, 'Dodawanie')
	 	);
	}
});
*/

//var element = React.createElement(Counter,{step: 5});
//var element2 = React.createElement(Counter,{step: 1});
var counterList = React.createElement(CounterList);

//ReactDOM.render(element, document.getElementById('app'));
//ReactDOM.render(element2, document.getElementById('app2'));
ReactDOM.render(counterList, document.getElementById('app'));

document.getElementsByClassName('nomberCounter')[0].style.margin = '20px';
document.getElementsByClassName('nomberCounter')[1].style.margin = '20px';

