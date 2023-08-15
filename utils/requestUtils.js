
/**
 * Higher order function that consumes a function
 * that triggers a fetch to an API, parses the response
 * and returns the attribute containing the data
 * @param {function} requestFunction 
 * @returns 
 */
export const requestAndParse = async(requestFunction, attribute = null) => {
  try {
    const result = await requestFunction()
    const parsedResponse = await result.json()
    return parsedResponse[attribute]; 
  } catch (error) {
    throw new Error(error)
  }
}