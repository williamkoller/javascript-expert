// Fibonacci: o proximo numero da sequencia eh sempre a soma dos anteriores
// input: 3
// 0,1,1
// input: 5
// 0,1,1,2,3
const { createSandbox } = require('sinon');
const assert = require('assert');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox();

(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    /**
     * Numero de sequencias: 3
     * [0] input = 5, current = 0, next = 1 = result 0
     * [1] input = 4, current = 1, next = 1 = result 1
     * [2] input = 3, current = 1, next = 2 = result 1
     * [3] input = 2, current = 2, next = 3 => stop
     */
    for (const sequencia of fibonacci.execute(3)) {
    }
    const expectedCallCount = 4;
    assert.strictEqual(spy.callCount, expectedCallCount);
  }
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    /**
     * Numero de sequencias: 5
     * [0] input = 5, current = 0, next = 1 = result 0
     * [1] input = 4, current = 1, next = 1 = result 1
     * [2] input = 3, current = 1, next = 2 = result 1
     * [3] input = 2, current = 2, next = 3 = result 2
     * [4] input = 1, current = 3, next = 5 = result 3
     * [5] input = 0, current = 5, next = 8 => stop
     */
    for (const sequencia of fibonacci.execute(5)) {
    }
    const expectedCallCount = 6;
    assert.strictEqual(spy.callCount, expectedCallCount);
    const { args } = spy.getCall(2);
    const expectedParams = [3, 1, 2];
    assert.deepStrictEqual(args, expectedParams);
  }
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    /**
     * Numero de sequencias: 5
     * [0] input = 5, current = 0, next = 1 = result 0
     * [1] input = 4, current = 1, next = 1 = result 1
     * [2] input = 3, current = 1, next = 2 = result 1
     * [3] input = 2, current = 2, next = 3 = result 2
     * [4] input = 1, current = 3, next = 5 = result 3
     * [5] input = 0, current = 5, next = 8 => stop
     */
    const results = [...fibonacci.execute(5)];

    const expectedCallCount = 6;
    assert.strictEqual(spy.callCount, expectedCallCount);
    const { args } = spy.getCall(2);
    const expectedParams = [3, 1, 2];
    assert.deepStrictEqual(args, expectedParams);
    const expectedResult = [0, 1, 1, 2, 3];
    assert.deepStrictEqual(results, expectedResult);
  }
})();
