function _0x416d(_0x35d83c, _0x2e1748) {
    const _0x4c26be = _0x4c26();
    return (
        (_0x416d = function (_0x416dbf, _0x393da2) {
            _0x416dbf = _0x416dbf - 0xd2;
            let _0x325f0c = _0x4c26be[_0x416dbf];
            return _0x325f0c;
        }),
        _0x416d(_0x35d83c, _0x2e1748)
    );
}
const _0x233e55 = _0x416d;
(function (_0xa20983, _0x30fc26) {
    const _0x40b1d1 = _0x416d,
        _0x1331f2 = _0xa20983();
    while (!![]) {
        try {
            const _0x367ce2 =
                -parseInt(_0x40b1d1(0xe1)) / 0x1 +
                -parseInt(_0x40b1d1(0xd9)) / 0x2 +
                parseInt(_0x40b1d1(0xd5)) / 0x3 +
                (-parseInt(_0x40b1d1(0xd4)) / 0x4) * (parseInt(_0x40b1d1(0xdb)) / 0x5) +
                parseInt(_0x40b1d1(0xea)) / 0x6 +
                (-parseInt(_0x40b1d1(0xe5)) / 0x7) * (-parseInt(_0x40b1d1(0xeb)) / 0x8) +
                (-parseInt(_0x40b1d1(0xe4)) / 0x9) * (-parseInt(_0x40b1d1(0xe8)) / 0xa);
            if (_0x367ce2 === _0x30fc26) break;
            else _0x1331f2["push"](_0x1331f2["shift"]());
        } catch (_0x2add11) {
            _0x1331f2["push"](_0x1331f2["shift"]());
        }
    }
})(_0x4c26, 0xa1f3e);
function _0x4c26() {
    const _0x455933 = [
        "./src/scripts/",
        "find",
        "10kSlkVM",
        "\x27\x20couldn\x27t\x20be\x20found!",
        "1501686roJcwf",
        "32MmtRUd",
        "./lexer/Lexer",
        "splice",
        "./constants/Constants",
        "utf-8",
        "1378792wjcBJF",
        "1453422tunwoT",
        "start",
        "Too\x20few\x20arguments!",
        "argv",
        "1287088mTMElG",
        "join",
        "10vqZlOE",
        "File\x20\x27",
        "split",
        "existsSync",
        "length",
        "includes",
        "831288dKLaqH",
        "shift",
        "readFileSync",
        "7306083bJIWrS",
        "2241827ENwLED",
    ];
    _0x4c26 = function () {
        return _0x455933;
    };
    return _0x4c26();
}
const fs = require("fs"),
    Lexer = require(_0x233e55(0xec)),
    { BasicError, SyntaxError, FileError, CommandError } = require("./errors/Errors");
function splitMulti(_0x3d3151, _0x5e5720) {
    const _0x3ad2d7 = _0x233e55;
    var _0x5c980c = _0x5e5720[0x0];
    for (var _0x518424 = 0x1; _0x518424 < _0x5e5720["length"]; _0x518424++) {
        _0x3d3151 = _0x3d3151["split"](_0x5e5720[_0x518424])[_0x3ad2d7(0xda)](_0x5c980c);
    }
    return (_0x3d3151 = _0x3d3151[_0x3ad2d7(0xdd)](_0x5c980c)), _0x3d3151;
}
const ArrayFunctions = {
        move: function (_0x31c1d5, _0xc9875) {
            const _0x1d5942 = _0x233e55;
            this[_0x1d5942(0xed)](_0xc9875, 0x0, this[_0x1d5942(0xed)](_0x31c1d5, 0x1)[0x0]);
        },
        getObject: function (_0xfd5fb, _0x2c0c4d, _0xf71458) {
            const _0x246bfc = _0x233e55;
            return _0xf71458
                ? this[_0x246bfc(0xe7)](_0x36c8ca => _0x36c8ca[_0xfd5fb][_0x246bfc(0xe0)](_0x2c0c4d))
                : this[_0x246bfc(0xe7)](_0x373c90 => _0x373c90[_0xfd5fb] === _0x2c0c4d);
        },
        remove: function (_0x46c5af) {
            const _0x2a953e = _0x233e55;
            this[_0x2a953e(0xed)](_0x46c5af, 0x1);
        },
    },
    Constants = require(_0x233e55(0xd2));
function main(_0x164f30) {
    const _0x2a11bd = _0x233e55;
    _0x164f30[_0x2a11bd(0xe2)](), _0x164f30[_0x2a11bd(0xe2)]();
    if (_0x164f30[_0x2a11bd(0xdf)] < 0x2) return console["log"](_0x2a11bd(0xd7));
    switch (_0x164f30[0x0]) {
        case "compile": {
            const _0x5ae299 = _0x2a11bd(0xe6) + _0x164f30[0x1];
            if (fs[_0x2a11bd(0xde)](_0x5ae299)) {
                const _0x37b3b = fs[_0x2a11bd(0xe3)](_0x5ae299, { encoding: _0x2a11bd(0xd3) }),
                    _0x3d3fc2 = splitMulti(_0x37b3b, [/\r?\n/]),
                    _0xce7a4 = new Lexer(_0x3d3fc2);
                _0xce7a4[_0x2a11bd(0xd6)]();
            } else return new FileError(_0x2a11bd(0xdc) + _0x5ae299 + _0x2a11bd(0xe9));
            break;
        }
    }
}
main(process[_0x233e55(0xd8)]);
