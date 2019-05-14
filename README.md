# Data Unit Converter

```javascript
const converter = require('data-unit-converter');

const gb_to_mb = converter(10, 'GB', 'MB');
console.log(gb_to_mb);
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
