const _0x1f9e19 = _0x8428;
function _0x8428(_0x2b65dd, _0xadf2f8) {
    const _0x460be9 = _0x460b();
    return (
        (_0x8428 = function (_0x8428e2, _0x5d9f58) {
            _0x8428e2 = _0x8428e2 - 0xa1;
            let _0x1b00d1 = _0x460be9[_0x8428e2];
            return _0x1b00d1;
        }),
        _0x8428(_0x2b65dd, _0xadf2f8)
    );
}
(function (_0xa6a3cb, _0x32b4bd) {
    const _0x5742f7 = _0x8428,
        _0x312de2 = _0xa6a3cb();
    while (!![]) {
        try {
            const _0x2a017d =
                -parseInt(_0x5742f7(0xb6)) / 0x1 +
                (parseInt(_0x5742f7(0xa7)) / 0x2) * (parseInt(_0x5742f7(0xb4)) / 0x3) +
                (-parseInt(_0x5742f7(0xb2)) / 0x4) * (-parseInt(_0x5742f7(0xa5)) / 0x5) +
                (parseInt(_0x5742f7(0xac)) / 0x6) * (parseInt(_0x5742f7(0xad)) / 0x7) +
                parseInt(_0x5742f7(0xaf)) / 0x8 +
                -parseInt(_0x5742f7(0xa3)) / 0x9 +
                (parseInt(_0x5742f7(0xb0)) / 0xa) * (-parseInt(_0x5742f7(0xb1)) / 0xb);
            if (_0x2a017d === _0x32b4bd) break;
            else _0x312de2["push"](_0x312de2["shift"]());
        } catch (_0x3dbc7c) {
            _0x312de2["push"](_0x312de2["shift"]());
        }
    }
})(_0x460b, 0x9a44c);
const fs = require("fs"),
    Lexer = require(_0x1f9e19(0xbb)),
    { BasicError, SyntaxError, FileError, CommandError } = require(_0x1f9e19(0xa9));
function splitMulti(_0x447c9b, _0x57d644) {
    const _0x4d14eb = _0x1f9e19;
    var _0x348761 = _0x57d644[0x0];
    for (var _0x1b62ae = 0x1; _0x1b62ae < _0x57d644["length"]; _0x1b62ae++) {
        _0x447c9b = _0x447c9b[_0x4d14eb(0xba)](_0x57d644[_0x1b62ae])["join"](_0x348761);
    }
    return (_0x447c9b = _0x447c9b["split"](_0x348761)), _0x447c9b;
}
const ArrayFunctions = {
        move: function (_0x360d6b, _0x1afc41) {
            const _0x5c346a = _0x1f9e19;
            this[_0x5c346a(0xa8)](_0x1afc41, 0x0, this[_0x5c346a(0xa8)](_0x360d6b, 0x1)[0x0]);
        },
        getObject: function (_0x4a9020, _0x27bc1e, _0x4d8950) {
            const _0x432c5c = _0x1f9e19;
            return _0x4d8950
                ? this[_0x432c5c(0xb5)](_0x290348 => _0x290348[_0x4a9020]["includes"](_0x27bc1e))
                : this[_0x432c5c(0xb5)](_0x48e959 => _0x48e959[_0x4a9020] === _0x27bc1e);
        },
        remove: function (_0x2fdd8f) {
            const _0x8c2b21 = _0x1f9e19;
            this[_0x8c2b21(0xa8)](_0x2fdd8f, 0x1);
        },
    },
    Constants = require(_0x1f9e19(0xb7));
function main(_0x17f148) {
    const _0x107108 = _0x1f9e19;
    _0x17f148[_0x107108(0xb9)](), _0x17f148[_0x107108(0xb9)]();
    if (_0x17f148[_0x107108(0xb8)] < 0x2) return console["log"](_0x107108(0xab));
    switch (_0x17f148[0x0]) {
        case _0x107108(0xa6): {
            const _0x549fa1 = "../src/scripts" + _0x17f148[0x1] + _0x107108(0xa2);
            if (fs[_0x107108(0xa4)](_0x549fa1)) {
                const _0x374b57 = fs["readFileSync"](_0x549fa1, { encoding: _0x107108(0xaa) }),
                    _0x3b8a94 = splitMulti(_0x374b57, [/\r?\n/]),
                    _0x5da4b2 = new Lexer(_0x3b8a94);
                _0x5da4b2[_0x107108(0xa1)]();
            } else return new FileError(_0x107108(0xbc) + _0x549fa1 + _0x107108(0xae));
            break;
        }
    }
}
function _0x460b() {
    const _0x1bb2d7 = [
        "Too\x20few\x20arguments!",
        "234xwfBDT",
        "105917nFYwbA",
        "\x27\x20couldn\x27t\x20be\x20found!",
        "6329368ItWjsv",
        "20DxwwPc",
        "12914396mLfALB",
        "4978612HPYUzq",
        "argv",
        "688182iamHJx",
        "find",
        "346480XtQkQc",
        "./constants/Constants",
        "length",
        "shift",
        "split",
        "./lexer/Lexer",
        "File\x20\x27",
        "start",
        ".troll",
        "1953657ciNMIu",
        "existsSync",
        "5xjLKYa",
        "compile",
        "8MXkILS",
        "splice",
        "./errors/Errors",
        "utf-8",
    ];
    _0x460b = function () {
        return _0x1bb2d7;
    };
    return _0x460b();
}
main(process[_0x1f9e19(0xb3)]);
