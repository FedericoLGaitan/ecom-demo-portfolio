"use client"
import React from 'react'
import { useFavorites } from '@/hooks/use-favorites'
import FavoriteItem from './components/favorite-item'

const FavoritesPage = () => {
    const {favorites} = useFavorites()

  return (
    <div className='max-w-4xl py-4 mx-auto sm:py-32 sm:px-24'>
        <h1 className='sm:text-2xl'>Favorites Products</h1>
        
        <div>
          {favorites.length == 0 && (
            <p className='text-center'>No products in favorites</p>)
            }
            <ul>
               {favorites.map((product) => (
                <FavoriteItem key={product.id} product={product} />
               ))}
            </ul>
        </div>

    </div>
  )
}

export default FavoritesPage