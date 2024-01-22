/// <reference path="fourslash.ts" />

////[|function f(a: number) {}|]
////
////const a = 1;
////const b = 1;
////f(a, b);

verify.codeFix({
    description: [ts.Diagnostics.Add_optional_parameter_to_0.message, "f"],
    index: 1,
    newRangeContent: "function f(a: number, b?: number) {}"
});
