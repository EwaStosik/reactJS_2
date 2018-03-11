var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        description: 'film o czarodzieju',
        pic: 'https://i.pinimg.com/736x/c6/c4/f0/c6c4f0f99b80b495017aaae9f5bcc7ff--movie-posters-uk-halloween-movies.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        description: 'Film o królu sawanny',
        pic: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
        id: 3,
        title: 'Shrek',
        description: 'Jest to opowieść o dużym zielonym ogrze o imieniu Shrek.',
        pic: 'https://is1-ssl.mzstatic.com/image/thumb/Video62/v4/35/e8/4f/35e84fb9-ac7d-4c7c-1184-5621d407b207/source/1200x630bb.jpg'
    },
    {
        id: 4,
        title: 'Spirited Away',
        description: 'Dzielna Chihiro musi stawić czoła przeciwnościom w świecie bogów i demonów.',
        pic: 'https://s-media-cache-ak0.pinimg.com/originals/c7/0c/8a/c70c8ad640f61035c41e5d35cc5c570a.jpg'
    },
];


var Movie = React.createClass({ 
    propTypes: { 
        movie: React.PropTypes.object.isRequired,
    },


    render: function () {
        return (
           
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDescription, { description: this.props.movie.description }),
                React.createElement(MoviePicture, { img: this.props.movie.pic })
            )
        )
    },
});


var MovieTitle = React.createClass({ 
    propTypes: { 
        title: React.PropTypes.string.isRequired, 
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title) 
        
    }
})


var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.description)
    }
})


var MoviePicture = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired, 
    },
    render: function () {
        return React.createElement('img', { src: this.props.img })
    }
})


var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    
    render: function () {
        var moviesElements = this.props.movies.map(function (movie) {
            return (
                React.createElement(Movie, { movie: movie, key: movie.id })
            )
        });
        
        return (
            React.createElement('ul', {}, moviesElements) 
        )
    }
});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {movies: movies})
);

ReactDOM.render(element, document.getElementById('app')); 
