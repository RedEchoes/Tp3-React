import React from 'react'
import {Link, IndexLink} from 'react-router'

class Header extends React.Component {
    render() {
        return (
            <header className="container">
                <div className="navbar-brand">
                    <h1>Patate Music</h1>
                </div>
                <div className="text-right">
                    <button className="btn" type="button">Déconnexion</button>
                </div>
                <nav className='nav-dark navbar-expand-md'>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <IndexLink to='/' className='nav-link' activeClassName='active'>Mon Profil</IndexLink>
                            </li>
                            <li className='nav-item'>
                                <Link to='/membres' className='nav-link' activeClassName='active'>Membres</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/albums' className='nav-link' activeClassName='active'>Albums</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </header>
        );
    }
}

export default Header