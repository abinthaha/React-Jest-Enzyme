import { max_number, array_check } from './index';

describe('max_number', () => {
    describe('Given an empty array', () => {
        it('Returns 0', () => {
            expect(max_number([])).toEqual(0);
        })
    })

    describe('Given an array of numbers', () => {
        it('Returns the max number', () => {
            expect(max_number([1, 2, 3])).toEqual(3);
        })
    })
})

describe('array_check', () => {
    describe('Given an undefined variable', () => {
        it('Returns empty array', () => {
            expect(array_check(undefined)).toEqual([]);
        })
    })

    describe('Given an array', () => {
        it('Returns the array', () => {
            expect(array_check([1, 2, 3])).toEqual([1, 2, 3]);
        })
    })
})