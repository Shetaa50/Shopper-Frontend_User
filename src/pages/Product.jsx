
import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Piece from "../components/piece/Piece";
import Display  from "../components/Display/Display";
// import DescriptionBox from "../components/dicsriptionbox/DescriptionBox";
// import RelatedSection from "../components/RelatedSection/RelatedSection";
const Product = ()=>{
    const{all_product} = useContext(ShopContext)
    const{productId} =useParams();
    const product = all_product.find((e)=> e.id===Number(productId))
    return(
        <div>
            <Piece product={product}/>
            <Display product={product}/>
{/*             <DescriptionBox/>
            <RelatedSection/> */}
        </div>
    )
}
export default Product 
