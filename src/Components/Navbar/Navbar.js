import { useEffect, useState } from "react";
import { getBase } from "../../API/index";
import Card from "../Card/Card";
import { Navlist } from "./../../Utils/Navlist";


const Navbar = () =>{

    const [state , setState] = useState('Posts')
    const [route , setRoute] = useState('posts')
    const [base , setBase] = useState(null)

        
    useEffect(() =>{
        getBase(route)
        .then(res => res.json())
        .then(r => setBase(r))
    } , [route])


    return(
        <>
            <div className="navbar navbar-expand-lg bg-danger navbar-dark">
                <div className="container">
                    <a className="navbar-brand">React Jsonplaceholder</a>
                    
                    <ul className="navbar-nav">
                        {
                            Navlist.map(item =>(
                                <li className="nav-item"key={item.id}>
                                    <a
                                        href="#" 
                                        className="nav-link" 
                                        onClick={() => {
                                            setState(item.title)
                                            setRoute(item.route)
                                        }}
                                        >
                                        {item.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="container mt-5">
                <h2>/{state}</h2>
                <hr />
            </div>

            <div className="container mt-5">
                <Card base={base}  route={route}/>
            </div>
        </>
    )
}

export default Navbar;