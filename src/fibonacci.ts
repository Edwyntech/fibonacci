import {Matrix22, INVERSE_OF_Q, Q, IDENTITY} from "./matrix22.js";

interface Memo {
    [exponent: number]: Matrix22;
}

const halfOf = (n: number) => (n / 2) | 0;

export class Fibonacci {

    #powersOfQ: Memo = {
        "-1": INVERSE_OF_Q,
        "0": IDENTITY,
        "1": Q
    };

    qToThePowerOf(exponent: number): Matrix22 {
        if (this.#powersOfQ[exponent] !== undefined) {
            return this.#powersOfQ[exponent];
        }

        const halfExponent = halfOf(exponent);
        const fastExponentiation = exponent % 2 == 0 ?
            this.qToThePowerOf(halfExponent)
                .squared() :
            this.qToThePowerOf(halfExponent)
                .squared()
                .times(Q);

        return (this.#powersOfQ[exponent] = fastExponentiation);
    }

    of(index: number): bigint {
        return this.qToThePowerOf(index - 1).a;
    }

}