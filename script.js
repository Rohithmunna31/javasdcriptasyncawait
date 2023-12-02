// Original code with promises
function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Butter');
      }, 1000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cold Drinks');
      }, 2000);
    });
  }
  
  function husbandShopping() {
    getButter()
      .then((butter) => {
        console.log('Husband got', butter);
        return getColdDrinks();
      })
      .then((drinks) => {
        console.log('Husband got', drinks);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  husbandShopping();
  
  // Using async/await
  async function husbandShoppingAsync() {
    try {
      const butter = await getButter();
      console.log('Husband got', butter);
      
      const drinks = await getColdDrinks();
      console.log('Husband got', drinks);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  husbandShoppingAsync();
  