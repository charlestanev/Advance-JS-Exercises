class Restaurant {
 
    constructor(budget) {
        this.budgetMoney = Number(budget)
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }
    loadProducts(array) {
        array.forEach(product => {
            let [productName, productQuantity, productTotalPrice] = product.split(" ");
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
 
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += productQuantity
                } else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
 
            }
        })
        return this.history.join("\n")
    }
 
    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in the our menu, try something different.`
        } else {
 
            let productObj = {}
 
            neededProducts.forEach(curentProduct => {
                let [product, productQuantity] = curentProduct.split(" ");
                productObj[product] = Number(productQuantity);
            })
            this.menu[meal] = {
                products: productObj,
                price: Number(price)
            }
            let objMealCount = Object.keys(this.menu).length;
            if (objMealCount == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else if (objMealCount == 0 || objMealCount >= 2) {
                return `Great idea! Now with the ${meal} we have ${objMealCount} meals in the menu, other ideas?`
            }
        }
    }
 
    showTheMenu() {
        let mealCount = Object.keys(this.menu).length;
 
        if (mealCount == 0) {
            return "Our menu is not ready yet, please come later..."
        } else if (mealCount >= 1) {
            let menueEntriesArr = Object.entries(this.menu);
            let result = ''
            menueEntriesArr.forEach((meal, index) => {
 
                result += `${meal[0]} - $ ${meal[1].price}`
                if (!index == menueEntriesArr.length - 1) {
                    result += "\n"
                }
            });
            return result;
        }
    }
 
    makeTheOrder(meal) {
        let wantedMeal = this.menu[meal];
        if (!wantedMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let isAllProductPresant = validateProducts(wantedMeal, this.stockProducts);
 
        if (isAllProductPresant) {
            for (const key in wantedMeal.products) {
                this.stockProducts[key] -= wantedMeal.products[key]
            }
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${wantedMeal.price}.`
 
 
        } else {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }
 
        function validateProducts(mealObj, stockProductsObj) {
            let wantedProductsObj = mealObj.products;
 
            let isProductsPresant = true;
            for (const key in wantedProductsObj) {
                if (!stockProductsObj.hasOwnProperty(key)) {
                    isProductsPresant = false;
                    break
                }
            }
            return isProductsPresant;
        }
    }
}
