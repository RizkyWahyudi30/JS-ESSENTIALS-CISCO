"use strict";

height = 212;
console.log(height);

// if we dont use strict mode, it will running like a normal code
// but we use strict mode, it will show an error

// here are a explanation by Cisco Lessons :
```
At the beginning of our code, we’ve added "use strict";. This statement has radically changed the behavior of the interpreter. Why? We use it when we want to force the interpreter to behave according to modern JavaScript standards. So, as long as you aren’t running some really old code, you should always use it. And this time, using a variable without its previous declaration is treated as an error.

The sentence "use strict"; must be placed at the very beginning of the code. It will cause the interpreter to deal with the rest of the code using strict mode, which is the modern JavaScript standard. All further examples in our course will be prepared to work in this mode by default, even if "use strict"; does not always appear at the beginning of the code.
```;
