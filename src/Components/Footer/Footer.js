import React from 'react'
import Logo from "../../assets/footer_logo.png";

export const Footer = () => {
    return (
        <>
            <footer className="bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h6>Made with love by</h6>
                            <img src={Logo} alt="" />
                            <ul className="d-md-flex ml-0 pl-0 mt-4 mb-0 align-items-center navigation justify-content-center list-unstyled">
                                <li className="nav-item font-weight-normal">©2021 UXirl. All rights reserved</li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link font-weight-normal">Privacy</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link font-weight-normal">Terms of Service</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link font-weight-normal">Security</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}