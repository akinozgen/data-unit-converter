# Data Unit Converter

```javascript
const converter = require('data-unit-converter');

const mb_to_gb = converter(10, 'MB', 'GB');
console.log(mb_to_gb);
```
> "10240"

Usage:

> converter(count : number, from : string, to : string) : number

Allowed Unit Types:
 * B (Byte)
 * KB (KiloByte)
 * MB (MegaByte)
 * GB (GigaByte)
 * TB (TeraByte)
 * b (bit)
 * Mb (MegaBit)
 * Kb (KiloBit)
 * Gb (MegaBit)
 * Tb (TeraBit)
