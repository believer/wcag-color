// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function hueToRgb(p, q, t) {
  if (t < 1.0 / 6.0) {
    return p + (q - p) * 6.0 * t;
  } else if (t < 0.5) {
    return q;
  } else if (t < 2.0 / 3.0) {
    return p + (q - p) * 6.0 * (2.0 / 3.0 - t);
  } else {
    return p;
  }
}

function createRgbFromHsl(h, s, l) {
  var hue = h / 3.6;
  var tempR = hue + 1.0 / 3.0;
  var tempB = hue - 1.0 / 3.0;
  var q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;
  var p = 2.0 * l - q;
  var b = tempB < 0 ? 0 : tempB;
  return [
          hueToRgb(p, q, tempR),
          hueToRgb(p, q, hue),
          hueToRgb(p, q, b)
        ];
}

function convert(hsl) {
  var hsl$1 = hsl.map(function (x) {
        return x / 100.0;
      });
  var tmp;
  if (hsl$1.length !== 3) {
    tmp = [];
  } else {
    var h = hsl$1[0];
    var s = hsl$1[1];
    if (s !== 0.0) {
      var l = hsl$1[2];
      tmp = h === 3.6 ? createRgbFromHsl(0, s, l) : createRgbFromHsl(h, s, l);
    } else {
      var l$1 = hsl$1[2];
      tmp = [
        l$1,
        l$1,
        l$1
      ];
    }
  }
  return tmp.map(function (x) {
              return x * 255.0;
            });
}

exports.hueToRgb = hueToRgb;
exports.createRgbFromHsl = createRgbFromHsl;
exports.convert = convert;
/* No side effect */
