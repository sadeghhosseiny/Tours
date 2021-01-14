import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../logo.png'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        Active: 'tours',
        }
        
    }

    setActive = (newA) => {
              this.setState({ Active: newA });

}

    render() {


        return (
            <React.Fragment>
            
            <nav className={`navbar navbar-expand-md navbar-dark ${styles.NavBar}`}> 
                <img src={logo} alt="logo" className="navbar-brand"/>
                <button className={`navbar-toggler ${styles.TogglerIcon}`} type="button" data-toggle="collapse" data-target="#navbarLinks">
                    <span className={`navbar-toggler-icon`}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarLinks">

                <ul className="navbar-nav text-capitalize mx-auto">
                    <li className="nav-item mx-md-5 mb-2">
                    <Link to="/Home" className={`nav-link ${styles.nav} 
                    ${this.state.Active === 'home' && styles.navLink}`
                } onClick={() => this.setActive('home')}>
                        home
                    </Link>
                    </li>
                    <li className="nav-item mx-md-5 mb-2">
                    <Link to="/About" className={`nav-link ${styles.nav} 
                    ${this.state.Active === 'about' && styles.navLink}`}
                    onClick={() => this.setActive('about')}>
                        about
                    </Link>
                    </li>
                    <li className="nav-item mx-md-5">
                    <Link to="/" className={`nav-link mx-md-auto ${styles.nav} 
                    ${this.state.Active === 'tours' && styles.navLink}`}
                    onClick={() => this.setActive('tours')}>
                        tours
                    </Link>
                    </li>
                    {/* <button className={`btn btn-outline-warning ${styles.btnTest}`}>test button</button> */}
                </ul>
                
                </div>
            </nav> 
                  </React.Fragment>
        )
    }
}

export default NavBar