import React, { useEffect, useState } from 'react'

const ProductList = ({category}:{category:string}) => {
    const [product,setProduct]= useState<string[]>([]);

    const connect=()=> console.log("connect");
    const disconnect=()=> console.log("disconnect");

    useEffect(()=>{
        connect()
        // console.log("Loading Product "+category);
        if(category =="HouseHold")
        setProduct(["kitchen","spoon"]);

        if(category =="HouseHold")
        setProduct(["pant","Shirt"]);


        return ()=>{
            setProduct([]);
            disconnect()
        } ;
    },[category])
  return (
    <div>{product.map((prod,i)=> <li key={i}>{prod}</li>)}</div>
  )
}

export default ProductList