const _0x2e83c9 = _0x3446;
(function (_0x1e43e2, _0x5c1619) {
    const _0x5c0bf6 = _0x3446,
        _0x577717 = _0x1e43e2();
    while (!![]) {
        try {
            const _0x570289 =
                parseInt(_0x5c0bf6(0x88)) / 0x1 +
                -parseInt(_0x5c0bf6(0x8c)) / 0x2 +
                -parseInt(_0x5c0bf6(0x7b)) / 0x3 +
                parseInt(_0x5c0bf6(0x89)) / 0x4 +
                (parseInt(_0x5c0bf6(0x77)) / 0x5) * (parseInt(_0x5c0bf6(0x8f)) / 0x6) +
                (-parseInt(_0x5c0bf6(0x8a)) / 0x7) * (-parseInt(_0x5c0bf6(0x73)) / 0x8) +
                -parseInt(_0x5c0bf6(0x83)) / 0x9;
            if (_0x570289 === _0x5c1619) break;
            else _0x577717["push"](_0x577717["shift"]());
        } catch (_0x295c60) {
            _0x577717["push"](_0x577717["shift"]());
        }
    }
})(_0x2900, 0xcb1f8);
const fs = require("fs"),
    Lexer = require(_0x2e83c9(0x7d)),
    { BasicError, SyntaxError, FileError, CommandError } = require(_0x2e83c9(0x80));
function splitMulti(_0x3e1378, _0x5886b2) {
    const _0x56328f = _0x2e83c9;
    var _0x4e8d43 = _0x5886b2[0x0];
    for (var _0x1b8e0b = 0x1; _0x1b8e0b < _0x5886b2[_0x56328f(0x8d)]; _0x1b8e0b++) {
        _0x3e1378 = _0x3e1378["split"](_0x5886b2[_0x1b8e0b])[_0x56328f(0x74)](_0x4e8d43);
    }
    return (_0x3e1378 = _0x3e1378[_0x56328f(0x87)](_0x4e8d43)), _0x3e1378;
}
const ArrayFunctions = {
        move: function (_0x272475, _0x3eebbf) {
            const _0x41c63c = _0x2e83c9;
            this[_0x41c63c(0x78)](_0x3eebbf, 0x0, this[_0x41c63c(0x78)](_0x272475, 0x1)[0x0]);
        },
        getObject: function (_0x4e50b1, _0x2e9153, _0x4c12f4) {
            const _0xe637d8 = _0x2e83c9;
            return _0x4c12f4
                ? this["find"](_0x12b0e2 => _0x12b0e2[_0x4e50b1][_0xe637d8(0x81)](_0x2e9153))
                : this[_0xe637d8(0x84)](_0x25faed => _0x25faed[_0x4e50b1] === _0x2e9153);
        },
        remove: function (_0x1de500) {
            this["splice"](_0x1de500, 0x1);
        },
    },
    Constants = require(_0x2e83c9(0x86));
function main(_0x8e497) {
    const _0x37d06a = _0x2e83c9;
    _0x8e497[_0x37d06a(0x85)](), _0x8e497["shift"]();
    if (_0x8e497[_0x37d06a(0x8d)] < 0x2) return console[_0x37d06a(0x82)](_0x37d06a(0x75));
    switch (_0x8e497[0x0]) {
        case _0x37d06a(0x7e): {
            const _0xbf8487 = _0x37d06a(0x79) + _0x8e497[0x1];
            if (fs[_0x37d06a(0x7f)](_0xbf8487)) {
                const _0x4b54bf = fs["readFileSync"](_0xbf8487, { encoding: _0x37d06a(0x7c) }),
                    _0x48a5e2 = splitMulti(_0x4b54bf, [/\r?\n/]),
                    _0x398efc = new Lexer(_0x48a5e2);
                _0x398efc[_0x37d06a(0x7a)]();
            } else return new FileError(_0x37d06a(0x8e) + _0xbf8487 + _0x37d06a(0x8b));
            break;
        }
    }
}
function _0x2900() {
    const _0x10a3d5 = [
        "shift",
        "./constants/Constants",
        "split",
        "385559fxqOlU",
        "3901392HOpoMs",
        "98YMDwvr",
        "\x27\x20couldn\x27t\x20be\x20found!",
        "431336xQsmCl",
        "length",
        "File\x20\x27",
        "60ROAdix",
        "287768bZKDXF",
        "join",
        "Too\x20few\x20arguments!",
        "argv",
        "107510VxsosV",
        "splice",
        "../src/scripts/",
        "start",
        "607971EqFUhH",
        "utf-8",
        "./lexer/Lexer",
        "compile",
        "existsSync",
        "./errors/Errors",
        "includes",
        "log",
        "7462836TtEOWC",
        "find",
    ];
    _0x2900 = function () {
        return _0x10a3d5;
    };
    return _0x2900();
}
function _0x3446(_0x24235d, _0x17d288) {
    const _0x2900b7 = _0x2900();
    return (
        (_0x3446 = function (_0x344663, _0x5bcdf1) {
            _0x344663 = _0x344663 - 0x73;
            let _0x2d7a7d = _0x2900b7[_0x344663];
            return _0x2d7a7d;
        }),
        _0x3446(_0x24235d, _0x17d288)
    );
}
main(process[_0x2e83c9(0x76)]);
