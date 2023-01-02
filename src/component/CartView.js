import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { addToLocalStore, decreaseLocalStoreQuantity, getFromLocalStore, removeFromLocalStore } from '../helper/helper';
import { useProducts } from '../hooks/hooks';

const CartView = () => {

  const [cart, setCart] = useState([])
  const products = useProducts()


  const quantityInc = (item) => {
    const restItems = cart.filter(cartItem => cartItem._id !== item._id)
    const selectedItem = cart.find(cartItem => cartItem._id === item._id)
    selectedItem.quantity += 1
    setCart([selectedItem, ...restItems])
    addToLocalStore(item._id)

  }
  const quantityDec = (item, index) => {
    console.log(index);
    const restItems = cart.filter(cartItem => cartItem._id !== item._id)
    const selectedItem = cart.find(cartItem => cartItem._id === item._id)
    selectedItem.quantity -= 1
    setCart([...restItems, selectedItem])
    decreaseLocalStoreQuantity(item._id)

  }

  const removeItem = (item) => {
    const restItems = cart.filter(cartItem => cartItem._id !== item._id)
    setCart([...restItems])
    removeFromLocalStore(item._id)

  }

  useEffect(() => {
    const storedCart = getFromLocalStore()
    let shoppingCart = []
    if (storedCart) {
      for (const id in storedCart) {
        const foundProduct = products.find(product => product._id === id)
        if (foundProduct) {
          foundProduct.quantity = storedCart[id]
          shoppingCart.push(foundProduct)
        }
      }
      setCart(shoppingCart)
    }
  }, [products])

  return (
    <div className='container'>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Products
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Unit Price
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Quantity
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Total Price
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Actions
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((item, index) => {
                      let { name, price, asset, quantity } = item
                      price = price.replace('$', '')

                      return (
                        <tr class="border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className='flex items-center'>
                              <div><img src={asset} alt={name} className='w-20 h-20 rounded-full drop-shadow-2xl' /></div>
                              <div className='font-bold mx-3 text-base'>  {name}</div>
                            </div>
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            ${price}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className='flex items-center'>
                              <div> <button type='button' onClick={() => quantityDec(item, index)} className='p-3 font-medium py-1.5 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 hover:shadow-lg'>-</button> </div>
                              <div className='mx-2 text-2xl font-bold'> {quantity}</div>
                              <div><button type='button' onClick={() => quantityInc(item)} className='p-3 font-medium py-1.5 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 hover:shadow-lg'>+</button></div>
                            </div>

                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            ${parseInt(price * quantity)}

                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button type='button' onClick={() => removeItem(item)} className='inline-block px-3 font-medium py-1.5 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 hover:shadow-lg'>Remove</button>
                          </td>

                        </tr>
                      )
                    })
                  }




                </tbody>

              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

export default CartView;