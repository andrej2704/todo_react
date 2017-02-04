import React, {Component} from 'react'

export class Link extends Component {
    handleClick = (event) => {
        event.preventDefault()
        history.pushState(null, '', this.props.to)
    }
    render() {
        return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
    }
}

Link.protoTypes = {
    to: React.PropTypes.string.isRequired
}

