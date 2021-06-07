// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Best = require("../src/Best.bs.js");
var Jest = require("@glennsl/bs-jest/lib/js/src/jest.bs.js");

Jest.testAll("color contrasts", {
      hd: [
        "#ffffff",
        "#000000",
        "#ffffff",
        "#000000"
      ],
      tl: {
        hd: [
          "#ffffff",
          "#000000",
          "#000000",
          "#ffffff"
        ],
        tl: {
          hd: [
            "rgb(255,255,255)",
            "#000000",
            "#979798",
            "#000000"
          ],
          tl: {
            hd: [
              "rgb(255,255,255)",
              "#000000",
              "#fd8b56",
              "#000000"
            ],
            tl: {
              hd: [
                "hsl(0,0,100%)",
                "#000000",
                "#3e74b1",
                "hsl(0,0,100%)"
              ],
              tl: /* [] */0
            }
          }
        }
      }
    }, (function (param) {
        return Jest.Expect.toEqual(param[3], Jest.Expect.expect(Best.calculate(param[0], param[1], param[2])));
      }));

/*  Not a pure module */