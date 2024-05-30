import { Link } from "react-router-dom";

const Header=()=>{
    return (
        
        <div className="navbar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_mLV1R0U7LZxJXac9Yv5j8Aohtk-rzZO2A&usqp=CAU"></img>
               <ul className="navitems">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">AboutUs</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                </ul> 
                </div>   
        
    );
};

export default Header;