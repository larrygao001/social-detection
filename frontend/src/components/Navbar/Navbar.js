import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication';
import { withRouter } from 'react-router-dom';
import "./navbar.scss";

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        // eslint-disable-next-line no-lone-blocks

        const authLinks = (
            <div className="navbar-nav ml-auto"style={{fontSize:"20px", paddingTop:"5px"}}>
                    {/* <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} /> */}
                
                <p>Welcome, {user.name}! </p>
                <a id="logout" href=""  onClick={this.onLogout.bind(this)} >Logout</a>   
            </div> 
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" id="register" to="/register">Sign Up</Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/"><img id="logo" src={require("../../assets/iconfinder_SEO_search_969259.png")} alt="logo"/></a>
                <Link className="navbar-brand nav-text" to="/">Social Detector</Link>

                {isAuthenticated&&<Link className="search" to="/search">Search</Link>}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));