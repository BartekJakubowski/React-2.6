var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
	},
	
	increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
	},
	
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		})
	},

    getDefaultProps: function() {
        console.log('getDefaultProps - setting default values for properties');
    },

    getInitialState: function() {
        console.log('getInitialState setting initial state of component');
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('componentWillMount - component is ready to be rendered');
    },

    componentDidMount: function() {
        console.log('componentDidMount - component was rendered');
    },

    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps - properties will be changed');
    },

    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate - checking if render is needed');
        return true;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate - preparing component to be rerendered');
    },

    componentDidUpdate : function() {
        console.log('componentDidUpdate - component was rerendered');
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount - component will be removed');
    },
    
        render: function() {
			return (React.createElement('div', {className: 'row'},			
                        React.createElement('li', {onClick: this.increment}, 
                        React.createElement('button', {}, 'Dodaj: ' + this.state.counter)),
						React.createElement('li', {onClick: this.decrement}, 
						React.createElement('button', {}, 'Odejmij: ' + this.state.counter)),
            ))
    	}    
}); 

var elements = React.createClass({
    render: function () {
        return (
            React.createElement('div', {},
				React.createElement('h1', {}, 'Liczniki: '),
                	React.createElement(Counter),
					React.createElement(Counter),
        )      
    )}
});

var element = React.createElement(elements);
ReactDOM.render(element, document.getElementById('app'));