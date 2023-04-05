"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person5 = {
    first: "Thomas",
    last: "Edison",
    age: 5,
    twitter: "@tom"
};
var copyOfPerson = __assign(__assign({}, person5), { gender: "Male" });
console.log(copyOfPerson);
