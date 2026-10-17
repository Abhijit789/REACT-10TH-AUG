// import { useMemo, useState } from "react"

// function UseMemoPerformance() {
//     let product=[
//         {
//             id:"p1",
//             pName:"mobile",
//             price:10000,
//         },
//         {
//             id:"p2",
//             pName:"laptop",
//             price:20000,
//         },
//         {
//             id:"p3",
//             pName:"tablet",
//             price:15000,
//         },
//         {
//             id:"p4",
//             pName:"small tv",
//             price:10000,
//         },
//         {
//             id:"p5",
//             pName:"projector",
//             price:9000,
//         },{
//             id:"p6",
//             pName:"printer",
//             price:6000,
//         },
//         {
//             id:"p7",
//             pName:"CPU",
//             price:10000,
//         },
//         {
//             id:"p8",
//             pName:"HDD",
//             price:10000,
//         },
//         {
//             id:"p9",
//             pName:"speaker",
//             price:8000,
//         }
//     ]
//     let [products,setProducts]=useState(product)
//     let [filterProducts,setFilterProducts]=useState([])
//     let[count,setCount]=useState(0);
//     let[count2,setCount2]=useState(0);

//     let expCal=useMemo(()=>{
//         console.log("before filtering data");
        
//         let filterProductsData=products.filter(product=>{
//             return product.price>10000
//         })
//         setFilterProducts(filterProductsData)
//         console.log("after filtering data");
        
//     console.log(filterProducts);
        
//     },[count2])

//     // console.log(expCal,"expCal");
    
    
//   return (
//     <div>
//         <div className="row">
//             <div className="col">
//                 <button onClick={expCal}>Get Filter Products</button>
//                 {
//                     filterProducts?.map(product=>{
//                        return <li key={product.id}>{product.pName},{product.price}</li>
//                     })
//                 }
//                 <button className="m-3 btn btn-secondary" onClick={()=>{setCount(prev=>prev+1)}}>{count} Onclick</button>
//                 <button className="m-3 btn btn-secondary" onClick={()=>{setCount2(prev=>prev+1)}}>{count2} Onclick2</button>
//             </div>
//         </div>


//     </div>
//   )
// }

// export default UseMemoPerformance