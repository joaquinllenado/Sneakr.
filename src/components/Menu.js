function Menu({isOpen}){
    return(
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style jsx>{`
                .hamburger{
                    padding-left: 5px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    cursor: pointer;
                }

                .burger{
                    width: 40px;
                    height: 3px;
                    border-radius: 50px;
                    background-color: black;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }

                .burger1{
                    transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    opacity: ${isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
            `}</style>
        </>
    )
}

export default Menu;