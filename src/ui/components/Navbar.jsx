import { Link, NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/login', )
    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Asociaciones</Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-primary">
                            Ariel
                        </span>
                        <button 
                            className="nav-item nav-link btn"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>               

            </div>
        </nav>
    </>)
}