const urls = require('../urls');

describe('URLS', () => {
  it('exists', () => {
    expect(urls).not.toBeNull();
  })
  it('should contain existing urls', () => {
    expect(urls).toEqual(expect.objectContaining({
      default: expect.objectContaining( {
        HOME: expect.objectContaining({
          isProtected: false
        }),
        LOGIN: expect.objectContaining({
          isProtected: false
        })
      })
    }))
  })
});