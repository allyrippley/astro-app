export default class StringHelper {
  // See tests for desired format.
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

}
