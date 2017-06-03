import React, { Component } from 'react'

class Button extends Component {

    render() {
        const label = this.props.label

        return (
            <div className="btn" onClick={this.props.onClick}>{label}</div>
        )
    }
}

export default Button
