import React from 'react'

function List() {
    let cardData=[
        {
            name:"gangadhar",
            age:45,
            email:"ganga@123.com"
        },{
            name:"gangubai",
            age:43,
            email:"gangu@123.com"
        },
        {
            name:"liladhar",
            age:35,
            email:"lila@123.com"
        },
        {
            name:"sudharshan",
            age:55,
            email:"sudharshan@123.com"
        }
    ]
  return (
    <> 

    <div className="conatiner">
        <div className="row">
            <div className="col">
                <ul>
                    {
                        cardData?.map(user=><li key={user.email}>{user.name}{user.age}{user.email}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default List