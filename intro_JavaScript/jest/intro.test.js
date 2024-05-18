#!/usr/bin/env node


const sum = require('./intro');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
