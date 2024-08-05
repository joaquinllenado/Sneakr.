import "../css/Menu.css"

function Menu({isOpen}){
    return(
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style jsx>{`
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