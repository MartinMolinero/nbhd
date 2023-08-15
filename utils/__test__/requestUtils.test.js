const { requestAndParse } = require('../requestUtils');

describe('requestUtils', () => {

  describe('requestAndParse', () => {
    it('handles the happy path correctly', async () => {
      const mockFn = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          body: {
            exists: true
          }
        })
      })
      await expect(requestAndParse(mockFn, 'body')).resolves.toEqual({
        exists: true
      });
    })
    it('handles the error path correctly', async () => {
      const mockFn = jest.fn().mockRejectedValue('fetch failed')
      await expect(requestAndParse(mockFn, 'body')).rejects.toThrow(new Error('fetch failed'));
    })
  })
});