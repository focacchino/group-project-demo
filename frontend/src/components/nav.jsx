function NavBar () {
    return (
        <div className="nav-header">
            <div className="nav-logo">
                <img src={URL('/logo.png')} alt="logo" className="nav-logo"/>
            </div>
            <div className="nav-links">
                <a href="" className="nav-link" id="products"></a>
                <a href="" className="nav-link" id="login"></a>
                <a href="" className="nav-link" id="register"></a>
                <a href="" className="nav-link" id="cart"></a>
            </div>
        </div>
    )
}