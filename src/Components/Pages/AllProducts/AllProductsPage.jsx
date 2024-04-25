// import React, { useEffect, useState } from 'react'
// import { getAllProducts } from '../../../Services/products.service'

// export default function AllProductsPage() {
//     const [products, setProducts] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const productsResponse = await getAllProducts();
//             console.log("productsResponse ==>", productsResponse);
//         })()
//     }, [])
//     return (
//         <div>All Products Page</div>
//     )
// }

import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../Services/products.service'

export default function AllProductsPage() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const unsubscribe = getAllProducts((productsList) => {
            console.log("productsList ==>", productsList);
            setProducts(productsList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>All Products Page</div>
    )
}