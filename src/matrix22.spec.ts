import {describe, it} from "node:test";
import * as assert from "node:assert";
import {IDENTITY, Matrix22, INVERSE_OF_Q, Q} from "./matrix22.js";

describe('Matrix 2x2', () => {

    const Q_SQUARED: Matrix22 = new Matrix22(
        BigInt(2), BigInt(1),
        BigInt(1), BigInt(1));

    describe('multiplication', () => {

        it('returns identity when multiplying identity by itself', () => {
            assert.deepStrictEqual(IDENTITY.times(IDENTITY), IDENTITY);
        })

        it('returns Q squared when multiplying Q by itself', () => {
            assert.deepStrictEqual(Q.times(Q), Q_SQUARED);
        })

        it('returns identity when multiplying Q by its inverse', () => {
            assert.deepStrictEqual(Q.times(INVERSE_OF_Q), IDENTITY);
        })
    })

    describe('squaring', () => {

        it('returns identity when squaring identity', () => {
            assert.deepStrictEqual(IDENTITY.squared(), IDENTITY);
        })

        it('returns Q squared when squaring Q', () => {
            assert.deepStrictEqual(Q.squared(), Q_SQUARED);
        })
    })
})