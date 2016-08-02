export default class StringHelper {
  // See tests for desired format.
  static capitalize(string) {
    let newStr = ""
    if (string) {
      newStr = string.charAt(0).toUpperCase() + string.slice(1)
    }
    return newStr
  }

}
