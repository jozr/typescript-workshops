import { var1Boolean, var2Decimal, var3Array, var4Function, var5Object } from './index'

describe('Gimme It', () => {
  // Export var1Boolean variable of boolean type with value true.
  xit('Boolean', () => {
    expect(var1Boolean).toEqual(true)
  })

  // Export var2Decimal variable of numeric type with decimal value 13.
  xit('Number', () => {
    expect(var2Decimal).toEqual(13)
  })

  // Export var3Array variable of Array<number | string | object> type with value [1, 'test', {a: 3}, 4, 5].
  xit('Array', () => {
    expect(var3Array).toEqual([1, 'test', { a: 3 }, 4, 5])
  })

  // Export var4Function function that accepts a string and returns void.
  xit('Function', () => {
    expect(var4Function('hello world')).toBeUndefined
  })

  // Export var5Object object that defined by an interface.
  xit('Object', () => {
    expect(var5Object()).toEqual({
      var1Boolean: true,
      var2Decimal: 13,
      var3Array: [1, 'test', { a: 3 }, 4, 5],
      var4Function: undefined
    })
  })
})
