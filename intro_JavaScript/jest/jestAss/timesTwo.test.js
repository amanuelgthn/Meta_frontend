#!/usr/bin/env node
const timesTwo = require('./timesTwo');

test('return 4 for two', () => {
    expect(timesTwo(2)).toBe(4);
})