import React from 'react';
const ProductListComponent=({productList})=>
{
return(
    <ul>
        {productList.map((product)=>(
            <li key={product.id}>
                <div>{product.name}</div>
                <img src={`/${product.imageUrl}`} alt={product.name}style={{width:'100px',height:'auto'}}/>
                <div>${product.price.toFixed(2)}</div>
            </li>
        ))}
    </ul>
)
}
export default ProductListComponent;