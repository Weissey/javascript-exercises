const ftoc = function(fConvToC) {
  let fFinal = (fConvToC - 32) * (5/9);
  fFinal = Math.round(fFinal * 10) / 10;
  return fFinal;
};

const ctof = function(cConvToF) {
  let cFinal = (cConvToF * (9/5) + 32);
  cFinal = Math.round(cFinal * 10) / 10;
  return cFinal;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
