import Button from "./Button"
import Card from "./Card";
import Input from "./Input"

function Menu() {
    function handleChange(){
        console.log("function called");
        
    }

    let cardData=[
  {
    imglink: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Priya Patel",
    email: "priya.patel@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Amit Verma",
    email: "amit.verma@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Sneha Deshmukh",
    email: "sneha.deshmukh@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Neha Joshi",
    email: "neha.joshi@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Vikram Singh",
    email: "vikram.singh@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Ananya Kulkarni",
    email: "ananya.kulkarni@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Pooja Shah",
    email: "pooja.shah@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Aditya Pawar",
    email: "aditya.pawar@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Kavya Reddy",
    email: "kavya.reddy@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Siddharth Rao",
    email: "siddharth.rao@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Meera Nair",
    email: "meera.nair@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Arjun Gupta",
    email: "arjun.gupta@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Isha Kapoor",
    email: "isha.kapoor@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Manish Yadav",
    email: "manish.yadav@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Riya Choudhary",
    email: "riya.choudhary@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Nikhil Joshi",
    email: "nikhil.joshi@example.com"
  },
  {
    imglink: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Aarohi Mishra",
    email: "aarohi.mishra@example.com"
  }
];
  return (
    <>
     <main>
        <header>
            <nav>
                <div className="row">
                    <div className="col">
                        <Button className="btn btn-primary" id="btn" buttonText="Submit"/>
                        <Button className="btn btn-warning" id="btn" buttonText="Reset"/>
                        <Input className={"form-control w-50 m-3"} id="name" type="password" handleChange={handleChange} placeholder="write your password" />
                        <i className="fa fa-home"/>
                  

                    </div>
                </div>
                <div className="row d-flex gap-3 justify-content-around">
                    
                    {
                        cardData?.map(user=>{
                            return <div className="col-3">
                                <Card user={user}/>
                            </div>
                        })
                    }
                </div>
            </nav>
        </header>
     </main>
    </>
  )
}

export default Menu