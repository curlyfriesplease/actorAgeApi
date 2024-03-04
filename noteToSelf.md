{
"errorType": "SyntaxError",
"errorMessage": "Unexpected token N in JSON at position 0",
"trace": [
"SyntaxError: Unexpected token N in JSON at position 0",
" at JSON.parse (<anonymous>)",
" at Runtime.lambdaHandler [as handler] (/var/task/mainFunc.js:11:26)",
" at Runtime.handleOnceNonStreaming (file:///var/runtime/index.mjs:1173:29)"
]
}

This error the 'N' likely refers to the start of
eventBody = JSON.parse("NO EVENT BODY!!!" as string);
