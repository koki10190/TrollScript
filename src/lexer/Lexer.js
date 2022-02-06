const _0x4d6942 = _0x4d2f;
(function (_0x3c4897, _0x5a7085) {
    const _0x53d890 = _0x4d2f,
        _0x1fd2fc = _0x3c4897();
    while (!![]) {
        try {
            const _0xa9aaa5 =
                parseInt(_0x53d890(0x1a6)) / 0x1 +
                (parseInt(_0x53d890(0x18c)) / 0x2) * (-parseInt(_0x53d890(0x192)) / 0x3) +
                (-parseInt(_0x53d890(0x1a7)) / 0x4) * (parseInt(_0x53d890(0x1a9)) / 0x5) +
                -parseInt(_0x53d890(0x17f)) / 0x6 +
                (-parseInt(_0x53d890(0x18f)) / 0x7) * (parseInt(_0x53d890(0x1a1)) / 0x8) +
                (-parseInt(_0x53d890(0x193)) / 0x9) * (parseInt(_0x53d890(0x162)) / 0xa) +
                (parseInt(_0x53d890(0x18b)) / 0xb) * (parseInt(_0x53d890(0x151)) / 0xc);
            if (_0xa9aaa5 === _0x5a7085) break;
            else _0x1fd2fc["push"](_0x1fd2fc["shift"]());
        } catch (_0x141430) {
            _0x1fd2fc["push"](_0x1fd2fc["shift"]());
        }
    }
})(_0xc5dc, 0x361e8);
const Constants = require(_0x4d6942(0x18d)),
    readline = require("readline"),
    math = require(_0x4d6942(0x197)),
    { SyntaxError } = require("../errors/Errors"),
    variables = {},
    functions = {},
    windows = {};
let paused = ![];
const { app, BrowserWindow, ipcMain } = require(_0x4d6942(0x15c));
class Electron {
    [_0x4d6942(0x155)](_0x760b11, _0x1498e7, _0x13f848, _0x10e944, _0x139fff, _0x335427) {
        const _0x43052d = _0x4d6942;
        app["on"](_0x43052d(0x186), () => {
            window = new BrowserWindow({
                minHeight: _0x1498e7 || null,
                minWidth: _0x760b11 || null,
                maxHeight: _0x10e944 || null,
                maxWidth: _0x13f848 || null,
                autoHideMenuBar: !![],
                frame: _0x139fff,
                icon: _0x335427,
                webPreferences: { nodeIntegration: !![], contextIsolation: ![] },
            });
        });
    }
    [_0x4d6942(0x173)](_0x56b4c3) {
        const _0x31fdbb = _0x4d6942;
        app["on"](_0x31fdbb(0x186), () => {
            const _0x2aef4d = _0x31fdbb;
            window[_0x2aef4d(0x173)](_0x56b4c3);
        });
    }
    ["loadURL"](_0x5b57b1) {
        app["on"]("ready", () => {
            const _0x284140 = _0x4d2f;
            window[_0x284140(0x172)](_0x5b57b1);
        });
    }
    [_0x4d6942(0x16b)](_0x5e845a, _0x238316, ..._0xc81686) {
        const _0xf01f9b = _0x4d6942;
        console["log"](_0x5e845a["replace"](/"/g, "")),
            ipcMain[_0xf01f9b(0x1b0)](_0x5e845a[_0xf01f9b(0x157)](/"/g, ""), (_0xd0c8b9, ..._0x2e6911) => {
                const _0x4d7de0 = _0xf01f9b,
                    _0x39ed6e = new Lexer(_0x238316);
                _0x39ed6e[_0x4d7de0(0x183)]();
            });
    }
}
let window;
const Handler = new Electron();
function askQuestion(_0x36a837) {
    const _0x1184a1 = _0x4d6942,
        _0x3b3878 = readline[_0x1184a1(0x15f)]({ input: process[_0x1184a1(0x18a)], output: process[_0x1184a1(0x16d)] });
    return new Promise(_0x1f337a =>
        _0x3b3878["question"](_0x36a837, _0x249d1a => {
            const _0xc07c61 = _0x1184a1;
            _0x3b3878[_0xc07c61(0x15d)](), _0x1f337a(_0x249d1a);
        })
    );
}
function splitMulti(_0x2def9d, _0x107eff) {
    const _0xb339cf = _0x4d6942;
    var _0x3ae647 = _0x107eff[0x0];
    for (var _0x4266f0 = 0x1; _0x4266f0 < _0x107eff[_0xb339cf(0x166)]; _0x4266f0++) {
        _0x2def9d = _0x2def9d[_0xb339cf(0x194)](_0x107eff[_0x4266f0])[_0xb339cf(0x161)](_0x3ae647);
    }
    return (_0x2def9d = _0x2def9d[_0xb339cf(0x194)](_0x3ae647)), _0x2def9d;
}
function changeStringToVariable(_0x429270) {
    return (
        (newVal = _0x429270["replace"](/\${(.*?)}/g, _0x3b549c => {
            const _0x5b5131 = _0x4d2f,
                _0x2d3961 = _0x3b549c[_0x5b5131(0x198)](0x2, _0x3b549c["toString"]()[_0x5b5131(0x166)] - 0x1),
                _0x1eab6a = _0x2d3961["split"](".");
            return variables[_0x1eab6a[0x0]][_0x5b5131(0x1ac)];
        })),
        newVal
    );
}
function getVariableName(_0x6cfa2a) {
    const _0x292393 = _0x4d6942,
        _0x5883c4 = _0x6cfa2a;
    let _0x3b5e85 = _0x5883c4[_0x292393(0x194)]("\x20"),
        _0x27ddd9;
    _0x3b5e85[0x0] == "" && (_0x3b5e85[_0x292393(0x19a)](), (_0x27ddd9 = _0x3b5e85), (_0x3b5e85 = []));
    for (let _0x1c1d18 = 0x0; _0x1c1d18 < _0x27ddd9?.[_0x292393(0x166)]; _0x1c1d18++) {
        _0x27ddd9[_0x1c1d18] && _0x3b5e85[_0x292393(0x19d)](_0x27ddd9[_0x1c1d18]);
    }
    if (_0x3b5e85[_0x292393(0x166)] <= 0x0) return;
    if (
        !_0x3b5e85[0x0][_0x292393(0x1b2)](Constants[_0x292393(0x154)]["VARIABLES"][_0x292393(0x1a8)]) &&
        !_0x3b5e85[0x0][_0x292393(0x1b2)](Constants[_0x292393(0x154)][_0x292393(0x182)][_0x292393(0x185)]) &&
        !_0x3b5e85[0x0][_0x292393(0x1b2)](Constants[_0x292393(0x154)][_0x292393(0x182)][_0x292393(0x1ae)]) &&
        !_0x3b5e85[0x0]["includes"](Constants[_0x292393(0x154)][_0x292393(0x182)]["BOOLEAN"]) &&
        !_0x3b5e85[0x0][_0x292393(0x1b2)](Constants[_0x292393(0x154)][_0x292393(0x182)][_0x292393(0x19e)]) &&
        !_0x3b5e85[0x0][_0x292393(0x1b2)](Constants[_0x292393(0x154)]["VARIABLES"][_0x292393(0x16c)])
    )
        return;
    let _0x43e89d,
        _0x7fecf2,
        _0x1e493f,
        _0x571d49,
        _0x3c4e47 = ![];
    (_0x43e89d = _0x3b5e85[0x0] || null),
        (_0x1e493f = _0x3b5e85[0x1] || null),
        (_0x7fecf2 = _0x3b5e85[_0x292393(0x198)](0x3)[_0x292393(0x161)]("\x20")[_0x292393(0x157)](";", ""));
    switch (_0x43e89d) {
        case Constants[_0x292393(0x154)]["VARIABLES"]["INT"]: {
            if (variables[_0x7fecf2[_0x292393(0x157)](/ /g, "")]) return;
            if (isNaN(_0x7fecf2)) throw new SyntaxError(_0x292393(0x16f));
            else {
                if (_0x7fecf2["includes"](".")) throw new SyntaxError(_0x292393(0x164));
            }
            break;
        }
        case Constants[_0x292393(0x154)][_0x292393(0x182)]["STRING"]: {
            if (variables[_0x7fecf2[_0x292393(0x157)](/ /g, "")]) return;
            if (!isNaN(_0x7fecf2)) throw new SyntaxError(_0x292393(0x17e));
            else {
                if (!_0x7fecf2["includes"]("\x22"))
                    throw new SyntaxError("To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22");
            }
            break;
        }
        case Constants[_0x292393(0x154)][_0x292393(0x182)]["BOOLEAN"]: {
            if (variables[_0x7fecf2[_0x292393(0x157)](/ /g, "")]) return;
            if (_0x7fecf2 != "true" && _0x7fecf2 != _0x292393(0x1b1)) throw new SyntaxError(_0x292393(0x15a));
            break;
        }
        case Constants["SYSTEM"][_0x292393(0x182)][_0x292393(0x16c)]: {
            if (variables[_0x7fecf2[_0x292393(0x157)](/ /g, "")]) return;
            if (_0x7fecf2[_0x292393(0x166)] > 0x1 && !_0x7fecf2[_0x292393(0x1b2)]("\x22"))
                throw new SyntaxError(_0x292393(0x1a5));
            else {
                if (_0x7fecf2[_0x292393(0x157)](/"/g, "")[_0x292393(0x166)] > 0x1) throw new SyntaxError(_0x292393(0x174));
                else {
                    if (!isNaN(_0x7fecf2)) throw new SyntaxError(_0x292393(0x17e));
                    else {
                        if (!_0x7fecf2[_0x292393(0x1b2)]("\x22")) throw new SyntaxError(_0x292393(0x171));
                    }
                }
            }
            break;
        }
        case Constants[_0x292393(0x154)][_0x292393(0x182)][_0x292393(0x1a8)]: {
            if (variables[_0x7fecf2[_0x292393(0x157)](/ /g, "")]) return;
            if (isNaN(_0x7fecf2) && !_0x7fecf2[_0x292393(0x1b2)]("\x22")) throw new SyntaxError(_0x292393(0x171));
            break;
        }
    }
    _0x43e89d === Constants["SYSTEM"][_0x292393(0x182)][_0x292393(0x17b)] &&
        (_0x7fecf2 = JSON[_0x292393(0x1ab)](
            _0x3b5e85[_0x292393(0x198)](0x3)[_0x292393(0x161)]("\x20")[_0x292393(0x157)](";", "")
        ));
    if (_0x7fecf2 == !![] || _0x7fecf2 == ![]) _0x571d49 = Constants[_0x292393(0x154)][_0x292393(0x152)][_0x292393(0x17b)];
    else {
        if (_0x7fecf2[_0x292393(0x1b2)]("\x22")) _0x571d49 = Constants["SYSTEM"][_0x292393(0x152)][_0x292393(0x1ae)];
        else {
            if (_0x7fecf2[_0x292393(0x1b2)](".")) _0x571d49 = Constants[_0x292393(0x154)][_0x292393(0x152)][_0x292393(0x19e)];
            else {
                if (isNaN(_0x7fecf2)) _0x571d49 = Constants[_0x292393(0x154)][_0x292393(0x152)][_0x292393(0x17a)];
                else _0x571d49 = Constants[_0x292393(0x154)][_0x292393(0x152)][_0x292393(0x185)];
            }
        }
    }
    if (_0x7fecf2 && _0x7fecf2 != ![] && _0x7fecf2 != !![]) {
        if (variables[_0x7fecf2[_0x292393(0x157)](/ /g, "")])
            _0x7fecf2 = variables[_0x7fecf2[_0x292393(0x157)](/ /g, "")][_0x292393(0x1ac)];
    }
    variables[_0x1e493f] = { value: _0x7fecf2, extension: _0x43e89d, type: _0x571d49 };
    if (_0x7fecf2 == !![] || _0x7fecf2 == ![]) return;
    if (!isNaN(_0x7fecf2)) variables[_0x1e493f][_0x292393(0x1ac)] = parseInt(_0x7fecf2);
    _0x7fecf2[_0x292393(0x1b2)](".") && (variables[_0x1e493f][_0x292393(0x1ac)] = parseFloat(_0x7fecf2));
}
function getIfStatement(_0x24cc5e) {
    const _0x35cd0e = _0x4d6942,
        _0x34c483 = _0x24cc5e["split"](":");
    if (_0x34c483[_0x35cd0e(0x166)] <= 0x1) return;
    if (_0x34c483[0x0][_0x35cd0e(0x157)](/ /g, "") != Constants["IF"]) return;
    const _0x352c3d = _0x34c483[0x3][_0x35cd0e(0x194)](">>");
    let _0x2b728a =
            variables[_0x34c483[0x1][_0x35cd0e(0x157)](/ /g, "")]?.[_0x35cd0e(0x1ac)] || _0x34c483[0x1]["replace"](/ /g, ""),
        _0xee53dc = _0x34c483[0x2]["replace"](/ /g, ""),
        _0x361010 =
            variables[_0x352c3d[0x0][_0x35cd0e(0x157)](/ /g, "")]?.["value"] || _0x352c3d[0x0][_0x35cd0e(0x157)](/ /g, ""),
        _0x2d7ee5 = _0x352c3d[0x1][_0x35cd0e(0x157)](/{|}/g, "")[_0x35cd0e(0x194)](";"),
        _0x13470b = ![];
    if (!isNaN(_0x361010)) _0x361010 = parseFloat(_0x361010);
    if (!isNaN(_0x2b728a)) _0x2b728a = parseFloat(_0x2b728a);
    (variables[_0x34c483[0x1][_0x35cd0e(0x157)](/ /g, "")]?.["value"] === !![] ||
        variables[_0x34c483[0x1][_0x35cd0e(0x157)](/ /g, "")]?.["value"] === ![]) &&
        (_0x2b728a = variables[_0x34c483[0x1][_0x35cd0e(0x157)](/ /g, "")]?.["value"]);
    (variables[_0x352c3d[0x0]["replace"](/ /g, "")]?.["value"] === !![] ||
        variables[_0x352c3d[0x0][_0x35cd0e(0x157)](/ /g, "")]?.["value"] === ![]) &&
        (_0x361010 = variables[_0x352c3d[0x0][_0x35cd0e(0x157)](/ /g, "")]?.[_0x35cd0e(0x1ac)]);
    if (_0x2b728a == _0x35cd0e(0x1b1) || _0x2b728a == _0x35cd0e(0x1aa)) _0x2b728a = JSON[_0x35cd0e(0x1ab)](_0x2b728a);
    if (_0x361010 == _0x35cd0e(0x1b1) || _0x361010 == _0x35cd0e(0x1aa)) _0x361010 = JSON["parse"](_0x361010);
    switch (_0xee53dc) {
        case "==": {
            if (_0x2b728a == _0x361010) _0x13470b = !![];
            break;
        }
        case _0x35cd0e(0x156): {
            if (_0x2b728a === _0x361010) _0x13470b = !![];
            break;
        }
        case "!=": {
            if (_0x2b728a != _0x361010) _0x13470b = !![];
            break;
        }
        case "!==": {
            if (_0x2b728a !== _0x361010) _0x13470b = !![];
            break;
        }
        case "<=": {
            if (_0x2b728a <= _0x361010) _0x13470b = !![];
            break;
        }
        case ">=": {
            if (_0x2b728a >= _0x361010) _0x13470b = !![];
            break;
        }
        case ">": {
            if (_0x2b728a > _0x361010) _0x13470b = !![];
            break;
        }
        case "<": {
            if (_0x2b728a < _0x361010) _0x13470b = !![];
            break;
        }
    }
    if (_0x13470b) {
        const _0x5d863d = new Lexer(_0x2d7ee5);
        _0x5d863d[_0x35cd0e(0x183)]();
    }
}
function _0x4d2f(_0x236134, _0x134888) {
    const _0xc5dc7b = _0xc5dc();
    return (
        (_0x4d2f = function (_0x4d2fbb, _0x10bc40) {
            _0x4d2fbb = _0x4d2fbb - 0x151;
            let _0x291e7b = _0xc5dc7b[_0x4d2fbb];
            return _0x291e7b;
        }),
        _0x4d2f(_0x236134, _0x134888)
    );
}
function getWhileStatement(_0x12514f) {
    const _0x1ee02a = _0x4d6942,
        _0x552eb0 = _0x12514f[_0x1ee02a(0x194)](":");
    if (_0x552eb0["length"] <= 0x1) return;
    if (_0x552eb0[0x0][_0x1ee02a(0x157)](/ /g, "") != Constants["WHILE"]) return;
    const _0x177cab = _0x552eb0[0x3][_0x1ee02a(0x194)](">>");
    let _0x3ddffb =
            variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] || _0x552eb0[0x1]["replace"](/ /g, ""),
        _0x3e27c1 = _0x552eb0[0x2][_0x1ee02a(0x157)](/ /g, ""),
        _0x21bb1f = variables[_0x177cab[0x0]["replace"](/ /g, "")]?.[_0x1ee02a(0x1ac)] || _0x177cab[0x0]["replace"](/ /g, ""),
        _0x5b33b1 = _0x177cab[0x1]["replace"](/{|}/g, "")[_0x1ee02a(0x194)](";");
    if (!isNaN(_0x21bb1f)) _0x21bb1f = parseFloat(_0x21bb1f);
    if (!isNaN(_0x3ddffb)) _0x3ddffb = parseFloat(_0x3ddffb);
    (variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] === !![] ||
        variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.["value"] === ![]) &&
        (_0x3ddffb = variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)]);
    (variables[_0x177cab[0x0]["replace"](/ /g, "")]?.[_0x1ee02a(0x1ac)] === !![] ||
        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] === ![]) &&
        (_0x21bb1f = variables[_0x177cab[0x0]["replace"](/ /g, "")]?.[_0x1ee02a(0x1ac)]);
    if (_0x3ddffb == _0x1ee02a(0x1b1) || _0x3ddffb == _0x1ee02a(0x1aa)) _0x3ddffb = JSON["parse"](_0x3ddffb);
    if (_0x21bb1f == _0x1ee02a(0x1b1) || _0x21bb1f == _0x1ee02a(0x1aa)) _0x21bb1f = JSON[_0x1ee02a(0x1ab)](_0x21bb1f);
    switch (_0x3e27c1) {
        case "==": {
            while (_0x3ddffb == _0x21bb1f) {
                const _0x5cbd02 = new Lexer(_0x5b33b1);
                _0x5cbd02["start"](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1]["replace"](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x177cab[0x0][_0x1ee02a(0x157)](/ /g, ""));
            }
            break;
        }
        case _0x1ee02a(0x156): {
            while (_0x3ddffb === _0x21bb1f) {
                const _0x33701d = new Lexer(_0x5b33b1);
                _0x33701d["start"](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x177cab[0x0][_0x1ee02a(0x157)](/ /g, ""));
            }
            break;
        }
        case "!=": {
            while (_0x3ddffb != _0x21bb1f) {
                const _0xa5d6e = new Lexer(_0x5b33b1);
                _0xa5d6e[_0x1ee02a(0x183)](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x177cab[0x0][_0x1ee02a(0x157)](/ /g, ""));
            }
            break;
        }
        case _0x1ee02a(0x181): {
            while (_0x3ddffb !== _0x21bb1f) {
                const _0x563326 = new Lexer(_0x5b33b1);
                _0x563326[_0x1ee02a(0x183)](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1]["replace"](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.["value"] ||
                        _0x177cab[0x0][_0x1ee02a(0x157)](/ /g, ""));
            }
            break;
        }
        case "<=": {
            while (_0x3ddffb <= _0x21bb1f) {
                const _0x216ed2 = new Lexer(_0x5b33b1);
                _0x216ed2[_0x1ee02a(0x183)](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.["value"] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x177cab[0x0]["replace"](/ /g, ""));
            }
            break;
        }
        case ">=": {
            while (_0x3ddffb >= _0x21bb1f) {
                const _0x1e3cc1 = new Lexer(_0x5b33b1);
                _0x1e3cc1[_0x1ee02a(0x183)](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x177cab[0x0][_0x1ee02a(0x157)](/ /g, ""));
            }
            break;
        }
        case ">": {
            while (_0x3ddffb > _0x21bb1f) {
                const _0x269160 = new Lexer(_0x5b33b1);
                _0x269160[_0x1ee02a(0x183)](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x177cab[0x0][_0x1ee02a(0x157)](/ /g, ""));
            }
            break;
        }
        case "<": {
            while (_0x3ddffb < _0x21bb1f) {
                const _0x5f44a4 = new Lexer(_0x5b33b1);
                _0x5f44a4["start"](),
                    (_0x3ddffb =
                        variables[_0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x552eb0[0x1][_0x1ee02a(0x157)](/ /g, "")),
                    (_0x21bb1f =
                        variables[_0x177cab[0x0][_0x1ee02a(0x157)](/ /g, "")]?.[_0x1ee02a(0x1ac)] ||
                        _0x177cab[0x0][_0x1ee02a(0x157)](/ /g, ""));
            }
            break;
        }
    }
}
function getForStatement(_0x42bffb) {
    const _0x2095f4 = _0x4d6942,
        _0x1bf6fc = _0x42bffb[_0x2095f4(0x194)](":");
    if (_0x1bf6fc["length"] <= 0x1) return;
    if (_0x1bf6fc[0x0][_0x2095f4(0x157)](/ /g, "") != Constants[_0x2095f4(0x16e)]) return;
    const _0x471f74 = _0x1bf6fc[0x1][_0x2095f4(0x194)](">>"),
        _0x5dccab = _0x471f74[0x1][_0x2095f4(0x157)](/{|}/g, "")[_0x2095f4(0x194)](";"),
        _0x56e3de = parseInt(_0x1bf6fc[0x1]);
    for (let _0x5024c6 = 0x0; _0x5024c6 < _0x56e3de; _0x5024c6++) {
        const _0x47068b = new Lexer(_0x5dccab);
        _0x47068b[_0x2095f4(0x183)]();
    }
}
function getFunctions(_0xe6d0a7) {
    const _0x691af0 = _0x4d6942,
        _0x3b099e = _0xe6d0a7[_0x691af0(0x194)](_0x691af0(0x18e));
    if (_0x3b099e[0x0] !== Constants[_0x691af0(0x1ad)]) return;
    if (_0x3b099e[0x2] === _0x691af0(0x153)) _0x3b099e[0x2] = null;
    if (_0x3b099e[_0x691af0(0x166)] < 0x4)
        throw new SyntaxError("Function\x20name,\x20arguments\x20or\x20callback\x20is\x20missing!");
    let _0x4de3bc = {
        funcType: _0x3b099e[0x0],
        funcName: _0x3b099e[0x1],
        arguments: _0x3b099e[0x2] ? _0x3b099e[0x2][_0x691af0(0x194)](",\x20") : null,
        callback: _0x3b099e[0x3][_0x691af0(0x157)](/{|}/g, "")[_0x691af0(0x194)](/;/g),
    };
    functions[_0x4de3bc[_0x691af0(0x175)]] = _0x4de3bc;
}
function getCalledFunction(_0xb63309) {
    const _0x2eeb3d = _0x4d6942,
        _0x4d1c52 = _0xb63309[_0x2eeb3d(0x194)](_0x2eeb3d(0x18e));
    if (_0x4d1c52[0x0] !== Constants[_0x2eeb3d(0x163)]) return;
    if (_0x4d1c52[_0x2eeb3d(0x166)] < 0x3) throw new SyntaxError(_0x2eeb3d(0x191));
    if (functions[_0x4d1c52[0x1]]["arguments"])
        for (const _0x1ce11e of functions[_0x4d1c52[0x1]]["arguments"]) {
            if (_0x1ce11e == null) return (args = null);
            const _0x12d4f3 = _0x4d1c52[0x2][_0x2eeb3d(0x157)](/\(|\)/g, "")[_0x2eeb3d(0x194)](",\x20");
            for (const _0x53dff1 in functions[_0x4d1c52[0x1]][_0x2eeb3d(0x19f)]) {
                variables[functions[_0x4d1c52[0x1]][_0x2eeb3d(0x19f)][_0x53dff1]] = {
                    value: _0x12d4f3[_0x53dff1][_0x2eeb3d(0x157)](/"/g, ""),
                    extension: _0x2eeb3d(0x184),
                    type: "any",
                };
            }
        }
    const _0x549532 = new Lexer(functions[_0x4d1c52[0x1]][_0x2eeb3d(0x199)]);
    _0x549532[_0x2eeb3d(0x183)]();
}
function getMath(_0x18b8c5) {
    const _0x4369e0 = _0x4d6942,
        _0x119cec = _0x18b8c5[_0x4369e0(0x194)](_0x4369e0(0x158));
    if (_0x119cec[0x0] !== Constants["MATH"]) return;
    if (_0x119cec < 0x3) throw new SyntaxError(_0x4369e0(0x179));
    const _0x34e3f8 = changeStringToVariable(_0x119cec[0x2]["replace"](/;/g, "")),
        _0x43dbf8 = math[_0x4369e0(0x169)](_0x34e3f8);
    variables[_0x119cec[0x1]] = { value: _0x43dbf8, extension: _0x4369e0(0x1a2), type: _0x4369e0(0x1a2) };
}
function getSetVar(_0x2c4ad1) {
    const _0x15c00a = _0x4d6942,
        _0x554f3a = _0x2c4ad1[_0x15c00a(0x194)]("\x20");
    if (_0x554f3a[0x0] == "") _0x554f3a["shift"]();
    if (_0x554f3a[_0x15c00a(0x166)] <= 0x0) return;
    if (_0x554f3a[0x0]["replace"](/ /g, "") !== Constants[_0x15c00a(0x180)]) return;
    const _0x555bae = _0x554f3a[0x1];
    let _0x3b26bd = _0x554f3a[_0x15c00a(0x198)](0x3)[_0x15c00a(0x161)]("\x20");
    if (!variables[_0x555bae]) throw new SyntaxError(_0x15c00a(0x188) + _0x555bae + _0x15c00a(0x177));
    isNaN(_0x3b26bd)
        ? (variables[_0x555bae]["value"] = _0x3b26bd)
        : (variables[_0x555bae][_0x15c00a(0x1ac)] = parseFloat(_0x3b26bd));
    if (variables[_0x3b26bd[_0x15c00a(0x157)](/ /g, "")])
        variables[_0x555bae][_0x15c00a(0x1ac)] = variables[_0x3b26bd[_0x15c00a(0x157)](/ /g, "")][_0x15c00a(0x1ac)];
    switch (variables[_0x555bae]["extension"]) {
        case Constants["SYSTEM"][_0x15c00a(0x182)][_0x15c00a(0x185)]: {
            if (variables[_0x3b26bd[_0x15c00a(0x157)](/ /g, "")]) return;
            if (isNaN(_0x3b26bd)) throw new SyntaxError(_0x15c00a(0x16f));
            else {
                if (_0x3b26bd[_0x15c00a(0x1b2)](".")) throw new SyntaxError(_0x15c00a(0x164));
            }
            break;
        }
        case Constants["SYSTEM"][_0x15c00a(0x182)][_0x15c00a(0x1ae)]: {
            if (variables[_0x3b26bd[_0x15c00a(0x157)](/ /g, "")]) return;
            if (!isNaN(_0x3b26bd)) throw new SyntaxError(_0x15c00a(0x17e));
            else {
                if (!_0x3b26bd[_0x15c00a(0x1b2)]("\x22")) throw new SyntaxError(_0x15c00a(0x171));
            }
            break;
        }
        case Constants[_0x15c00a(0x154)][_0x15c00a(0x182)]["BOOLEAN"]: {
            if (variables[_0x3b26bd["replace"](/ /g, "")]) return;
            if (_0x3b26bd != _0x15c00a(0x1aa) && _0x3b26bd != _0x15c00a(0x1b1))
                throw new SyntaxError("You\x20can\x20only\x20assign\x20true\x20or\x20false\x20on\x20boolean\x20types");
            break;
        }
        case Constants[_0x15c00a(0x154)]["VARIABLES"][_0x15c00a(0x16c)]: {
            if (variables[_0x3b26bd["replace"](/ /g, "")]) return;
            if (_0x3b26bd[_0x15c00a(0x166)] > 0x1 && !_0x3b26bd[_0x15c00a(0x1b2)]("\x22"))
                throw new SyntaxError(_0x15c00a(0x1a5));
            else {
                if (_0x3b26bd[_0x15c00a(0x157)](/"/g, "")["length"] > 0x1)
                    throw new SyntaxError("You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type");
                else {
                    if (!isNaN(_0x3b26bd)) throw new SyntaxError(_0x15c00a(0x17e));
                    else {
                        if (!_0x3b26bd[_0x15c00a(0x1b2)]("\x22"))
                            throw new SyntaxError("To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22");
                    }
                }
            }
            break;
        }
        case Constants[_0x15c00a(0x154)][_0x15c00a(0x182)]["ANY"]: {
            if (variables[_0x3b26bd[_0x15c00a(0x157)](/ /g, "")]) return;
            if (isNaN(_0x3b26bd) && !_0x3b26bd["includes"]("\x22")) throw new SyntaxError(_0x15c00a(0x171));
            break;
        }
    }
    (_0x3b26bd == _0x15c00a(0x1aa) || _0x3b26bd == _0x15c00a(0x1b1)) &&
        (variables[_0x555bae][_0x15c00a(0x1ac)] = JSON["parse"](_0x3b26bd));
}
async function getTrollAsk(_0x512f76) {
    const _0x1fae28 = _0x4d6942,
        _0x5c533e = _0x512f76["split"]("\x20>>\x20");
    if (_0x5c533e[0x0] == "") _0x5c533e[_0x1fae28(0x19a)]();
    if (_0x5c533e["length"] <= 0x0) return;
    const _0x13073d = _0x5c533e[0x0],
        _0x1d7b14 = _0x5c533e[0x1],
        _0x57ac3b = _0x5c533e[0x2];
    if (!_0x5c533e[0x3]) return;
    const _0x1aa4c0 = _0x5c533e[0x3][_0x1fae28(0x157)](/{|}/g, "")["split"](";");
    if (_0x13073d !== Constants["TROLLASK"]) return;
    if (!_0x1d7b14[_0x1fae28(0x1a4)]("\x22") && !_0x1d7b14["endsWith"]("\x22")) return new SyntaxError(_0x1fae28(0x168));
    const _0x4df7bc = await askQuestion(_0x1d7b14[_0x1fae28(0x157)](/"/g, ""));
    variables[_0x57ac3b] = { value: _0x4df7bc, extension: Constants[_0x1fae28(0x17d)], type: Constants[_0x1fae28(0x17d)] };
    const _0x50baa6 = new Lexer(_0x1aa4c0);
    _0x50baa6["start"]();
}
function getTrollAdd(_0x5f175e) {
    const _0x12ad25 = _0x4d6942;
    let _0x3f5759 = _0x5f175e[_0x12ad25(0x194)]("\x20"),
        _0x40dfba;
    _0x3f5759[0x0] == "" && (_0x3f5759[_0x12ad25(0x19a)](), (_0x40dfba = _0x3f5759), (_0x3f5759 = []));
    for (let _0xa9dd64 = 0x0; _0xa9dd64 < _0x40dfba?.[_0x12ad25(0x166)]; _0xa9dd64++) {
        _0x40dfba[_0xa9dd64] && _0x3f5759[_0x12ad25(0x19d)](_0x40dfba[_0xa9dd64]);
    }
    if (_0x3f5759[_0x12ad25(0x166)] <= 0x0) return;
    if (_0x3f5759[0x0][_0x12ad25(0x157)](/ /g, "") != Constants[_0x12ad25(0x1b3)]) return;
    const _0x4bf70c = _0x3f5759[0x1];
    let _0x10abec = _0x3f5759[_0x12ad25(0x198)](0x3)["join"]("\x20");
    if (!variables[_0x4bf70c]) throw new SyntaxError(_0x12ad25(0x188) + _0x4bf70c + _0x12ad25(0x177));
    if (
        variables[_0x4bf70c][_0x12ad25(0x178)] != _0x12ad25(0x15e) &&
        variables[_0x4bf70c][_0x12ad25(0x178)] != _0x12ad25(0x19c) &&
        variables[_0x4bf70c]["extension"] != _0x12ad25(0x184)
    )
        throw new SyntaxError("Cannot\x20asign\x20a\x20number\x20on\x20string,\x20bool\x20and\x20char");
    if (isNaN(_0x10abec)) throw new SyntaxError("Value\x20must\x20be\x20a\x20number!");
    if (
        _0x10abec[_0x12ad25(0x1b2)](".") &&
        variables[_0x4bf70c][_0x12ad25(0x178)] != Constants[_0x12ad25(0x154)][_0x12ad25(0x152)]["FLOAT"]
    )
        throw new SyntaxError(_0x12ad25(0x165));
    variables[_0x4bf70c]["value"] = parseFloat(variables[_0x4bf70c][_0x12ad25(0x1ac)]) + parseFloat(_0x10abec);
}
function getTrollMinus(_0x460747) {
    const _0x585c8a = _0x4d6942;
    let _0x53c772 = _0x460747[_0x585c8a(0x194)]("\x20"),
        _0x17a737;
    _0x53c772[0x0] == "" && (_0x53c772["shift"](), (_0x17a737 = _0x53c772), (_0x53c772 = []));
    for (let _0x215c9d = 0x0; _0x215c9d < _0x17a737?.[_0x585c8a(0x166)]; _0x215c9d++) {
        _0x17a737[_0x215c9d] && _0x53c772["push"](_0x17a737[_0x215c9d]);
    }
    if (_0x53c772[_0x585c8a(0x166)] <= 0x0) return;
    if (_0x53c772[0x0]["replace"](/ /g, "") !== Constants[_0x585c8a(0x1af)]) return;
    const _0x509b0b = _0x53c772[0x1];
    let _0x52d2cd = _0x53c772[_0x585c8a(0x198)](0x3)["join"]("\x20");
    if (!variables[_0x509b0b]) throw new SyntaxError(_0x585c8a(0x188) + _0x509b0b + _0x585c8a(0x177));
    if (
        variables[_0x509b0b]["extension"] != _0x585c8a(0x15e) &&
        variables[_0x509b0b]["extension"] != "float" &&
        variables[_0x509b0b]["extension"] != _0x585c8a(0x184)
    )
        throw new SyntaxError(_0x585c8a(0x1a0));
    if (isNaN(_0x52d2cd)) throw new SyntaxError(_0x585c8a(0x17c));
    if (
        _0x52d2cd["includes"](".") &&
        variables[_0x509b0b][_0x585c8a(0x178)] != Constants[_0x585c8a(0x154)][_0x585c8a(0x152)][_0x585c8a(0x19e)]
    )
        throw new SyntaxError(_0x585c8a(0x165));
    variables[_0x509b0b]["value"] = parseFloat(variables[_0x509b0b]["value"]) - parseFloat(_0x52d2cd);
}
function getTrollMultiply(_0x58b616) {
    const _0x12b5d5 = _0x4d6942;
    let _0x606f38 = _0x58b616[_0x12b5d5(0x194)]("\x20"),
        _0x142472;
    _0x606f38[0x0] == "" && (_0x606f38["shift"](), (_0x142472 = _0x606f38), (_0x606f38 = []));
    for (let _0x52c302 = 0x0; _0x52c302 < _0x142472?.[_0x12b5d5(0x166)]; _0x52c302++) {
        _0x142472[_0x52c302] && _0x606f38[_0x12b5d5(0x19d)](_0x142472[_0x52c302]);
    }
    if (_0x606f38[_0x12b5d5(0x166)] <= 0x0) return;
    if (_0x606f38[0x0][_0x12b5d5(0x157)](/ /g, "") !== Constants["TROLLMULTIPLY"]) return;
    const _0x90a0b5 = _0x606f38[0x1];
    let _0x417559 = _0x606f38[_0x12b5d5(0x198)](0x3)["join"]("\x20");
    if (!variables[_0x90a0b5]) throw new SyntaxError(_0x12b5d5(0x188) + _0x90a0b5 + "\x22\x20couldn\x27t\x20be\x20found");
    if (
        variables[_0x90a0b5][_0x12b5d5(0x178)] != "int" &&
        variables[_0x90a0b5][_0x12b5d5(0x178)] != _0x12b5d5(0x19c) &&
        variables[_0x90a0b5][_0x12b5d5(0x178)] != _0x12b5d5(0x184)
    )
        throw new SyntaxError(_0x12b5d5(0x1a0));
    if (isNaN(_0x417559)) throw new SyntaxError(_0x12b5d5(0x17c));
    if (
        _0x417559[_0x12b5d5(0x1b2)](".") &&
        variables[_0x90a0b5]["extension"] != Constants[_0x12b5d5(0x154)]["VARIABLE_TYPES"][_0x12b5d5(0x19e)]
    )
        throw new SyntaxError("Cannot\x20asign\x20a\x20float\x20value\x20to\x20int");
    variables[_0x90a0b5][_0x12b5d5(0x1ac)] = parseFloat(variables[_0x90a0b5]["value"]) * parseFloat(_0x417559);
}
function getTrollDivide(_0x36215d) {
    const _0xce5e77 = _0x4d6942;
    let _0x4dfa67 = _0x36215d[_0xce5e77(0x194)]("\x20"),
        _0x18ce5e;
    _0x4dfa67[0x0] == "" && (_0x4dfa67[_0xce5e77(0x19a)](), (_0x18ce5e = _0x4dfa67), (_0x4dfa67 = []));
    for (let _0x5ac01d = 0x0; _0x5ac01d < _0x18ce5e?.[_0xce5e77(0x166)]; _0x5ac01d++) {
        _0x18ce5e[_0x5ac01d] && _0x4dfa67["push"](_0x18ce5e[_0x5ac01d]);
    }
    if (_0x4dfa67[_0xce5e77(0x166)] <= 0x0) return;
    if (_0x4dfa67[0x0][_0xce5e77(0x157)](/ /g, "") !== Constants[_0xce5e77(0x170)]) return;
    const _0x935a65 = _0x4dfa67[0x1];
    let _0x360eef = _0x4dfa67[_0xce5e77(0x198)](0x3)[_0xce5e77(0x161)]("\x20");
    if (!variables[_0x935a65]) throw new SyntaxError("Variable\x20\x22" + _0x935a65 + _0xce5e77(0x177));
    if (
        variables[_0x935a65][_0xce5e77(0x178)] != _0xce5e77(0x15e) &&
        variables[_0x935a65][_0xce5e77(0x178)] != _0xce5e77(0x19c) &&
        variables[_0x935a65]["extension"] != _0xce5e77(0x184)
    )
        throw new SyntaxError("Cannot\x20asign\x20a\x20number\x20on\x20string,\x20bool\x20and\x20char");
    if (isNaN(_0x360eef)) throw new SyntaxError(_0xce5e77(0x17c));
    if (_0x360eef["includes"](".") && variables[_0x935a65]["extension"] != Constants[_0xce5e77(0x154)][_0xce5e77(0x152)]["FLOAT"])
        throw new SyntaxError("Cannot\x20asign\x20a\x20float\x20value\x20to\x20int");
    variables[_0x935a65][_0xce5e77(0x1ac)] = parseFloat(variables[_0x935a65]["value"]) / parseFloat(_0x360eef);
}
function getWindow(_0x57167e) {
    const _0x563e62 = _0x4d6942;
    let _0x4a975c = _0x57167e[_0x563e62(0x194)]("\x20"),
        _0x51214d;
    _0x4a975c[0x0] == "" && (_0x4a975c["shift"](), (_0x51214d = _0x4a975c), (_0x4a975c = []));
    for (let _0x4b5b8f = 0x0; _0x4b5b8f < _0x51214d?.[_0x563e62(0x166)]; _0x4b5b8f++) {
        _0x51214d[_0x4b5b8f] && _0x4a975c[_0x563e62(0x19d)](_0x51214d[_0x4b5b8f]);
    }
    if (_0x4a975c[_0x563e62(0x166)] <= 0x0) return;
    if (_0x4a975c[0x0][_0x563e62(0x157)](/ /g, "") !== Constants[_0x563e62(0x196)][_0x563e62(0x16a)]) return;
    let _0x2c3aa7, _0x3e5c92, _0x509a3f;
    (_0x2c3aa7 = _0x4a975c[0x0] || null),
        (_0x509a3f = _0x4a975c[0x1] || null),
        (_0x3e5c92 = _0x4a975c[_0x563e62(0x198)](0x3)["join"]("\x20")[_0x563e62(0x157)](";", ""));
    const _0x18f7ea = _0x3e5c92[_0x563e62(0x157)](/\)|Troll.window/g, "")
            [_0x563e62(0x194)]("(")
            ["join"]("\x20")
            [_0x563e62(0x194)](",\x20"),
        _0x34223d = Handler["createWindow"](
            parseFloat(_0x18f7ea[0x0]),
            parseFloat(_0x18f7ea[0x1]),
            parseFloat(_0x18f7ea[0x2]),
            parseFloat(_0x18f7ea[0x3]),
            JSON[_0x563e62(0x1ab)](_0x18f7ea[0x4]),
            _0x18f7ea[0x5] || null
        );
    windows[_0x509a3f] = { values: _0x18f7ea };
}
function _0xc5dc() {
    const _0x17d9d5 = [
        "../constants/Constants",
        "\x20>>\x20",
        "558229QSZaaM",
        "advance",
        "Type,\x20Name\x20or\x20arguments\x20is\x20missing!",
        "12DREQCp",
        "225KophNk",
        "split",
        "exports",
        "ELECTRON",
        "mathjs",
        "slice",
        "callback",
        "shift",
        "Channel\x20name\x20wasn\x27t\x20declared",
        "float",
        "push",
        "FLOAT",
        "arguments",
        "Cannot\x20asign\x20a\x20number\x20on\x20string,\x20bool\x20and\x20char",
        "24BMsmzo",
        "trollmath",
        "Troll.Face.System.Log(",
        "startsWith",
        "You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type\x20and\x20you\x20muse\x20use\x20Double\x20Quotes:\x20\x22A\x22",
        "89851sZwbfk",
        "16fXGvtH",
        "ANY",
        "396290bsHeTq",
        "true",
        "parse",
        "value",
        "FUNCTION",
        "STRING",
        "TROLLMINUS",
        "handle",
        "false",
        "includes",
        "TROLLADD",
        "12vIgMts",
        "VARIABLE_TYPES",
        "null",
        "SYSTEM",
        "createWindow",
        "===",
        "replace",
        "\x20->\x20",
        "log",
        "You\x20can\x20only\x20assign\x20true\x20or\x20false\x20on\x20boolean\x20types",
        "WHILE",
        "electron",
        "close",
        "int",
        "createInterface",
        "currIndex",
        "join",
        "2950UHhOTs",
        "CALL",
        "You\x20cannot\x20asign\x20a\x20float\x20number\x20on\x20integer",
        "Cannot\x20asign\x20a\x20float\x20value\x20to\x20int",
        "length",
        "data",
        "Text\x20to\x20say\x20must\x20be\x20a\x20string!",
        "evaluate",
        "WINDOW",
        "invokeHandler",
        "CHARACTER",
        "stdout",
        "FOR",
        "You\x20cannot\x20asign\x20a\x20string\x20on\x20integer",
        "TROLLDIVIDE",
        "To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22",
        "loadURL",
        "loadFile",
        "You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type",
        "funcName",
        "LOG",
        "\x22\x20couldn\x27t\x20be\x20found",
        "extension",
        "Type\x20or\x20Sum\x20is\x20missing!",
        "VARIABLE",
        "BOOLEAN",
        "Value\x20must\x20be\x20a\x20number!",
        "TROLLASK",
        "You\x20cannot\x20asign\x20a\x20number\x20on\x20string",
        "2220642UXbRoy",
        "SET_VAR",
        "!==",
        "VARIABLES",
        "start",
        "any",
        "INT",
        "ready",
        "checkLogs",
        "Variable\x20\x22",
        "Window\x20\x22",
        "stdin",
        "13472492ZgBiJR",
        "79598IMtiDL",
    ];
    _0xc5dc = function () {
        return _0x17d9d5;
    };
    return _0xc5dc();
}
function getTrollWindow(_0x2ac843) {
    const _0x4db50f = _0x4d6942;
    let _0x5ca448 = _0x2ac843[_0x4db50f(0x194)]("\x20"),
        _0x4f1ceb;
    _0x5ca448[0x0] == "" && (_0x5ca448[_0x4db50f(0x19a)](), (_0x4f1ceb = _0x5ca448), (_0x5ca448 = []));
    for (let _0x592028 = 0x0; _0x592028 < _0x4f1ceb?.[_0x4db50f(0x166)]; _0x592028++) {
        _0x4f1ceb[_0x592028] && _0x5ca448[_0x4db50f(0x19d)](_0x4f1ceb[_0x592028]);
    }
    if (_0x5ca448[_0x4db50f(0x166)] <= 0x0) return;
    if (_0x5ca448[0x0][_0x4db50f(0x157)](/ /g, "") !== Constants[_0x4db50f(0x196)]["TROLLWINDOW"]) return;
    let _0x3c747c, _0x2d18bc, _0x13cd12;
    (_0x3c747c = _0x5ca448[0x0] || null),
        (_0x13cd12 = _0x5ca448[0x1] || null),
        (_0x2d18bc = _0x5ca448[_0x4db50f(0x198)](0x3)[_0x4db50f(0x161)]("\x20")[_0x4db50f(0x157)](";", ""));
    let _0x120b54 = _0x2d18bc[_0x4db50f(0x157)](/\)|name|"/g, "")["split"]("(");
    if (!windows[_0x13cd12["replace"](/ /g, "")])
        throw new SyntaxError("Window\x20\x22" + _0x13cd12[_0x4db50f(0x157)](/ /g, "") + _0x4db50f(0x177));
    if (!windows[_0x120b54[0x0][_0x4db50f(0x157)](/.loadFile|.loadURL/g, "")])
        throw new SyntaxError(_0x4db50f(0x189) + _0x120b54[0x0][_0x4db50f(0x157)](/.loadFile|.loadURL/g, "") + _0x4db50f(0x177));
    if (_0x120b54[0x0][_0x4db50f(0x1b2)](_0x4db50f(0x173))) Handler["loadFile"](_0x120b54[0x1]);
    if (_0x120b54[0x0][_0x4db50f(0x1b2)](_0x4db50f(0x172))) Handler[_0x4db50f(0x172)](_0x120b54[0x1]);
}
function getTrollIpc(_0x85b249) {
    const _0x1d5318 = _0x4d6942;
    let _0x590883 = _0x85b249[_0x1d5318(0x194)](_0x1d5318(0x18e)),
        _0x3179c5;
    _0x590883[0x0] == "" && (_0x590883[_0x1d5318(0x19a)](), (_0x3179c5 = _0x590883), (_0x590883 = []));
    for (let _0x34fd5c = 0x0; _0x34fd5c < _0x3179c5?.[_0x1d5318(0x166)]; _0x34fd5c++) {
        _0x3179c5[_0x34fd5c] && _0x590883[_0x1d5318(0x19d)](_0x3179c5[_0x34fd5c]);
    }
    if (_0x590883["length"] <= 0x0) return;
    if (_0x590883[0x0]["replace"](/ /g, "") !== Constants["ELECTRON"]["TROLLIPC"]) return;
    let _0x5553fb = _0x590883[0x0] || null,
        _0xb0f311 = _0x590883[0x1] || null,
        _0x2504b3 = _0x590883[0x2] || null,
        _0x5b4ef7 = _0x590883[0x3][_0x1d5318(0x194)](",\x20") || null,
        _0x4c4fd8 = _0x590883[0x4][_0x1d5318(0x157)](/{|}/g, "")[_0x1d5318(0x194)](";");
    if (_0x5b4ef7 == _0x1d5318(0x153)) _0x5b4ef7 = null;
    if (!_0x2504b3) throw new SyntaxError(_0x1d5318(0x19b));
    if (!windows[_0xb0f311[_0x1d5318(0x157)](/ /g, "")])
        throw new SyntaxError(_0x1d5318(0x189) + _0xb0f311[_0x1d5318(0x157)](/ /g, "") + _0x1d5318(0x177));
    Handler[_0x1d5318(0x16b)](_0x2504b3, _0x4c4fd8, _0x5b4ef7);
}
class Lexer {
    constructor(_0x83e2fa) {
        const _0x50b624 = _0x4d6942;
        (this[_0x50b624(0x167)] = _0x83e2fa), (this[_0x50b624(0x160)] = 0x0);
    }
    [_0x4d6942(0x190)]() {
        const _0x20e6c0 = _0x4d6942;
        this[_0x20e6c0(0x160)] < this[_0x20e6c0(0x167)][_0x20e6c0(0x166)] - 0x1
            ? this[_0x20e6c0(0x160)]++
            : (this[_0x20e6c0(0x160)] = null);
    }
    async ["start"]() {
        const _0x2eae37 = _0x4d6942;
        while (this[_0x2eae37(0x160)] != null) {
            !this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]["startsWith"]("#") &&
                !paused &&
                (this[_0x2eae37(0x187)](),
                getVariableName(this["data"][this[_0x2eae37(0x160)]]),
                getIfStatement(this[_0x2eae37(0x167)][this["currIndex"]]),
                getFunctions(this["data"][this[_0x2eae37(0x160)]]),
                getCalledFunction(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getMath(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getSetVar(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getTrollAsk(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getTrollAdd(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getTrollMinus(this[_0x2eae37(0x167)][this["currIndex"]]),
                getTrollMultiply(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getTrollDivide(this[_0x2eae37(0x167)][this["currIndex"]]),
                getWhileStatement(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getForStatement(this["data"][this[_0x2eae37(0x160)]]),
                getWindow(this[_0x2eae37(0x167)][this["currIndex"]]),
                getTrollWindow(this[_0x2eae37(0x167)][this[_0x2eae37(0x160)]]),
                getTrollIpc(this[_0x2eae37(0x167)][this["currIndex"]]),
                this[_0x2eae37(0x190)]());
        }
    }
    ["checkLogs"]() {
        const _0x1b5562 = _0x4d6942;
        if (
            this[_0x1b5562(0x167)][this[_0x1b5562(0x160)]]["includes"](Constants[_0x1b5562(0x154)][_0x1b5562(0x176)]) &&
            !this[_0x1b5562(0x167)][this[_0x1b5562(0x160)]]["startsWith"](Constants["FUNCTION"]) &&
            !this[_0x1b5562(0x167)][this[_0x1b5562(0x160)]][_0x1b5562(0x1a4)](Constants["IF"]) &&
            !this[_0x1b5562(0x167)][this[_0x1b5562(0x160)]]["startsWith"](Constants[_0x1b5562(0x15b)]) &&
            !this[_0x1b5562(0x167)][this[_0x1b5562(0x160)]][_0x1b5562(0x1a4)](Constants[_0x1b5562(0x16e)]) &&
            !this["data"][this[_0x1b5562(0x160)]][_0x1b5562(0x1a4)](Constants[_0x1b5562(0x17d)])
        ) {
            let _0x3a86d9 = this[_0x1b5562(0x167)][this[_0x1b5562(0x160)]]
                [_0x1b5562(0x157)](")", "")
                ["replace"](";", "")
                [_0x1b5562(0x194)](_0x1b5562(0x1a3))
                [_0x1b5562(0x161)]("\x20");
            if (_0x3a86d9[_0x1b5562(0x1b2)]("\x22")) console[_0x1b5562(0x159)](_0x3a86d9[_0x1b5562(0x157)](/"/g, ""));
            else {
                if (_0x3a86d9[_0x1b5562(0x1b2)]("+")) {
                    const _0x353fbd = _0x3a86d9["split"]("+");
                    let _0xeeeeb7 = "";
                    for (let _0x449e86 = 0x0; _0x449e86 < _0x353fbd[_0x1b5562(0x166)]; _0x449e86++) {
                        let _0x23339d;
                        if (variables[_0x353fbd[_0x449e86][_0x1b5562(0x157)](/ /g, "")][_0x1b5562(0x1ac)])
                            _0x23339d =
                                variables[_0x353fbd[_0x449e86]["replace"](/ /g, "")]["value"][_0x1b5562(0x157)](/"/g, "") +
                                "\x20";
                        _0xeeeeb7 += "" + _0x23339d;
                    }
                    console["log"](_0xeeeeb7);
                } else
                    isNaN(variables[_0x3a86d9[_0x1b5562(0x157)](/ /g, "")]["value"])
                        ? console[_0x1b5562(0x159)](
                              variables[_0x3a86d9["replace"](/ /g, "")][_0x1b5562(0x1ac)]
                                  ["toString"]()
                                  [_0x1b5562(0x157)](/"/g, "")
                          )
                        : console["log"](variables[_0x3a86d9["replace"](/ /g, "")][_0x1b5562(0x1ac)]);
            }
        }
    }
}
module[_0x4d6942(0x195)] = Lexer;
