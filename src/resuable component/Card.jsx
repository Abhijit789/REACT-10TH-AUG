
function Card({user}) {
    console.log(user);
    let{imglink,name,email}=user
  return (
    <> 
     <div className="card">

        <div className="card-body">
            <div className="col-4">
                <div className="card-img-top">
                <img src={imglink} className="rounded-1" alt="img not found" />
            </div>
            </div>
            <div className="col-7">
                <p className='card-text'>Name : {name}</p>
                <p className='card-text'>Email: {email}</p>
            </div>
        </div>
        <div className="card-footer">
            @copyright 2026
        </div>
     </div>
    </>
  )
}

export default Card