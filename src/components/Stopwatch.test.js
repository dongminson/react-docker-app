import {formatTime} from './Stopwatch';

test('testing format 01', () => {
  let output = formatTime(10);
  expect(output).toBe('10');
});

test('testing format 02', () => {
    let output = formatTime(1);
    expect(output).toBe('01');
});

test('testing format 03', () => {
    let output = formatTime(1, 'ms');
    expect(output).toBe('001');
});