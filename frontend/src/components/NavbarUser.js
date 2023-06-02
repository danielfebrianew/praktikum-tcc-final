import React from 'react'
import { Link } from 'react-router-dom'

const NavbarUser = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <p class="navbar-item" href="https://bulma.io">
            <strong>Daftar Member Cloudmart</strong>
            
            </p>

        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <Link to={`/`} class="button is-primary">
                    Supplier
                </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavbarUser