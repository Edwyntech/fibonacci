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
        if (exponent % 2 === 0) {
            this._memo[exponent] = this.qToThePowerOf(halfExponent)
                .times(this.qToThePowerOf(halfExponent));
        } else {
            this._memo[exponent] = this.qToThePowerOf(halfExponent)
                .times(this.qToThePowerOf(halfExponent))
                .times(Q_MATRIX);
        }
        return this._memo[exponent];
    }

    of(index: number): bigint {
        if (index < 2) {
            return BigInt(index);
        }
        return this.qToThePowerOf(index - 1).a;
    }

}