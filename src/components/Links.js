import '../App.css';
import { useEffect } from 'react';

function Links({ onButtonClick }) {
    useEffect(() => {
        const linkButton = document.querySelector(".linkButton");
        if (!linkButton) {
            console.error("Link Button Not Found");
            return;
        }

        const handleClick = () => {
            linkButton.classList.toggle('clicked');
            onButtonClick();
        }

        linkButton.addEventListener('click', handleClick);
        
        return () => {
            linkButton.removeEventListener('click', handleClick);
        };

    }, [onButtonClick]);

    return(
        <div className="linkContainer">
            <div className="linkButton">
            </div>
        </div>
    );

}

export default Links;