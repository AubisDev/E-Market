

import Link from 'next/link';
import React from 'react'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Category = ({ category }) => {
  const {name, children, slug } = category;

  return (
    <div className='mr-5  '>
      <Link href={`/categories/${slug}`}>
        <a className='font-semibold text-xl text-blue-800 '> {name} <FontAwesomeIcon icon={faArrowCircleRight} className='ml-2' /></a>
      </Link>
      <ul className='flex flex-col '>
        {children.map( child => (
          <Link href={`/categories/${slug}/${child.slug}`} key={child.id} >
              <a className='my-4 italic ml-5 font-text-1 hover:font-semibold hover:text-blue-900 hover:scale-110 duration-300 '>{child.name}</a>
          </Link>
        ) )}
      </ul>
    </div>
  )
}

export default Category
