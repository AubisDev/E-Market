import commerce from "../../lib/commerce";
import ProductList from "../../components/ProductList";
import React from "react";


// primero obtenemos el slug que un nombre de la categoria, y con ese slug vamos a hacer un fetch de las categorias de ese slug specifico que indica cual es la categoria a la cual hara el fetch,
//  y ademas, hacemos un fetch para obtener todos los productos que pertenecen  a esa categoria, y los pasamos como props.

export async function getStaticProps({ params }) {
  const { slug } = params;

  const categories = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: slug,
  });



  return {
    props: {
      categories,
      products,
    },
  };
}

// En este funcion obtenemos la lista de las categorias, y luego retornamos como paths a cada una de esas categorias. Es decir cada uno de sus slug va a ser un path 
export async function getStaticPaths() {
    const { data: categories } = await commerce.categories.list();
  
    return {
      paths: categories.map((category) => ({
        params: {
          slug: category.slug,
        },
      })),
      fallback: false,
    };
}



export default function CategoryPage({ categories, products }) {

    console.log(categories)
    return (
      <React.Fragment>
        <h1>{categories.name}</h1>

  
        <ProductList products={products} />
      </React.Fragment>
    );
  }

