import Alert from "react-s-alert";

export const handleAddProductSuccess = (e) => {
    e.preventDefault();
    Alert.success('Add product to cart', {
        position: 'top-right',
        effect: 'slide',
        offset: '50',
    });
};

export const handleAddProductError = (e) => {
    e.preventDefault();
    Alert.error('Please select a size', {
        position: 'top-right',
        effect: 'slide',
        offset: '50',
    });
};
