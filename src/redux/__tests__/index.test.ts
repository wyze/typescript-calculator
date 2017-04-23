import store from '../'

describe('reducers', () => {
  it('has correct state shape', () => {
    const actual = store.getState()
    const expected = {
      operations: [],
    }

    expect(actual).toEqual(expected)
  })
})
