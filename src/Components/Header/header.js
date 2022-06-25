import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            </Helmet>
            <nav className="navbar navbar-expand-lg navbar-light main-header px-lg-0 px-4">
                <div className="container">
                    <Link to="/"><a className="navbar-brand" href="#">uxirl.pl</a></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto align-items-center navigation">
                            <li className="nav-item">
                                <a className="nav-link" href="#profile">Czy to dla mnie?</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/how-it-work"><a className="nav-link" href="#">Jak wygląda badanie?</a></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#price">Koszt badania</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn-blue-outline mx-3 my-md-0 my-2">Pomoc</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-blue mx-2 my-md-0 my-2">
                                    <img src="/assets/mouse_ico.svg" alt="" /> Wykonaj test UX
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}