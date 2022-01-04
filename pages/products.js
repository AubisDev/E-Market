import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import React from "react";

// hace un fetch a la lista de productos completa y ademas lo pasamos como props mediante getStaticProps para enviarselo al componente ProductList para mostrarlo en una lista 

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

//Retorna un componente donde estara la lista de productos

export default function ProductsPage({ products }) {
  return (
    <React.Fragment>
      <h1>Products</h1>

      <ProductList products={products} />
    </React.Fragment>
  );
}