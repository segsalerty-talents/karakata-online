/**
 *
 * @param {*} key
 * @param {*} value
 * @param {*} time in seconds
 */
const SET_ITEM = (key, value, time) => {
  const now = new Date()

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    data: value,
    expiry: now.getTime() + time * 1000
  }
  if (!time) delete item.expiry
  return localStorage.setItem(key, JSON.stringify(item))
}

/**
 *
 * @param {*} key
 */
const GET_ITEM = (key) => {
  const itemStr = localStorage.getItem(key)
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (item.expiry && now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    REMOVE_ITEM(key)
    return null
  }
  return item.data
}

/**
 *
 * @param {*} key
 */
const REMOVE_ITEM = (key) => {
  return localStorage.removeItem(key)
}

export { SET_ITEM, REMOVE_ITEM, GET_ITEM }
