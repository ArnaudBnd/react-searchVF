import React, { Component } from 'react'
import { withRouter } from 'react-router'
import NavItem from './navItem'

class NavBar extends Component {
  createLinkItem(item, index) {
    return <NavItem key={item.title + index} href={item.href} title={item.title} />
  }

  render() {
    const { navData, bgColor, titleColor } = this.props
    const titleStyle = {}
    const navStyle = {
      WebkitBoxShadow: '0 0 4px rgba(0,0,0,0,4)',
      MozBoxShadow: '0 0 4px rgba(0,0,0,0,4)',
      boxShadow: '0 0 4px rgba(0,0,0,0,4)',
      borderRadius: 0
    }

    if (bgColor) {
      navStyle.background = bgColor
    }

    if (titleColor) {
      titleStyle.color = titleColor
    }

    return (
      <div>
        <nav style={navStyle} className="navbar navbar-default">
          <div className="navbar-hearder">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a style={titleStyle} className="navbar-brand" href="#">NavBar-React</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{navData.map(this.createLinkItem)}</ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(NavBar)
