import React from 'react';
import Axios from "axios";

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            error: null,
            isLoaded: false
        };
    }

    async componentDidMount() {
        try {
            const res = await Axios.get('https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemon}');
            const data = res.data;
            this.setState({
                isLoaded: true,
                value: data
            })
        } catch (e) {
            this.setState({
                isLoaded: true,
                error: e
            })
        }
    }

    render(){
        const { value } = this.state;
        return (
            <div>
                <p>{value}</p>
            </div>
        );
    }
}

export default Pokemon;