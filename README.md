# P2
Project 2 - Software System Design and Implementation - Team STANN

# Project 2



# Problem 1 - Make Multi Filter
make-multi-filter.js implements a MakeMultiFilter function that takes an array and returns a function that can filter that array multiple times. MakeMultiFilter returns a function that keeps track of a currentArray that is initialized to the original array.

The returned function takes a filterCriteria function and a callback. filterCriteria is used to filter elements out of the currentArray by returning false for elements to remove. callback is a function called after filtering that is passed the filtered currentArray.

The returned function supports chaining multiple filters and maintains independent state for each returned function instance.

# Problem 2 - Template Processor
template-processor.js implements a TemplateProcessor class. An instance is constructed with a template string that contains placeholders like {{property}}. The fillIn method takes a dictionary object and returns the template with placeholders replaced by the matching property values from the dictionary.

# Problem 3 - Fix Namespace Pollution
Modifies test-project2.js to use an IIFE (Immediately Invoked Function Expression) to avoid polluting the global namespace with symbols. Allows the tests to still run against the implementations in project 2 while avoiding namespace clashes with other scripts.

Testing
The projects can be linting and testing using:

npm install  <br>
npm run lint  <br>
npm test  <br>
This will install ESLint, run linting on the JavaScript files, and execute the test suite in test-project2.js.
