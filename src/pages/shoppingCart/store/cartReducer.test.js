import cartReducer from "./cartReducer";
import {ADD_TO_CART} from "./action";


describe('Cart reducer', () => {

    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(
            {
                cartProductList: [],
                totalCount: 0,
            }
        );
    });

    it('should handle add a new product ADD_TO_CART', () => {
        expect(cartReducer({
                cartProductList: [],
                totalCount: 0,
            }, {
                type: ADD_TO_CART,
                value: {id: 0, price: 100, name: 'product_1', selectSize: 'S'}
            })
        ).toEqual({
                cartProductList: [{id: 0, price: 100, name: 'product_1', count: 1, selectSize: 'S'}],
                totalCount: 1,
            }
        );
    });

    it('should handle add same size product ADD_TO_CART', () => {
        expect(cartReducer({
                cartProductList: [
                    {id: 0, price: 100, name: 'product_1', count: 1, selectSize: 'S'},
                    {id: 0, price: 100, name: 'product_1', count: 1, selectSize: 'L'}
                ],
                totalCount: 2,
            }, {
                type: ADD_TO_CART,
                value: {id: 0, price: 100, name: 'product_1', selectSize: 'S'}
            })
        ).toEqual({
                cartProductList: [
                    {id: 0, price: 100, name: 'product_1', count: 2, selectSize: 'S'},
                    {id: 0, price: 100, name: 'product_1', count: 1, selectSize: 'L'}
                ],
                totalCount: 3,
            }
        );
    });

    it('should handle add different size product ADD_TO_CART', () => {
        expect(cartReducer({
                cartProductList: [{id: 0, price: 100, name: 'product_1', count: 1, selectSize: 'S'}],
                totalCount: 1,
            }, {
                type: ADD_TO_CART,
                value: {id: 0, price: 100, name: 'product_1', selectSize: 'L'}
            })
        ).toEqual({
                cartProductList: [
                    {id: 0, price: 100, name: 'product_1', count: 1, selectSize: 'S'},
                    {id: 0, price: 100, name: 'product_1', count: 1, selectSize: 'L'}
                ],
                totalCount: 2,
            }
        );
    });
});
