import {describe, it} from "node:test";
import * as assert from "node:assert";
import {Matrix22, Q_MATRIX, ZERO_MATRIX} from "./matrix22.js";

describe('matrix22', () => {

    it('squares zero-matrix to zero-matrix', t => {
        assert.deepStrictEqual(ZERO_MATRIX.squared(), ZERO_MATRIX);
    })

    it('returns zero-matrix when any matrix is multiplied by zero-matrix', t => {
        assert.deepStrictEqual(Q_MATRIX.times(ZERO_MATRIX), ZERO_MATRIX);
    })

    it('squares Q matrix', t => {
        const qMatrixSquared: Matrix22 = new Matrix22(BigInt(2), BigInt(1), BigInt(1), BigInt(1));
        assert.deepStrictEqual(Q_MATRIX.squared(), qMatrixSquared);
    })
})