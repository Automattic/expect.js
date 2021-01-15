export interface Assertion {
  /**
   * Check if the value is truthy
   */
  ok(): void

  /**
   * Creates an anonymous function which calls fn with arguments.
   */
  withArgs(...args: any[]): Expect

  /**
   * Assert that the function throws.
   *
   * @param {(error: any) => any} fn - callback to match error string against
   */
  throw(fn: (error: any) => void): void
  /**
   * Assert that the function throws.
   *
   * @param {RexExp} regexp - regexp to match error string against
   */
  throw(regexp: RegExp): void
  /**
   * Assert that the function throws.
   */
  throw(): void

  /**
   * Assert that the function throws.
   *
   * @param {(error: any) => any} fn - callback to match error string against
   */
  throwError(fn: (error: any) => void): void
  /**
   * Assert that the function throws.
   *
   * @param {RexExp} regexp - regexp to match error string against
   */
  throwError(regexp: RegExp): void
  /**
   * Assert that the function throws.
   */
  throwError(): void

  /**
   * Assert that the function throws.
   *
   * @param {(error: any) => any} fn - callback to match error string against
   */
  throwException(fn: (error: any) => void): void
  /**
   * Assert that the function throws.
   *
   * @param {RexExp} regexp - regexp to match error string against
   */
  throwException(regexp: RegExp): void
  /**
   * Assert that the function throws.
   */
  throwException(): void

  /**
   * Checks if the array is empty.
   */
  empty(): Assertion

  /**
   * Checks if the obj exactly equals another.
   */
  equal(obj: any): Assertion
  /**
   * Checks if the obj exactly equals another.
   */
  be(obj: any): Assertion

  /**
   * Checks if the obj sortof equals another.
   */
  eql(obj: any): Assertion

  /**
   * Assert within start to finish (inclusive).
   *
   * @param start
   * @param finish
   */
  within(start: number, finish: number): Assertion

  /**
   * Assert typeof.
   */
  a(type: string): Assertion

  /**
   * Assert instanceof.
   */
  a(type: Function): Assertion

  /**
   * Assert typeof.
   */
  an(type: string): Assertion

  /**
   * Assert instanceof.
   */
  an(type: Function): Assertion

  /**
   * Assert typeof / instanceof.
   */
  an: An

  /**
   * Assert numeric value above n.
   */
  greaterThan(n: number): Assertion

  /**
   * Assert numeric value above n.
   */
  above(n: number): Assertion

  /**
   * Assert numeric value below n.
   */
  lessThan(n: number): Assertion

  /**
   * Assert numeric value below n.
   */
  below(n: number): Assertion

  /**
   * Assert string value matches regexp.
   *
   * @param regexp
   */
  match(regexp: RegExp): Assertion

  /**
   * Assert property "length" exists and has value of n.
   *
   * @param n
   */
  length(n: number): Assertion

  /**
   * Assert property name exists, with optional val.
   *
   * @param name
   * @param val
   */
  property(name: string, val?: any): Assertion

  /**
   * Assert that string contains str.
   */
  contain(str: string): Assertion
  string(str: string): Assertion

  /**
   * Assert that the array contains obj.
   */
  contain(obj: any): Assertion
  string(obj: any): Assertion

  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  key(keys: string[]): Assertion
  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  key(...keys: string[]): Assertion
  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  keys(keys: string[]): Assertion
  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  keys(...keys: string[]): Assertion

  /**
   * Assert a failure.
   */
  fail(message?: string): Assertion

  and: Assertion
}

interface Expect extends Assertion {
  not: Not
  to: To
  only: Only
  have: Have
  be: Be
}

interface Not extends Assertion {
  to: To
  be: Be
  have: Have
  include: Include
  only: Only
}

interface To extends Assertion {
  be: Be
  have: Have
  include: Include
  only: Only
  not: Not
}

interface Only extends Assertion {
  have: Have
}

interface Have extends Assertion {
  own: Own
}

interface Be extends Assertion {
  /**
   * Checks if the obj exactly equals another.
   */
  (obj: any): Assertion

  an: An
}

interface An extends Assertion {
  /**
   * Assert typeof.
   */
  an(type: string): Assertion

  /**
   * Assert instanceof.
   */
  an(type: Function): Assertion
}

interface Include extends Assertion {}

declare var expect: {
  (actual?: any, message?: string): Expect
  version: string
  stringify(value: any, showHidden?: boolean, depth?: number): string
  eql(actual: any, expected: any): boolean
}

export { expect }
export default expect
