import {describe, it, only} from 'node:test'
import * as assert from 'node:assert';
import * as fs from "node:fs";
import {Fibonacci} from "./fibonacci.js";

const data = fs.readFileSync("src/large-fibonacci-values.json", "utf-8");
const EXPECTED_VALUES = JSON.parse(data, (key, value) => {
    return typeof value === "number" ? BigInt(value) : value;
})

describe('fibonacci series', () => {
    const fibonacci: Fibonacci = new Fibonacci();

    it('computes 0 for index 0', t => {
        assert.equal(fibonacci.of(0), 0);
    })

    it('computes 1 for index 2', t => {
        assert.equal(fibonacci.of(2), 1);
    })

    it('computes 3.4×10^2089 for index 10 000', t => {
        const fib_10_000 = BigInt(EXPECTED_VALUES.fib_10_000);
        assert.equal(fibonacci.of(10_000), fib_10_000);
    })

    it('computes 2.6×10^20898 for index 100 000', t => {
        const fib_100_000 = BigInt(EXPECTED_VALUES.fib_100_000);
        assert.equal(fibonacci.of(100_000), fib_100_000);
    })

    it('computes 1.9×10^208987 for index 1 000 000', t => {
        const fib_1_000_000 = BigInt(EXPECTED_VALUES.fib_1_000_000);
        assert.equal(fibonacci.of(1_000_000), fib_1_000_000);
    })
})