import "./list.css"
function ListRendering() {
    let listElement = ["Element One", "Element Two", "Element Three", "Element Four", "Element Five", "Element Six", "Element Seven", "Element Eight", "Element Nine",];
    const cardData = [
        {
            id: 1,
            title: "Wireless Headphones",
            description: "Premium wireless headphones with noise cancellation.",
            image: "https://picsum.photos/300/200?random=1",
            category: "Electronics",
            price: 2999,
            rating: 4.5
        },
        {
            id: 2,
            title: "Smart Watch",
            description: "Track your fitness, heart rate, and daily activities.",
            image: "https://picsum.photos/300/200?random=2",
            category: "Wearables",
            price: 4999,
            rating: 4.3
        },
        {
            id: 3,
            title: "Bluetooth Speaker",
            description: "Portable speaker with powerful bass and clear sound.",
            image: "https://picsum.photos/300/200?random=3",
            category: "Electronics",
            price: 1999,
            rating: 4.4
        },
        {
            id: 4,
            title: "Laptop Backpack",
            description: "Water-resistant backpack suitable for laptops and travel.",
            image: "https://picsum.photos/300/200?random=4",
            category: "Bags",
            price: 1499,
            rating: 4.2
        },
        {
            id: 5,
            title: "Running Shoes",
            description: "Lightweight running shoes designed for daily workouts.",
            image: "https://picsum.photos/300/200?random=5",
            category: "Footwear",
            price: 2499,
            rating: 4.6
        },
        {
            id: 6,
            title: "Coffee Maker",
            description: "Automatic coffee maker for fresh coffee at home.",
            image: "https://picsum.photos/300/200?random=6",
            category: "Kitchen",
            price: 3499,
            rating: 4.1
        },
        {
            id: 7,
            title: "Mechanical Keyboard",
            description: "RGB mechanical keyboard with responsive switches.",
            image: "https://picsum.photos/300/200?random=7",
            category: "Computer Accessories",
            price: 2799,
            rating: 4.7
        },
        {
            id: 8,
            title: "Gaming Mouse",
            description: "High precision gaming mouse with customizable buttons.",
            image: "https://picsum.photos/300/200?random=8",
            category: "Computer Accessories",
            price: 1299,
            rating: 4.5
        },
        {
            id: 9,
            title: "Smartphone Stand",
            description: "Adjustable stand for smartphones and tablets.",
            image: "https://picsum.photos/300/200?random=9",
            category: "Accessories",
            price: 599,
            rating: 4.0
        },
        {
            id: 10,
            title: "Travel Water Bottle",
            description: "Stainless steel insulated water bottle.",
            image: "https://picsum.photos/300/200?random=10",
            category: "Travel",
            price: 799,
            rating: 4.4
        },
        {
            id: 11,
            title: "Leather Wallet",
            description: "Classic leather wallet with multiple card slots.",
            image: "https://picsum.photos/300/200?random=11",
            category: "Fashion",
            price: 999,
            rating: 4.3
        },
        {
            id: 12,
            title: "Sunglasses",
            description: "Stylish UV-protected sunglasses for everyday use.",
            image: "https://picsum.photos/300/200?random=12",
            category: "Fashion",
            price: 1199,
            rating: 4.2
        },
        {
            id: 13,
            title: "Desk Lamp",
            description: "LED desk lamp with adjustable brightness levels.",
            image: "https://picsum.photos/300/200?random=13",
            category: "Home",
            price: 899,
            rating: 4.5
        },
        {
            id: 14,
            title: "Office Chair",
            description: "Ergonomic office chair with adjustable height.",
            image: "https://picsum.photos/300/200?random=14",
            category: "Furniture",
            price: 7999,
            rating: 4.6
        },
        {
            id: 15,
            title: "Yoga Mat",
            description: "Non-slip yoga mat suitable for home workouts.",
            image: "https://picsum.photos/300/200?random=15",
            category: "Fitness",
            price: 899,
            rating: 4.4
        },
        {
            id: 16,
            title: "Dumbbell Set",
            description: "Adjustable dumbbell set for strength training.",
            image: "https://picsum.photos/300/200?random=16",
            category: "Fitness",
            price: 2999,
            rating: 4.5
        },
        {
            id: 17,
            title: "Backpack",
            description: "Spacious everyday backpack with multiple compartments.",
            image: "https://picsum.photos/300/200?random=17",
            category: "Bags",
            price: 1299,
            rating: 4.1
        },
        {
            id: 18,
            title: "Cotton T-Shirt",
            description: "Comfortable premium cotton t-shirt.",
            image: "https://picsum.photos/300/200?random=18",
            category: "Clothing",
            price: 699,
            rating: 4.2
        },
        {
            id: 19,
            title: "Denim Jacket",
            description: "Classic denim jacket suitable for casual outfits.",
            image: "https://picsum.photos/300/200?random=19",
            category: "Clothing",
            price: 1999,
            rating: 4.3
        },
        {
            id: 20,
            title: "Sneakers",
            description: "Casual sneakers with a comfortable sole.",
            image: "https://picsum.photos/300/200?random=20",
            category: "Footwear",
            price: 2299,
            rating: 4.5
        },
        {
            id: 21,
            title: "Air Purifier",
            description: "Compact air purifier with multi-stage filtration.",
            image: "https://picsum.photos/300/200?random=21",
            category: "Home Appliances",
            price: 5999,
            rating: 4.4
        },
        {
            id: 22,
            title: "Electric Kettle",
            description: "Fast boiling electric kettle with auto shut-off.",
            image: "https://picsum.photos/300/200?random=22",
            category: "Kitchen",
            price: 1299,
            rating: 4.3
        },
        {
            id: 23,
            title: "Table Fan",
            description: "Compact fan with multiple speed settings.",
            image: "https://picsum.photos/300/200?random=23",
            category: "Home Appliances",
            price: 1599,
            rating: 4.1
        },
        {
            id: 24,
            title: "Power Bank",
            description: "10000mAh fast charging portable power bank.",
            image: "https://picsum.photos/300/200?random=24",
            category: "Electronics",
            price: 1099,
            rating: 4.5
        },
        {
            id: 25,
            title: "USB-C Hub",
            description: "Multi-port USB-C hub for laptops and tablets.",
            image: "https://picsum.photos/300/200?random=25",
            category: "Computer Accessories",
            price: 1499,
            rating: 4.4
        },
        {
            id: 26,
            title: "Webcam",
            description: "Full HD webcam suitable for meetings and streaming.",
            image: "https://picsum.photos/300/200?random=26",
            category: "Computer Accessories",
            price: 1899,
            rating: 4.3
        },
        {
            id: 27,
            title: "Monitor Stand",
            description: "Adjustable monitor stand with storage space.",
            image: "https://picsum.photos/300/200?random=27",
            category: "Office",
            price: 999,
            rating: 4.2
        },
        {
            id: 28,
            title: "Notebook",
            description: "Premium ruled notebook for notes and planning.",
            image: "https://picsum.photos/300/200?random=28",
            category: "Stationery",
            price: 299,
            rating: 4.6
        },
        {
            id: 29,
            title: "Desk Organizer",
            description: "Keep your workspace clean and organized.",
            image: "https://picsum.photos/300/200?random=29",
            category: "Office",
            price: 499,
            rating: 4.1
        },
        {
            id: 30,
            title: "Back Support Cushion",
            description: "Ergonomic cushion for better sitting posture.",
            image: "https://picsum.photos/300/200?random=30",
            category: "Office",
            price: 799,
            rating: 4.3
        },
        {
            id: 31,
            title: "Travel Pillow",
            description: "Memory foam pillow for comfortable travel.",
            image: "https://picsum.photos/300/200?random=31",
            category: "Travel",
            price: 699,
            rating: 4.4
        },
        {
            id: 32,
            title: "Luggage Bag",
            description: "Durable lightweight luggage bag for travel.",
            image: "https://picsum.photos/300/200?random=32",
            category: "Travel",
            price: 3999,
            rating: 4.5
        },
        {
            id: 33,
            title: "Camera Tripod",
            description: "Adjustable tripod for cameras and smartphones.",
            image: "https://picsum.photos/300/200?random=33",
            category: "Photography",
            price: 1599,
            rating: 4.2
        },
        {
            id: 34,
            title: "LED Ring Light",
            description: "Adjustable LED ring light for content creators.",
            image: "https://picsum.photos/300/200?random=34",
            category: "Photography",
            price: 1299,
            rating: 4.6
        },
        {
            id: 35,
            title: "Wireless Charger",
            description: "Fast wireless charging pad for compatible devices.",
            image: "https://picsum.photos/300/200?random=35",
            category: "Electronics",
            price: 999,
            rating: 4.3
        },
        {
            id: 36,
            title: "Smart LED Bulb",
            description: "Wi-Fi enabled smart bulb with multiple colors.",
            image: "https://picsum.photos/300/200?random=36",
            category: "Smart Home",
            price: 699,
            rating: 4.4
        },
        {
            id: 37,
            title: "Smart Plug",
            description: "Control your appliances remotely using your phone.",
            image: "https://picsum.photos/300/200?random=37",
            category: "Smart Home",
            price: 799,
            rating: 4.2
        },
        {
            id: 38,
            title: "Air Fryer",
            description: "Healthy cooking with less oil using hot air technology.",
            image: "https://picsum.photos/300/200?random=38",
            category: "Kitchen",
            price: 4999,
            rating: 4.6
        },
        {
            id: 39,
            title: "Mixer Grinder",
            description: "Powerful mixer grinder for everyday kitchen needs.",
            image: "https://picsum.photos/300/200?random=39",
            category: "Kitchen",
            price: 2799,
            rating: 4.3
        },
        {
            id: 40,
            title: "Non-Stick Pan",
            description: "Durable non-stick pan for everyday cooking.",
            image: "https://picsum.photos/300/200?random=40",
            category: "Kitchen",
            price: 899,
            rating: 4.5
        },
        {
            id: 41,
            title: "Bluetooth Earbuds",
            description: "Compact earbuds with clear audio and long battery life.",
            image: "https://picsum.photos/300/200?random=41",
            category: "Electronics",
            price: 1799,
            rating: 4.4
        },
        {
            id: 42,
            title: "Tablet",
            description: "Lightweight tablet for entertainment and productivity.",
            image: "https://picsum.photos/300/200?random=42",
            category: "Electronics",
            price: 14999,
            rating: 4.5
        },
        {
            id: 43,
            title: "Laptop",
            description: "Powerful laptop suitable for work and entertainment.",
            image: "https://picsum.photos/300/200?random=43",
            category: "Computers",
            price: 54999,
            rating: 4.7
        },
        {
            id: 44,
            title: "Gaming Headset",
            description: "Immersive gaming headset with a built-in microphone.",
            image: "https://picsum.photos/300/200?random=44",
            category: "Gaming",
            price: 2499,
            rating: 4.5
        },
        {
            id: 45,
            title: "Gaming Controller",
            description: "Wireless controller compatible with multiple platforms.",
            image: "https://picsum.photos/300/200?random=45",
            category: "Gaming",
            price: 2199,
            rating: 4.3
        },
        {
            id: 46,
            title: "Desk Mat",
            description: "Large desk mat suitable for keyboard and mouse.",
            image: "https://picsum.photos/300/200?random=46",
            category: "Office",
            price: 699,
            rating: 4.4
        },
        {
            id: 47,
            title: "Fitness Tracker",
            description: "Track steps, workouts, sleep, and daily activity.",
            image: "https://picsum.photos/300/200?random=47",
            category: "Fitness",
            price: 2499,
            rating: 4.2
        },
        {
            id: 48,
            title: "Resistance Bands",
            description: "Set of resistance bands for home workouts.",
            image: "https://picsum.photos/300/200?random=48",
            category: "Fitness",
            price: 599,
            rating: 4.5
        },
        {
            id: 49,
            title: "Plant Pot",
            description: "Modern decorative pot for indoor plants.",
            image: "https://picsum.photos/300/200?random=49",
            category: "Home Decor",
            price: 499,
            rating: 4.3
        },
        {
            id: 50,
            title: "Wall Clock",
            description: "Modern minimalist wall clock for home and office.",
            image: "https://picsum.photos/300/200?random=50",
            category: "Home Decor",
            price: 899,
            rating: 4.4
        }
    ];
    return (
        <div>
            {/* <div className="container bg-dark text-center text-light">Hello This container</div> */}
            {/* <ul>        
        {
            listElement?.map(cEle=><li>{cEle}</li>)
        }
        </ul> */}
            <div className="row my-4 d-flex flex-wrap justify-content-around gap-2">
                 {
                    cardData.map(card=>{
                        return (
                             <div className="col-5" key={card.id}>
                    <div className="card">
                        <div className="card-header">
                             <div className="card-title">
                                <h2>{card.title}</h2>
                             </div>
                        </div>
                        <div className="card-body">
                             <div className="row d-flex justify-content-between flex-wrap align-items-center">
                                <div className="col-4">
                                    <img src={card.image} className="fluid-img" alt="" />
                                </div>
                                <div className="col-7">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action"><span className="fw-bold  text-wrap">Category :</span> {card.category}</li>
                                        <li className="list-group-item list-group-item-action"><span className="fw-bold">Description :</span> {card.description}</li>
                                        <li className="list-group-item list-group-item-action"><span className="fw-bold">Price :</span>{card.price}</li>
                                        <li className="list-group-item list-group-item-action"><span className="fw-bold">Rating : </span>{card.rating}</li>
                                    </ul>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                        )
                    })
                 }
               
            </div>

        </div>
    )
}

export default ListRendering