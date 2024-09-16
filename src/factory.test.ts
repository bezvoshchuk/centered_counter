import { expect, test } from 'vitest'
import { factory } from './factory'

test('creates a count function', function () {
  const count = factory(1, 1)
  expect(count()).toBe(2)
  expect(count()).toBe(3)
})

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5)
  expect(count()).toBe(15)
  expect(count()).toBe(20)
})

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory()
  expect(count()).toBe(1)
  expect(count()).toBe(2)
})

test('handles negative starting point', function () {
  const count = factory(-5, 2)
  expect(count()).toBe(-3)
  expect(count()).toBe(-1)
})

test('handles negative step', function () {
  const count = factory(10, -3)
  expect(count()).toBe(7)
  expect(count()).toBe(4)
})

test('handles zero step', function () {
  const count = factory(5, 0)
  expect(count()).toBe(5)
  expect(count()).toBe(5)
})

test('handles large numbers', function () {
  const count = factory(1e6, 1e6)
  expect(count()).toBe(2e6)
  expect(count()).toBe(3e6)
})

test('handles non-integer steps', function () {
  const count = factory(0, 0.5)
  expect(count()).toBe(0.5)
  expect(count()).toBe(1)
})
