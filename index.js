'use strict';

/**
 *
 * @param e - this element being clicked
 * @param textareaToInsert - name of textarea to insert
 */
module.exports = function(e, textareaToInsert) {
    let languageTextarea = document.getElementById(textareaToInsert);
    let languageTextareaValue = languageTextarea.value;

    const caretPosition = languageTextarea.selectionStart;
    const buttonValue = e.value;

    languageTextarea.value = languageTextareaValue.substring(0, caretPosition)
        + buttonValue
        + languageTextareaValue.substring(caretPosition)
    ;

    setCaretPosition(languageTextarea, caretPosition + buttonValue.length);
}

function setCaretPosition(elem, caretPos) {
    let range;

    if (elem.createTextRange) {
        range = elem.createTextRange();
        range.move('character', caretPos);
        range.select();
    } else {
        elem.focus();
        if (elem.selectionStart !== undefined) {
            elem.setSelectionRange(caretPos, caretPos);
        }
    }
}

