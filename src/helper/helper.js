
const KEY = 'SHOPPING-CART'
export const getFromLocalStore = () => {
  return JSON.parse(localStorage.getItem(KEY))
}
export const addToLocalStore = (id, action = '+') => {
  const storedCart = getFromLocalStore()
  let shoppingCart = {}
  if (storedCart) {
    shoppingCart = storedCart
  }

  if (shoppingCart[id]) {
    shoppingCart[id] = parseInt(shoppingCart[id]) + 1
  } else {
    shoppingCart[id] = 1
  }
  localStorage.setItem(KEY, JSON.stringify(shoppingCart))
}
export const decreaseLocalStoreQuantity = (id) => {
  let shoppingCart = getFromLocalStore()
  shoppingCart[id] = parseInt(shoppingCart[id]) - 1

  localStorage.setItem(KEY, JSON.stringify(shoppingCart))
}

export const removeFromLocalStore = (id) => {
  let shoppingCart = getFromLocalStore()
  delete shoppingCart[id]
  localStorage.setItem(KEY, JSON.stringify(shoppingCart))
}

