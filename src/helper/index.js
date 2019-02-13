export const max_number = numbers => {
    return numbers.length > 0 ? Math.max(...numbers) : 0;
}

export const array_check = array => {
    return array && array.length > 0 ? array : [];
}