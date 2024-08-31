// Breadcrumb.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './Breadcrumb.css';

const Breadcrumb = ({ category, product }) => {
    const location = useLocation();

    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav className="breadcrumb">
            <Link to="/">Home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                if (index === pathnames.length - 1) {
                    return (
                        <span key={to}>
                            {' > '}
                            {product || value}
                        </span>
                    );
                } else {
                    // Link for intermediate breadcrumbs
                    return (
                        <span key={to}>
                            {' > '}
                            <Link to={to}>{category || value}</Link>
                        </span>
                    );
                }
            })}
        </nav>
    );
};

export default Breadcrumb;
