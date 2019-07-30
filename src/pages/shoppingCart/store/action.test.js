import {ADD_TO_CART} from "./action";
import {handleAddToCart} from "./action";


describe('Cart actions', () => {
    it('should create an action to add product to cart', () => {
        const expectedAction = {
            type: ADD_TO_CART
        };
        expect(handleAddToCart()).toEqual(expectedAction)
    });
});
