var _0x2a1af7 = _0x1083;
function _0xbc32() {
    var _0x256c70 = [
        "6888560EiCzgV",
        "Invalid\x20Syntax",
        "54NMyOsz",
        "3010338lOMupL",
        "FileError",
        "SyntaxError",
        "Invalid\x20Command",
        "exports",
        "104474COrjpT",
        "2118NznIyX",
        "599626hWGFrB",
        "22796pFNjqT",
        "CommandError",
        "BasicError",
        "14882nAyeRr",
        "249790ohjuzC",
        "name",
        "Invalid\x20File",
        "log",
    ];
    _0xbc32 = function () {
        return _0x256c70;
    };
    return _0xbc32();
}
function _0x1083(_0x47e515, _0x444e61) {
    var _0xbc32fa = _0xbc32();
    return (
        (_0x1083 = function (_0x10838d, _0x168c8c) {
            _0x10838d = _0x10838d - 0x1d8;
            var _0x105261 = _0xbc32fa[_0x10838d];
            return _0x105261;
        }),
        _0x1083(_0x47e515, _0x444e61)
    );
}
(function (_0x236c1e, _0x5b29b5) {
    var _0xc9fd56 = _0x1083,
        _0x361c5c = _0x236c1e();
    while (!![]) {
        try {
            var _0x15d7e7 =
                -parseInt(_0xc9fd56(0x1e8)) / 0x1 +
                (-parseInt(_0xc9fd56(0x1e6)) / 0x2) * (-parseInt(_0xc9fd56(0x1e0)) / 0x3) +
                -parseInt(_0xc9fd56(0x1e9)) / 0x4 +
                -parseInt(_0xc9fd56(0x1da)) / 0x5 +
                (-parseInt(_0xc9fd56(0x1e7)) / 0x6) * (-parseInt(_0xc9fd56(0x1d9)) / 0x7) +
                -parseInt(_0xc9fd56(0x1de)) / 0x8 +
                parseInt(_0xc9fd56(0x1e1)) / 0x9;
            if (_0x15d7e7 === _0x5b29b5) break;
            else _0x361c5c["push"](_0x361c5c["shift"]());
        } catch (_0x40413d) {
            _0x361c5c["push"](_0x361c5c["shift"]());
        }
    }
})(_0xbc32, 0x7c3c9);
class BasicError {
    constructor(_0x5e6879, _0x5578fd) {
        var _0x298020 = _0x1083;
        (this[_0x298020(0x1db)] = _0x5e6879),
            (this["details"] = _0x5578fd),
            console[_0x298020(0x1dd)](this["name"] + ":\x20" + this["details"]);
    }
}
(module[_0x2a1af7(0x1e5)][_0x2a1af7(0x1d8)] = BasicError),
    (module[_0x2a1af7(0x1e5)][_0x2a1af7(0x1e2)] = class FileError extends BasicError {
        constructor(_0x2eb41d) {
            var _0x4f1830 = _0x2a1af7;
            super(_0x4f1830(0x1dc), _0x2eb41d);
        }
    }),
    (module[_0x2a1af7(0x1e5)][_0x2a1af7(0x1ea)] = class CommandError extends BasicError {
        constructor(_0x4504c0) {
            var _0x2aeb2f = _0x2a1af7;
            super(_0x2aeb2f(0x1e4), _0x4504c0);
        }
    }),
    (module[_0x2a1af7(0x1e5)][_0x2a1af7(0x1e3)] = class SyntaxError extends BasicError {
        constructor(_0x127b9f) {
            var _0x4b2427 = _0x2a1af7;
            super(_0x4b2427(0x1df), _0x127b9f);
        }
    });
