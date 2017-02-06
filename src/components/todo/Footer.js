import React from 'react'
import {Link} from '../router'

export const Footer = () => {
    return (
        <div className="Footer">
            <Link to="/">All</Link>
            <Link to="/active">Active</Link>
            <Link to="/complete">Complete</Link>
        </div>
        <a class="netlify" href="https://www.netlify.com">
             <img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
        </a>
    )
}
