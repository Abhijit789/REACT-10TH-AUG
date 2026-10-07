
function ConditionalRendering() {
    let isLogin=false;
    let user="Gangubai"
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col">
                {
                    isLogin?<h1>Welcome to Dashbord ! {user} </h1>:<h1 className="text-danger">Sorry invalid credencials!</h1>
                }
            </div>
        </div>
     </div>
    </>
  )
}

export default ConditionalRendering