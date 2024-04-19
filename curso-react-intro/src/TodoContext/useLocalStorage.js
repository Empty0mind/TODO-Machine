import React from 'react'

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  
  React.useEffect(() => {
    
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        
        let parsedItem;
  
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
      } else {
        parsedItem = JSON.parse(localStorageItem)
        setItem(parsedItem)
      }
  
      setLoading(false)
      setIsLoading(false)
      } catch(error) {
        setLoading(false)
        setError(true)
      }
      console.log('asdf');
    }, 2000);
// eslint-disable-next-line 
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))

    setItem(newItem)
  
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    isLoading
  }
}

export { useLocalStorage }