### What
Typescript not recognize jsdoc `@type` at all

### When
tsconfig.json have
- `strict`
- `allowJS`

JS have
- `// @ts-check`
- `@type {X}` on class method
- `@type {X}`, but X `(...args: TY)=>TZ` works

### Reproduce
```sh
$ git clone <repo>
$ pnpm install
$ pnpm test
```

### Expected
```js
  // a is typed as string, and b is typed as number
  /**
   * @type {bar}
   */
  bar1(a, b) {
    void a;
    void b;
    return false;
  }


  // a is typed as string, and b is typed as number
  /**
   * @type {(...args:Parameters<bar>)=>ReturnType<bar>}
   */
  bar2(a, b) {
    void a;
    void b;
    return true;
  }
```

### Actual
```js
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


  // a is typed as string, and b is typed as number
  /**
   * @type {(...args:Parameters<bar>)=>ReturnType<bar>}
   */
  bar2(a, b) {
    void a;
    void b;
    return true;
  }
```