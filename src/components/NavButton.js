import React from 'react';
import '../styles/animation.css'

function NavButton({ text, size, link, img, floating }) {
    const sizes = {
        'small': 'w-16 h-16',
        'medium': 'w-24 h-24',
        'large': 'w-32 h-32'
    };

    let selectedSize = sizes[size] ? sizes[size] : sizes['small'];

    if (floating) {
        return (
            <a href = {link ? link : null}>
                <div id={`float${text}`} className={`m-2 ${selectedSize} rounded-full bg-blue-500 inline-block hover:animate-pulse`}
                    style= {{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
                </div>
            </a>
        );
    }
    
    return (
        <a href = {link ? link : null}>
            <div className={`m-2 ${selectedSize} rounded-full bg-blue-500 inline-block hover:animate-pulse`}
                style= {{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
                <button></button>
            </div>
        </a>
    );
}

export default NavButton;