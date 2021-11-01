// @ts-check

/**
 * @typedef {(a: string, b: number)=>boolean} bar
 * @typedef {[a: string, b: number]} barPara
 * @typedef {boolean} barRet
 * @typedef {import('./types').barPara} barPara2
 * @typedef {import('./types').barRet} barRet2 
 */

class Foo {
  constructor() { }

  // TS7006: Parameter 'a' implicitly has an 'any' type.
  // TS7006: Parameter 'b' implicitly has an 'any' type.
  /**
   * @type {import('./types').bar}
   */
  bar0(a, b) {
    void a;
    void b;
    return false;
  }

  // TS7006: Parameter 'a' implicitly has an 'any' type.
  // TS7006: Parameter 'b' implicitly has an 'any' type.
  /**
   * @type {bar}
   */
  bar1(a, b) {
    void a;
    void b;
    return false;
  }

  // a is typed as string, and b is typed as number,
  // everything type seems fine,
  // but this workaround is too long
  /**
   * @type {(...args:Parameters<bar>)=>ReturnType<bar>}
   */
  bar2(a, b) {
    void a;
    void b;
    return true;
  }

  // a is typed as string, and b is typed as number,
  // everything type seems fine,
  // but this workaround is also long
  /**
   * @type {(...args: barPara)=>barRet}
   */
  bar3(a, b) {
    void a;
    void b;
    return true;
  }

  // a is typed as string, and b is typed as number,
  // everything type seems fine,
  // but this workaround is also long
  /**
   * @type {(...args: barPara2)=>barRet2}
   */
  bar4(a, b) {
    void a;
    void b;
    return true;
  }

}
