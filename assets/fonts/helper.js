/**
* Returns the appropriate font family based on the weight.
* @param {string} baseFont - The desired font in case you're using something
different in your later projects
* @param {string} weight - The desired font weight(e.g., 'normal', 'bold', '600')
* @returns {string} - The appropriate font family for the platform.
*/
export const getFontFamily = (weight) => {
  const baseFont = "EuclidCircularB";
  switch (weight) {
    case "100":
      return `${baseFont}-Thin`;
    case "200":
      return `${baseFont}-ExtraLight`;
    case "300":
      return `${baseFont}-Light`;
    case "normal":
    case "400":
      return `${baseFont}-Regular`;
    case "500":
      return `${baseFont}-Medium`;
    case "600":
      return `${baseFont}-SemiBold`;
    case "bold":
    case "700":
      return `${baseFont}-Bold`;
    case "800":
      return `${baseFont}-ExtraBold`;
    case "900":
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
// Usage example in a stylesheet file
