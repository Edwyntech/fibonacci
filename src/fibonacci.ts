import {Matrix22, Q_MATRIX} from "./matrix22.js";

export class Fibonacci {

    #memo: Matrix22[] = [
        new Matrix22(
            BigInt(0),
            BigInt(0),
            BigInt(1),
            BigInt(0)),
        Q_MATRIX];

    qToThePowerOf(exponent: number): Matrix22 {
        if (this.#memo[exponent] !== undefined) {
            return this.#memo[exponent];
        }

        const halfExponent = (exponent / 2) | 0;
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