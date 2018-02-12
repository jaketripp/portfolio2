import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
const RadiumLink = Radium(Link);

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        const cardStyle = {
            color: this.state.data.style.color
        }
        const overlayStyle = {
            background: this.state.data.style.backgroundColor
        }

        const btnStyle = {
            background: this.state.data.style.backgroundColor,
            color: this.state.data.style.color,
            border: `2px solid ${this.state.data.style.color}`,

            ':hover': {
                background: this.state.data.style.color,
                color: this.state.data.style.backgroundColor
            },
        };

        return (
            <div className="card" style={cardStyle}>
                <img src={this.state.data.logo} alt={`${this.state.data.title} logo`} className="image" />
                <div className="overlay" style={overlayStyle}>
                    <h3>{this.state.data.title}</h3>
                    <div className="text">
                        <a className="card__links__button" style={btnStyle} key={this.state.data.demoURL} href={this.state.data.demoURL}>Demo</a>
                        <a className="card__links__button" style={btnStyle} key={this.state.data.githubURL} href={this.state.data.githubURL}>GitHub</a>
                        <RadiumLink className="card__links__button" style={btnStyle} to={`/about/${this.state.data.infoURLName}`}>More Info</RadiumLink>
                    </div>
                </div>
            </div>

        );
    }
};

export default Radium(Card);
