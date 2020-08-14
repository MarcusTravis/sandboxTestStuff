import React from 'react'
import './style.css'
import giticon from '../../images/github-icon.png'
import linkedicon from '../../images/linkedin-icon.png'

export default function Header() {
    return (
        <div className="container-fluid bgImage containerHeight">
            <div className="row text-center">
                <div className="col">
                    <button className="bg-dark text-white rounded height h4">Projects</button>
                </div>
            </div>

            <div className="row">
                <div className="col-4 col-m-5"></div>
                <div className="col-2 col-m-1 text-center mb-5">
                    <a><img src={linkedicon} height="58px"></img></a>
                </div>
                <div className="col-2 col-m-1 text-center">
                    <a><img src={giticon} height="48px"/></a>
                </div>
                <div className="col-4 col-m-5"></div>
            </div>
        </div>
    )
}


