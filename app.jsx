import './style/skin.css'

import ReactDOM from 'react-dom';
import React    from 'react';
import auth     from './auth.js'


var TicketInspector = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="ticket-id">Nr biletu</label>
                <input id="ticket-id" type="text" ref="ticketId" defaultValue=""></input>
                <input type="submit" value="Sprawdź"/>
            </form>
        )
    },
    handleSubmit : function( event ){
        event.preventDefault();
        this.validateTicket();
    },
    validateTicket : function(){
        var ticketId =  ReactDOM.findDOMNode(this.refs.ticketId).value;
        console.log(ticketId);
    }
});


var Login = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="login">Login</label>
                    <input id="login" type="text" ref="login" defaultValue=""></input>
                </p>
                <p>
                    <label htmlFor="password">Hasło</label>
                    <input id="password" type="password" ref="password" defaultValue=""></input>
                </p>
                <p>
                    <input type="submit" value="Zaloguj"/>
                </p>

            </form>
        )
    },
    handleSubmit : function( event ){
        event.preventDefault();
        this.login();
    },
    login : function(){
        var login    =  ReactDOM.findDOMNode(this.refs.login).value;
        var password =  ReactDOM.findDOMNode(this.refs.password).value;
        console.log(login,password);
    }
});


var Application = React.createClass({
    getInitialState() {
        return {
            loggedIn: auth.isLogged()
        }
    },

    render(){
        { !this.state.loggedIn ? (
                React.createElement(Login)
            ) :
            (
                'costam'
            )
        }

    }
});

ReactDOM.render(
    React.createElement(Application),
    document.getElementById('main')
);

console.log('jestem');
