import {Matrix22, Q_MATRIX, ZERO_MATRIX} from "./matrix22.js";

const halfOf = (n: number) => (n / 2) | 0;

export class Fibonacci {

    #memo: Matrix22[] = [ZERO_MATRIX, Q_MATRIX];

    qToThePowerOf(exponent: number): Matrix22 {
        if (this.#memo[exponent] !== undefined) {
            return this.#memo[exponent];
        }

        const halfExponent = halfOf(exponent);
        let matrixPowered = this.qToThePowerOf(halfExponent).squared();
        if (exponent % 2 !== 0) {
            matrixPowered = matrixPowered.times(Q_MATRIX);
        }

        this.#memo[exponent] = matrixPowered;

        return this.#memo[exponent];
    }

    of(index: number): bigint {
        if (index < 2) {
            return this.qToThePowerOf(index).a;
        }

        return this.qToThePowerOf(index - 1).a;
    }

}