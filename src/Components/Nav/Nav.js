import React from 'react'

export default function Nav()   {
    return( 
        <section id="navbar">
            <a class="menu-toggle rounded" href="page-top"><i class="fas fa-bars"></i></a>
            <nav id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand"><a href="#page-top">mkdyrndahl</a></li>
                    <li class="sidebar-nav-item"><a href="#page-top">Home</a></li>
                    <li class="sidebar-nav-item"><a href="#about">About</a></li>
                    <li class="sidebar-nav-item"><a href="#services">Services</a></li>
                    <li class="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li>
                    <li class="sidebar-nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}