(self.webpackJsonp=self.webpackJsonp||[]).push([[85],{"+Eiu":function(module,exports){module.exports=function(hljs){var LITERALS={literal:"true false null"},ALLOWED_COMMENTS=[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE],TYPES=[hljs.QUOTE_STRING_MODE,hljs.C_NUMBER_MODE],VALUE_CONTAINER={end:",",endsWithParent:!0,excludeEnd:!0,contains:TYPES,keywords:LITERALS},OBJECT={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE],illegal:"\\n"},hljs.inherit(VALUE_CONTAINER,{begin:/:/})].concat(ALLOWED_COMMENTS),illegal:"\\S"},ARRAY={begin:"\\[",end:"\\]",contains:[hljs.inherit(VALUE_CONTAINER)],illegal:"\\S"};return TYPES.push(OBJECT,ARRAY),ALLOWED_COMMENTS.forEach((function(rule){TYPES.push(rule)})),{contains:TYPES,keywords:LITERALS,illegal:"\\S"}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_json.00fe2c7ab394a9d28def.bundle.js.map