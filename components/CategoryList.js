import Link from "next/link";

import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  console.log(categories)

  return (
    <div className="grid grid-cols-1 grid-rows-1  sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4    w-full p-2">
      {categories.map((category) => (
              <Category key={category.id} category = {category} />
      ))}
    </div>
  );
}