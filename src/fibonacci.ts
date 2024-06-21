import {Matrix22, Q_INVERSE, Q, IDENTITY} from "./matrix22.js";

const halfOf = (n: number) => (n / 2) | 0;

export class Fibonacci {

    #memo: Matrix22[] = [Q_INVERSE, IDENTITY];

    qToThePowerOf(exponent: number): Matrix22 {
        if (this.#memo[exponent + 1] !== undefined) {
            return this.#memo[exponent + 1];
        }

        const halfExponent = halfOf(exponent);
        let matrixPowered = this.qToThePowerOf(halfExponent).squared();
        if (exponent % 2 !== 0) {
            matrixPowered = matrixPowered.times(Q);
        }

        return (this.#memo[exponent + 1] = matrixPowered);
    }

    at(index: number): bigint {
        return this.qToThePowerOf(index - 1).a;
    }

}