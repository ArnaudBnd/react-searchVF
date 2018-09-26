import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavItem extends Component {
  render() {
    const { href, title } = this.props

    return (
      <li><Link to={href}>{title}</Link></li>
    )
  }
}

export default NavItem
