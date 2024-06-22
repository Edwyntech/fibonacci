import {describe, it} from 'node:test'
import * as assert from 'node:assert';
import * as fs from "node:fs";

import {Fibonacci} from "./fibonacci.js";

const LARGE_FIBONACCI_VALUES = fs.readFileSync("data/large-fibonacci-values.json", "utf-8");
const EXPECTED_FIBONACCI_VALUES = JSON.parse(LARGE_FIBONACCI_VALUES,
    (key, value) => typeof value === 'number' ? BigInt(value) : value)

describe('Fibonacci series', () => {

    const fibonacci: Fibonacci = new Fibonacci();

    it('computes 0 for index 0', () => {
        assert.equal(fibonacci.of(0), 0);
    })

    it('computes 1 for index 2', () => {
        assert.equal(fibonacci.of(2), 1);
    })

    it('computes 4.3×10^208 for index 1 000', {timeout: 1_000}, () => {
        const FIBONACCI_OF_1_000 = BigInt(EXPECTED_FIBONACCI_VALUES._1_000);
        assert.equal(fibonacci.of(1_000), FIBONACCI_OF_1_000);
    })

    it('computes 3.4×10^2089 for index 10 000', {timeout: 1_000}, () => {
        const FIBONACCI_OF_10_000 = BigInt(EXPECTED_FIBONACCI_VALUES._10_000);
        assert.equal(fibonacci.of(10_000), FIBONACCI_OF_10_000);
    })

    it('computes 2.6×10^20898 for index 100 000', {timeout: 1_000}, () => {
        const FIBONACCI_OF_100_000 = BigInt(EXPECTED_FIBONACCI_VALUES._100_000);
        assert.equal(fibonacci.of(100_000), FIBONACCI_OF_100_000);
    })

    it('computes 1.9×10^208987 for index 1 000 000', {timeout: 1_000}, () => {
        const FIBONACCI_OF_1_000_000 = BigInt(EXPECTED_FIBONACCI_VALUES._1_000_000);
        assert.equal(fibonacci.of(1_000_000), FIBONACCI_OF_1_000_000);
    })

})