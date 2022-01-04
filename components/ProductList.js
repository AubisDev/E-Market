// components/ProductList.js
import Link from "next/link";

import Product from "./Product";

//Si no hay productos retorna null, de otra forma retorna una lista con cada uno de los productos, sin filtros

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}