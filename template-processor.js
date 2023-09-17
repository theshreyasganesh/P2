'use strict';

function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
    // Use a regular expression to find all instances of {{property}} in the template
    for (const property in dictionary){
        
    }


    const regex = /{{(.*?)}}/g;
    const filledTemplate = this.template.replace(regex, (match, property) => {
        // Check if the property exists in the dictionary





        if (Object.prototype.hasOwnProperty.call(dictionary, property)) {
            // Replace the property with its value from the dictionary
            return dictionary[property];
        } else {
            // If the property is not found, replace it with an empty string
            return '';
        }
    });

    return filledTemplate;
};

