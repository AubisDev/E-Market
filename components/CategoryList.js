import Link from "next/link";

import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  console.log(categories)

  return (
    <div className="grid grid-cols-4 w-full p-2">
      {categories.map((category) => (
              <Category key={category.id} category = {category} />
      ))}
    </div>
  );
}