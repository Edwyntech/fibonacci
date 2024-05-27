import {describe, it} from "node:test";
import * as assert from "node:assert";
import {Matrix22, Q_MATRIX, ZERO_MATRIX} from "./matrix22.js";

describe('matrix22', () => {

    const Q_MATRIX_SQUARED: Matrix22 = new Matrix22(BigInt(2), BigInt(1), BigInt(1), BigInt(1));

    it('returns zero-matrix when any matrix is multiplied by zero-matrix', t => {
        assert.deepStrictEqual(Q_MATRIX.times(ZERO_MATRIX), ZERO_MATRIX);
    })

    it('squares Q matrix', t => {
        assert.deepStrictEqual(Q_MATRIX.squared(), Q_MATRIX_SQUARED);
    })

    it('squares Q matrix for Q times Q', t => {
        assert.deepStrictEqual(Q_MATRIX.times(Q_MATRIX), Q_MATRIX_SQUARED);
    })

})