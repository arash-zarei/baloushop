const shorted = (title) => {
    const oldTitle = title.split(' ');
    const newTitle = oldTitle[0] + oldTitle[1]

    return newTitle
}

const getNewPrice = (price, discountPercentage) => {
    const newPrice = (price - price * (discountPercentage / 100)).toFixed(0);
    return newPrice
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

export {shorted, getNewPrice, isInCart, quantityCount};