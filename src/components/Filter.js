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
                    <div className="input-group mb-3">
                            <input type="text" onChange={this.props.handleChange} className="form-control"/>
                        <div className="input-group-append">
                            <input type="submit" value="Rechercher" className="btn btn-outline-secondary"/>
                        </div>
                    </div>
                </form>
            </div>
    )
    }
}

export default Filter;