import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            index: "",
            img: ""
        }
    };

    componentDidMount(){
        const {name, url} = this.props;
        const index = url.split('/')[url.split('/').length - 2];
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
        this.setState({
            name: name,
            img: img,
            index: index
        });
    }

    render(){
        return (
            <div>
                <Link to={`/${this.state.name}`}>
                    <div>
                        <div>
                            <h2>{this.state.name}</h2>
                        </div>
                        <div>
                            <img src={this.state.img}/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Item