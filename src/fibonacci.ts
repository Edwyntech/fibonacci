import {Matrix22, Q_MATRIX} from "./matrix22.js";

export class Fibonacci {

    _memo: Matrix22[] = [
        new Matrix22(
            BigInt(0),
            BigInt(0),
            BigInt(1),
            BigInt(0)),
        Q_MATRIX];

    qToThePowerOf(exponent: number): Matrix22 {
        if (this._memo[exponent] !== undefined) {
            return this._memo[exponent];
        }

        const halfExponent = (exponent / 2) | 0;
        const square = this.qToThePowerOf(halfExponent)
            .times(this.qToThePowerOf(halfExponent));

        if (exponent % 2 === 0) {
            this._memo[exponent] = square;
        } else {
            this._memo[exponent] = square.times(Q_MATRIX);
        }

        return this._memo[exponent];
    }

    of(index: number): bigint {
        if (index < 2) {
            return this.qToThePowerOf(index).a;
        }
        return this.qToThePowerOf(index - 1).a;
    }

}