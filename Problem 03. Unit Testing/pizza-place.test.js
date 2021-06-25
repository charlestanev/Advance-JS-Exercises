const pizzUni = require('./pizza-place');
const { expect, assert } = require('chai');
// ------------------------ only this part below in judge for testing------------------------------------------
describe("Pizza place tests", () => {
    describe("makeAnOrder tests", () => {
        // positive - order pizza only
        it('Should return conformation message when pizza is ordered', () => {
            let order = {
                orderedPizza: 'Margaritta',
            }

            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza}`)
        });

        // positive - order pizza and drink
        it('Should return conformation message when pizza and drink are ordered', () => {
            let order = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'Margaritta and drink',
            }
        
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`)
        });

        // negative - error when there is no ordered pizza
        it('Should throw error when there is no ordered pizza', () => {
            let order = {}

            // Should be in ()=>{} when is error - .to.throw()
            expect(()=>{ pizzUni.makeAnOrder(order)}).to.throw();
        });
        
        // negative - error when there is no ordered pizza only drink
        it('Should throw error when there is only drink', () => {
            let order = {
                orderedDrink: 'Pepsi',
            }

            // Should be in ()=>{} when is error - .to.throw()
            expect(()=>{ pizzUni.makeAnOrder(order)}).to.throw();
        });
        
        // negative - error when there is no ordered pizza only drink
        it('Should throw error when there is only drink', () => {
            // Should be in ()=>{} when is error - .to.throw()
            expect(()=>{ pizzUni.makeAnOrder(order)}).to.throw();
        });

    });
    
    describe("getRemainingWork tests", () => {
        it('Should return all orders completed when one ready status is given', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'ready'}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });
        
        it('Should return all orders completed when two ready statuses are given', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'ready'}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });

        it('Should return remainig pizzas when there is one pending order', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'preparing'},
                { pizzaName: 'Margaritta', status: 'ready'}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('The following pizzas are still preparing: Margaritta.');
        });

        it('Should return remainig pizzas when there are more pending order', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'preparing'},
                { pizzaName: 'Italiana', status: 'preparing'}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('The following pizzas are still preparing: Margaritta, Italiana.');
        });

    });

    describe("orderType tests", () => {
        it('Should return totalSum when type of order is Delivery', () => {
            let totalSum = 10;
            let orderType = 'Delivery';

            expect(pizzUni.orderType(totalSum, orderType)).to.equal(totalSum);
        });

        it('Should return totalSum with discount when type of order is Carry Out', () => {
            let totalSum = 10;
            let orderType = 'Carry Out';

            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9);
        });
        
        it('Should return totalSum with discount when using floating point number', () => {
            let totalSum = 10.50;
            let orderType = 'Carry Out';

            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9.45);
        });
    });
});