import React, { useEffect } from 'react'
import { getAllProducts } from '../../../Services/products.service'

export default function AllProductsPage() {
    useEffect(() => {
        (async () => {
            const productsResponse = await getAllProducts();
            console.log("productsResponse ==>", productsResponse);
        })()
    }, [])
    return (
        <div>All Products Page</div>
    )
}