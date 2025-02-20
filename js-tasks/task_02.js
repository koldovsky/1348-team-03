//www.codewars.com/kata/dna-to-rna-conversion/train/javascript
/*------DNA to RNA Conversion------*/

/*-------- Yurii Komaniak---------*/

https: function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

/*------- Oleksandr Krasylnykov ------*/
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
