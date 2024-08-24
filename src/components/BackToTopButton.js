import { useState, useEffect } from 'react';

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className="backToTop">
                    ^
                </button>
            )}
            
            <style jsx>{`
                .backToTop {
                    position: fixed;
                    bottom: 150px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    background-color: lightgray;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                .backToTop:hover {
                    background-color: cornflowerblue;
                    transform: translateY(-3px);
                }
            `}</style>
        </>
    );
}

export default BackToTopButton;