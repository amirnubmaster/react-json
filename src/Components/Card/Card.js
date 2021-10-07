import Loader from "../Loader";

const Card = ({ base , route }) =>{
    return(
        <>
            <div className="row">
                {
                    base ? (
                        base.map(item => {
                            if(route === 'posts'){
                                return(
                                    <div className="col-xl-6 mt-3">
                                        <div className="card">
                                            <div className="card-header bg-dark text-light">
                                                    <h5>{item.title}</h5>
                                            </div>
                                            <div className="card-body">
                                                    <p>{item.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else if(route === 'comments'){
                                return(
                                    <div className="col-xl-6 mt-3">
                                        <div className="card">
                                            <div className="card-header bg-info text-dark">
                                                    <h5>{item.name}</h5>
                                            </div>
                                            <div className="card-body">
                                                    <h6>{item.email}</h6>
                                                    <p>{item.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else if(route === 'albums'){
                                return(
                                    <div className="col-xl-6 mt-3">
                                        <div className="card">
                                            <div style={{borderBottom: "5px solid black", boxShadow: "0 5px 10px black"}} className="card-header bg-warning text-light">
                                                    <h5>{item.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else if(route === 'photos'){
                                return(
                                    <div className="col-xl-6 mt-3">
                                        <div className="card" style={{width: "18rem"}}>
                                            <img src="{item.thumbnailUrl}" class="card-img-top" />
                                            <div className="card-body bg-danger text-light">
                                                <p className="card-text">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else if(route === 'todos'){
                                return(
                                    <div className="col-xl-6 mt-3">
                                        <div className="card">
                                            <div className="card-header bg-success text-light">
                                                    <h5>{item.title}</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>{item.completed}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else if(route === 'users'){
                                return(
                                    <div className="col-xl-6 mt-3">
                                        <div className="card border-primary bg-light" style={{width: "18rem"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">{item.name}</h4>
                                                <h5 className="card-title">{item.username}</h5>
                                                <h6 className="card-text">{item.email}</h6>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">{item.phone}</li>
                                            </ul>
                                            <div className="card-body">
                                                <a href="#" className="card-link">{item.website}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    ) : <Loader />
                }
            </div>
        </>
    )
}
export default Card;