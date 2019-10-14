import React, {Component} from 'react'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    render() {
        return  (
            <div>
                <form onSubmit={e => this.props.handleSubmit(e) }>
                    <input type="text" onChange={this.props.handleChange} />
                    <input type="submit" value="Rechercher" />
                </form>
            </div>
    )
    }
}

export default Filter;