/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  if (length < str.length && length == 0){
    let res = str.substring(str.length - replacer.length, 0);
    return res + replacer;
  }else if (length < str.length){
    let res = str.substring(0, length - replacer.length);
    return res + replacer;
  }else {
    return str;
  } 
};

export default truncate;
