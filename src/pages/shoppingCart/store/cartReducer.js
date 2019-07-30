import {ADD_TO_CART} from "./action";

const defaultState = {
    cartProductList: [],
    totalCount: 0,
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_TO_CART: {
            let hasProduct = false;
            let product = JSON.parse(JSON.stringify(action.value));
            for (let i = 0; i < newState.cartProductList.length; i++) {
                if (newState.cartProductList[i].selectSize === product.selectSize) {
                    newState.cartProductList[i].count++;
                    hasProduct = true;
                }
            }
            if (!hasProduct) {
                product.count = 1;
                newState.cartProductList.push(product);
            }
            newState.totalCount++;
            return newState;
        }
        default:
            return state;
    }
}
