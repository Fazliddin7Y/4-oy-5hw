let result; 

result = Number('324');        // 324
result = Number('324e-1');     // 32.4

result = Number(true);         // 1
result = Number(false);        // 0

result = Number(null);         // 0
result = Number(' ');          // 0

result = Number('hello');      // NaN
result = Number(undefined);    // NaN
result = Number(NaN);          // NaN

result = parseInt('20.01');    // 20
result = parseFloat('20.01');  // 20.01
result = +'20.01';             // 20.01 (stringdan raqamga oddiy o'zgartirish)
result = Math.floor('20.01');  // 20 (butun qismni oladi)

result = String(324);          // '324'
result = String(2 + 4);        // '6'

result = String(null);         // 'null'
result = String(undefined);    // 'undefined'
result = String(NaN);          // 'NaN'
result = String(true);         // 'true'
result = String(false);        // 'false'

result = (324).toString();     // '324'
result = true.toString();      // 'true'

result = Boolean('');          // false (bo'sh string false hisoblanadi)
result = Boolean(0);           // false (0 ham false hisoblanadi)
result = Boolean(undefined);   // false
result = Boolean(null);        // false
result = Boolean(NaN);         // false
