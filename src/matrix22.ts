export class Matrix22 {
    constructor(readonly a: bigint, readonly b: bigint, readonly c: bigint, readonly d: bigint) {
    }

    times(other: Matrix22): Matrix22 {
        return new Matrix22(
            this.a * other.a + this.b * other.c,
            this.a * other.b + this.b * other.d,
            this.c * other.a + this.d * other.c,
            this.c * other.b + this.d * other.d
        );
    }

    squared(): Matrix22 {
        return this.times(this);
    }
}

export const IDENTITY: Matrix22 = new Matrix22(
    BigInt(1), BigInt(0),
    BigInt(0), BigInt(1))

export const Q: Matrix22 = new Matrix22(
    BigInt(1), BigInt(1),
    BigInt(1), BigInt(0))

export const Q_INVERSE: Matrix22 = new Matrix22(
    BigInt(0), BigInt(1),
    BigInt(1), BigInt(-1))
