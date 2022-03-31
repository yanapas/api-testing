import { expect } from 'chai';

describe('Math functions', () => {

    const a = 14;
    const b = 5;
    const c = 19
    const d = 9;
    it.skip('A + B = C', () => {
        expect(a + b).to.eq(c)
    })

    it.only('A - B = D', () => {
        expect(a - b).to.eq(d)
    })

})