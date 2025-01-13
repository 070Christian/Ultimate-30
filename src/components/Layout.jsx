import React from 'react';

export default function Layout(props) {
    const { children } = props;
    const header = (
        <header>
            <h1 className="text-gradient">Ultimate 30</h1>
            <p><strong>A Beginner Friendly 30 Day Workout Program</strong></p>
        </header>
    );
    const footer = (
        <footer>
            <p>Built by Christian Sanchez</p>
        </footer>
    );
    return (
        <>
            {header}
            {children}
            {footer}
        </>
    );
}