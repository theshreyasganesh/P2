// Create a global function named MakeMultiFilter
function MakeMultiFilter(originalArray) {
    // Check if originalArray is an array
    if (!Array.isArray(originalArray)) {
      throw new Error('originalArray must be an array');
    }
  
    // Create a copy of originalArray as currentArray
    var currentArray = originalArray.slice();
  
    // Define the arrayFilterer function
    function arrayFilterer(filterCriteria, callback) {
      // Check if filterCriteria is a function
      if (typeof filterCriteria === 'function') {
        // Filter currentArray based on filterCriteria
        currentArray = currentArray.filter(filterCriteria);
      }
  
      // Check if callback is a function and call it with currentArray as an argument
      if (typeof callback === 'function') {
        callback.call(originalArray, currentArray);
      }
  
      // Return arrayFilterer to allow chaining or return currentArray if no filterCriteria provided
      return typeof filterCriteria === 'function' ? arrayFilterer : currentArray;
    }
  
    // Return the arrayFilterer function
    return arrayFilterer;
  }
  

  
