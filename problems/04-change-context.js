function changeContext(func, obj) {
  // Your code here
  let boundFunc = func.bind(obj);
  return boundFunc();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
