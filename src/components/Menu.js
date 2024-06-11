import React from 'react';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

// Create a menu component with links to different pages
export default function Menu() {

    return (
        <div>
            <Stack className="menu" direction="horizontal" gap={5}>
                <nav> <Link to="/">Home</Link> </nav>
                <nav> <Link to="/products">Products</Link> </nav>
                <nav> <Link to="/about">About</Link> </nav>        
            </Stack>
        </div>
    );
}