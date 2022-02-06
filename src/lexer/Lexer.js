const _0x1919e9 = _0x584f;
(function (_0xd36923, _0x2b7a59) {
    const _0x33423d = _0x584f,
        _0x56ab1d = _0xd36923();
    while (!![]) {
        try {
            const _0x5c3008 =
                (-parseInt(_0x33423d(0x1aa)) / 0x1) * (-parseInt(_0x33423d(0x1c6)) / 0x2) +
                (-parseInt(_0x33423d(0x1b2)) / 0x3) * (-parseInt(_0x33423d(0x1c2)) / 0x4) +
                -parseInt(_0x33423d(0x1bd)) / 0x5 +
                parseInt(_0x33423d(0x1b0)) / 0x6 +
                -parseInt(_0x33423d(0x1c3)) / 0x7 +
                parseInt(_0x33423d(0x1bc)) / 0x8 +
                -parseInt(_0x33423d(0x1c9)) / 0x9;
            if (_0x5c3008 === _0x2b7a59) break;
            else _0x56ab1d["push"](_0x56ab1d["shift"]());
        } catch (_0xfd15a5) {
            _0x56ab1d["push"](_0x56ab1d["shift"]());
        }
    }
})(_0x1c51, 0xcad9b);
const Constants = require(_0x1919e9(0x1e5)),
    readline = require(_0x1919e9(0x1c8)),
    math = require(_0x1919e9(0x209)),
    { SyntaxError } = require(_0x1919e9(0x1e0)),
    variables = {},
    functions = {},
    windows = {};
let paused = ![];
const { app, BrowserWindow, ipcMain } = require("electron");
class Electron {
    ["createWindow"](_0x4cc427, _0xae8424, _0x1ce0e7, _0x344c6f, _0x33154f, _0x4ae3e5) {
        const _0x2b82a9 = _0x1919e9;
        app["on"](_0x2b82a9(0x1b7), () => {
            window = new BrowserWindow({
                minHeight: _0xae8424 || null,
                minWidth: _0x4cc427 || null,
                maxHeight: _0x344c6f || null,
                maxWidth: _0x1ce0e7 || null,
                autoHideMenuBar: !![],
                frame: _0x33154f,
                icon: _0x4ae3e5,
                webPreferences: { nodeIntegration: !![], contextIsolation: ![] },
            });
        });
    }
    [_0x1919e9(0x1f5)](_0x5226b8) {
        const _0x13b33a = _0x1919e9;
        app["on"](_0x13b33a(0x1b7), () => {
            const _0x4c913f = _0x13b33a;
            window[_0x4c913f(0x1f5)](_0x5226b8);
        });
    }
    [_0x1919e9(0x1e6)](_0x847dc0) {
        const _0x1a9c0b = _0x1919e9;
        app["on"](_0x1a9c0b(0x1b7), () => {
            const _0x3511d0 = _0x1a9c0b;
            window[_0x3511d0(0x1e6)](_0x847dc0);
        });
    }
    ["invokeHandler"](_0x570b15, _0x225265, ..._0x364f53) {
        const _0x3a1b3e = _0x1919e9;
        console[_0x3a1b3e(0x1c1)](_0x570b15[_0x3a1b3e(0x1c4)](/"/g, "")),
            ipcMain["handle"](_0x570b15[_0x3a1b3e(0x1c4)](/"/g, ""), (_0x1f119e, ..._0x1af687) => {
                const _0x579356 = new Lexer(_0x225265);
                _0x579356["start"]();
            });
    }
}
let window;
const Handler = new Electron();
function askQuestion(_0xdc751d) {
    const _0xce0847 = _0x1919e9,
        _0x3588e5 = readline[_0xce0847(0x1ec)]({ input: process[_0xce0847(0x1ef)], output: process["stdout"] });
    return new Promise(_0x26d83c =>
        _0x3588e5[_0xce0847(0x20a)](_0xdc751d, _0x521b7b => {
            const _0x5acb28 = _0xce0847;
            _0x3588e5[_0x5acb28(0x1ff)](), _0x26d83c(_0x521b7b);
        })
    );
}
function splitMulti(_0x16d6a0, _0x49acb5) {
    const _0x28af61 = _0x1919e9;
    var _0x2329df = _0x49acb5[0x0];
    for (var _0x508bf9 = 0x1; _0x508bf9 < _0x49acb5["length"]; _0x508bf9++) {
        _0x16d6a0 = _0x16d6a0[_0x28af61(0x1e4)](_0x49acb5[_0x508bf9])["join"](_0x2329df);
    }
    return (_0x16d6a0 = _0x16d6a0["split"](_0x2329df)), _0x16d6a0;
}
function changeStringToVariable(_0x1dd776) {
    const _0x24e837 = _0x1919e9;
    return (
        (newVal = _0x1dd776[_0x24e837(0x1c4)](/\${(.*?)}/g, _0x3bff7e => {
            const _0xba687b = _0x24e837,
                _0x3b0bfa = _0x3bff7e[_0xba687b(0x1fd)](0x2, _0x3bff7e[_0xba687b(0x1a9)]()[_0xba687b(0x1e2)] - 0x1),
                _0x4d7bf7 = _0x3b0bfa[_0xba687b(0x1e4)](".");
            return variables[_0x4d7bf7[0x0]][_0xba687b(0x1b8)];
        })),
        newVal
    );
}
function getVariableName(_0x4198a6) {
    const _0x3e16cf = _0x1919e9,
        _0x46ab26 = _0x4198a6;
    let _0x226085 = _0x46ab26["split"]("\x20"),
        _0x5e32fb;
    _0x226085[0x0] == "" && (_0x226085[_0x3e16cf(0x1d2)](), (_0x5e32fb = _0x226085), (_0x226085 = []));
    for (let _0x32aedb = 0x0; _0x32aedb < _0x5e32fb?.["length"]; _0x32aedb++) {
        _0x5e32fb[_0x32aedb] && _0x226085[_0x3e16cf(0x1d3)](_0x5e32fb[_0x32aedb]);
    }
    if (_0x226085["length"] <= 0x0) return;
    if (
        !_0x226085[0x0]["includes"](Constants[_0x3e16cf(0x204)]["VARIABLES"][_0x3e16cf(0x1d8)]) &&
        !_0x226085[0x0][_0x3e16cf(0x207)](Constants[_0x3e16cf(0x204)][_0x3e16cf(0x1f6)]["INT"]) &&
        !_0x226085[0x0]["includes"](Constants[_0x3e16cf(0x204)][_0x3e16cf(0x1f6)][_0x3e16cf(0x1dc)]) &&
        !_0x226085[0x0]["includes"](Constants["SYSTEM"][_0x3e16cf(0x1f6)][_0x3e16cf(0x1af)]) &&
        !_0x226085[0x0][_0x3e16cf(0x207)](Constants[_0x3e16cf(0x204)][_0x3e16cf(0x1f6)][_0x3e16cf(0x1d6)]) &&
        !_0x226085[0x0][_0x3e16cf(0x207)](Constants["SYSTEM"]["VARIABLES"]["CHARACTER"])
    )
        return;
    let _0x5342bd,
        _0x31ed33,
        _0x44ca05,
        _0x1a45db,
        _0x467e27 = ![];
    (_0x5342bd = _0x226085[0x0] || null),
        (_0x44ca05 = _0x226085[0x1] || null),
        (_0x31ed33 = _0x226085[_0x3e16cf(0x1fd)](0x3)[_0x3e16cf(0x1ba)]("\x20")[_0x3e16cf(0x1c4)](";", ""));
    switch (_0x5342bd) {
        case Constants[_0x3e16cf(0x204)]["VARIABLES"][_0x3e16cf(0x1cc)]: {
            if (variables[_0x31ed33["replace"](/ /g, "")]) return;
            if (isNaN(_0x31ed33)) throw new SyntaxError(_0x3e16cf(0x1d5));
            else {
                if (_0x31ed33[_0x3e16cf(0x207)](".")) throw new SyntaxError(_0x3e16cf(0x1bb));
            }
            break;
        }
        case Constants[_0x3e16cf(0x204)][_0x3e16cf(0x1f6)][_0x3e16cf(0x1dc)]: {
            if (variables[_0x31ed33[_0x3e16cf(0x1c4)](/ /g, "")]) return;
            if (!isNaN(_0x31ed33)) throw new SyntaxError("You\x20cannot\x20asign\x20a\x20number\x20on\x20string");
            else {
                if (!_0x31ed33[_0x3e16cf(0x207)]("\x22"))
                    throw new SyntaxError("To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22");
            }
            break;
        }
        case Constants[_0x3e16cf(0x204)]["VARIABLES"][_0x3e16cf(0x1af)]: {
            if (variables[_0x31ed33["replace"](/ /g, "")]) return;
            if (_0x31ed33 != _0x3e16cf(0x1be) && _0x31ed33 != _0x3e16cf(0x1d4)) throw new SyntaxError(_0x3e16cf(0x1de));
            break;
        }
        case Constants[_0x3e16cf(0x204)][_0x3e16cf(0x1f6)]["CHARACTER"]: {
            if (variables[_0x31ed33[_0x3e16cf(0x1c4)](/ /g, "")]) return;
            if (_0x31ed33[_0x3e16cf(0x1e2)] > 0x1 && !_0x31ed33["includes"]("\x22")) throw new SyntaxError(_0x3e16cf(0x1b4));
            else {
                if (_0x31ed33[_0x3e16cf(0x1c4)](/"/g, "")["length"] > 0x1) throw new SyntaxError(_0x3e16cf(0x1b5));
                else {
                    if (!isNaN(_0x31ed33)) throw new SyntaxError(_0x3e16cf(0x1e3));
                    else {
                        if (!_0x31ed33["includes"]("\x22"))
                            throw new SyntaxError("To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22");
                    }
                }
            }
            break;
        }
        case Constants[_0x3e16cf(0x204)][_0x3e16cf(0x1f6)][_0x3e16cf(0x1d8)]: {
            if (variables[_0x31ed33[_0x3e16cf(0x1c4)](/ /g, "")]) return;
            if (isNaN(_0x31ed33) && !_0x31ed33[_0x3e16cf(0x207)]("\x22")) throw new SyntaxError(_0x3e16cf(0x1f4));
            break;
        }
    }
    _0x5342bd === Constants[_0x3e16cf(0x204)][_0x3e16cf(0x1f6)][_0x3e16cf(0x1af)] &&
        (_0x31ed33 = JSON[_0x3e16cf(0x1f1)](_0x226085["slice"](0x3)[_0x3e16cf(0x1ba)]("\x20")[_0x3e16cf(0x1c4)](";", "")));
    if (_0x31ed33 == !![] || _0x31ed33 == ![]) _0x1a45db = Constants[_0x3e16cf(0x204)][_0x3e16cf(0x201)][_0x3e16cf(0x1af)];
    else {
        if (_0x31ed33[_0x3e16cf(0x207)]("\x22")) _0x1a45db = Constants[_0x3e16cf(0x204)][_0x3e16cf(0x201)][_0x3e16cf(0x1dc)];
        else {
            if (_0x31ed33[_0x3e16cf(0x207)](".")) _0x1a45db = Constants[_0x3e16cf(0x204)][_0x3e16cf(0x201)]["FLOAT"];
            else {
                if (isNaN(_0x31ed33)) _0x1a45db = Constants[_0x3e16cf(0x204)][_0x3e16cf(0x201)][_0x3e16cf(0x1e8)];
                else _0x1a45db = Constants[_0x3e16cf(0x204)]["VARIABLE_TYPES"][_0x3e16cf(0x1cc)];
            }
        }
    }
    if (_0x31ed33) {
        if (variables[_0x31ed33["replace"](/ /g, "")])
            _0x31ed33 = variables[_0x31ed33[_0x3e16cf(0x1c4)](/ /g, "")][_0x3e16cf(0x1b8)];
    }
    variables[_0x44ca05] = { value: _0x31ed33, extension: _0x5342bd, type: _0x1a45db };
    if (_0x31ed33 == !![] || _0x31ed33 == ![]) return;
    if (!isNaN(_0x31ed33)) variables[_0x44ca05][_0x3e16cf(0x1b8)] = parseInt(_0x31ed33);
    _0x31ed33[_0x3e16cf(0x207)](".") && (variables[_0x44ca05][_0x3e16cf(0x1b8)] = parseFloat(_0x31ed33));
}
function getIfStatement(_0x4a26db) {
    const _0x1cd01a = _0x1919e9,
        _0x1718a8 = _0x4a26db[_0x1cd01a(0x1e4)](":");
    if (_0x1718a8[_0x1cd01a(0x1e2)] <= 0x1) return;
    if (_0x1718a8[0x0][_0x1cd01a(0x1c4)](/ /g, "") != Constants["IF"]) return;
    const _0x2d1a29 = _0x1718a8[0x3][_0x1cd01a(0x1e4)](">>");
    let _0xc616bc =
            variables[_0x1718a8[0x1][_0x1cd01a(0x1c4)](/ /g, "")]?.[_0x1cd01a(0x1b8)] ||
            _0x1718a8[0x1][_0x1cd01a(0x1c4)](/ /g, ""),
        _0x50309a = _0x1718a8[0x2][_0x1cd01a(0x1c4)](/ /g, ""),
        _0x165dab =
            variables[_0x2d1a29[0x0][_0x1cd01a(0x1c4)](/ /g, "")]?.[_0x1cd01a(0x1b8)] || _0x2d1a29[0x0]["replace"](/ /g, ""),
        _0x58c4e3 = _0x2d1a29[0x1][_0x1cd01a(0x1c4)](/{|}/g, "")[_0x1cd01a(0x1e4)](";"),
        _0x5993ba = ![];
    if (!isNaN(_0x165dab)) _0x165dab = parseFloat(_0x165dab);
    if (!isNaN(_0xc616bc)) _0xc616bc = parseFloat(_0xc616bc);
    (variables[_0x1718a8[0x1][_0x1cd01a(0x1c4)](/ /g, "")]?.[_0x1cd01a(0x1b8)] === !![] ||
        variables[_0x1718a8[0x1][_0x1cd01a(0x1c4)](/ /g, "")]?.["value"] === ![]) &&
        (_0xc616bc = variables[_0x1718a8[0x1][_0x1cd01a(0x1c4)](/ /g, "")]?.[_0x1cd01a(0x1b8)]);
    (variables[_0x2d1a29[0x0][_0x1cd01a(0x1c4)](/ /g, "")]?.[_0x1cd01a(0x1b8)] === !![] ||
        variables[_0x2d1a29[0x0][_0x1cd01a(0x1c4)](/ /g, "")]?.[_0x1cd01a(0x1b8)] === ![]) &&
        (_0x165dab = variables[_0x2d1a29[0x0][_0x1cd01a(0x1c4)](/ /g, "")]?.["value"]);
    if (_0xc616bc == _0x1cd01a(0x1d4) || _0xc616bc == _0x1cd01a(0x1be)) _0xc616bc = JSON[_0x1cd01a(0x1f1)](_0xc616bc);
    if (_0x165dab == _0x1cd01a(0x1d4) || _0x165dab == "true") _0x165dab = JSON[_0x1cd01a(0x1f1)](_0x165dab);
    switch (_0x50309a) {
        case "==": {
            if (_0xc616bc == _0x165dab) _0x5993ba = !![];
            break;
        }
        case _0x1cd01a(0x206): {
            if (_0xc616bc === _0x165dab) _0x5993ba = !![];
            break;
        }
        case "!=": {
            if (_0xc616bc != _0x165dab) _0x5993ba = !![];
            break;
        }
        case _0x1cd01a(0x1ad): {
            if (_0xc616bc !== _0x165dab) _0x5993ba = !![];
            break;
        }
        case "<=": {
            if (_0xc616bc <= _0x165dab) _0x5993ba = !![];
            break;
        }
        case ">=": {
            if (_0xc616bc >= _0x165dab) _0x5993ba = !![];
            break;
        }
        case ">": {
            if (_0xc616bc > _0x165dab) _0x5993ba = !![];
            break;
        }
        case "<": {
            if (_0xc616bc < _0x165dab) _0x5993ba = !![];
            break;
        }
    }
    if (_0x5993ba) {
        const _0x163fb4 = new Lexer(_0x58c4e3);
        _0x163fb4[_0x1cd01a(0x200)]();
    }
}
function getWhileStatement(_0x403574) {
    const _0x42823b = _0x1919e9,
        _0x20e635 = _0x403574[_0x42823b(0x1e4)](":");
    if (_0x20e635["length"] <= 0x1) return;
    if (_0x20e635[0x0][_0x42823b(0x1c4)](/ /g, "") != Constants[_0x42823b(0x1ac)]) return;
    const _0x27b3a8 = _0x20e635[0x3][_0x42823b(0x1e4)](">>");
    let _0x166ddd =
            variables[_0x20e635[0x1]["replace"](/ /g, "")]?.[_0x42823b(0x1b8)] || _0x20e635[0x1][_0x42823b(0x1c4)](/ /g, ""),
        _0x1aaf54 = _0x20e635[0x2][_0x42823b(0x1c4)](/ /g, ""),
        _0xc67343 =
            variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.[_0x42823b(0x1b8)] || _0x27b3a8[0x0]["replace"](/ /g, ""),
        _0x5155de = _0x27b3a8[0x1][_0x42823b(0x1c4)](/{|}/g, "")[_0x42823b(0x1e4)](";");
    if (!isNaN(_0xc67343)) _0xc67343 = parseFloat(_0xc67343);
    if (!isNaN(_0x166ddd)) _0x166ddd = parseFloat(_0x166ddd);
    (variables[_0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")]?.["value"] === !![] ||
        variables[_0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")]?.[_0x42823b(0x1b8)] === ![]) &&
        (_0x166ddd = variables[_0x20e635[0x1]["replace"](/ /g, "")]?.[_0x42823b(0x1b8)]);
    (variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.["value"] === !![] ||
        variables[_0x27b3a8[0x0]["replace"](/ /g, "")]?.["value"] === ![]) &&
        (_0xc67343 = variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.[_0x42823b(0x1b8)]);
    if (_0x166ddd == "false" || _0x166ddd == _0x42823b(0x1be)) _0x166ddd = JSON[_0x42823b(0x1f1)](_0x166ddd);
    if (_0xc67343 == _0x42823b(0x1d4) || _0xc67343 == _0x42823b(0x1be)) _0xc67343 = JSON[_0x42823b(0x1f1)](_0xc67343);
    switch (_0x1aaf54) {
        case "==": {
            while (_0x166ddd == _0xc67343) {
                const _0xe6be20 = new Lexer(_0x5155de);
                _0xe6be20[_0x42823b(0x200)](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")]?.["value"] || _0x20e635[0x1]["replace"](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, ""));
            }
            break;
        }
        case "===": {
            while (_0x166ddd === _0xc67343) {
                const _0x33e01f = new Lexer(_0x5155de);
                _0x33e01f[_0x42823b(0x200)](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")]?.["value"] ||
                        _0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.["value"] ||
                        _0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, ""));
            }
            break;
        }
        case "!=": {
            while (_0x166ddd != _0xc67343) {
                const _0x243a8f = new Lexer(_0x5155de);
                _0x243a8f["start"](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x20e635[0x1]["replace"](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0]["replace"](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, ""));
            }
            break;
        }
        case _0x42823b(0x1ad): {
            while (_0x166ddd !== _0xc67343) {
                const _0x453ae8 = new Lexer(_0x5155de);
                _0x453ae8[_0x42823b(0x200)](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")]?.["value"] ||
                        _0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, ""));
            }
            break;
        }
        case "<=": {
            while (_0x166ddd <= _0xc67343) {
                const _0x1891b2 = new Lexer(_0x5155de);
                _0x1891b2[_0x42823b(0x200)](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")]?.["value"] ||
                        _0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0]["replace"](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, ""));
            }
            break;
        }
        case ">=": {
            while (_0x166ddd >= _0xc67343) {
                const _0x267df7 = new Lexer(_0x5155de);
                _0x267df7[_0x42823b(0x200)](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1]["replace"](/ /g, "")]?.["value"] || _0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.["value"] ||
                        _0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, ""));
            }
            break;
        }
        case ">": {
            while (_0x166ddd > _0xc67343) {
                const _0x17dd28 = new Lexer(_0x5155de);
                _0x17dd28[_0x42823b(0x200)](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1]["replace"](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0]["replace"](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x27b3a8[0x0]["replace"](/ /g, ""));
            }
            break;
        }
        case "<": {
            while (_0x166ddd < _0xc67343) {
                const _0x457a98 = new Lexer(_0x5155de);
                _0x457a98["start"](),
                    (_0x166ddd =
                        variables[_0x20e635[0x1]["replace"](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x20e635[0x1][_0x42823b(0x1c4)](/ /g, "")),
                    (_0xc67343 =
                        variables[_0x27b3a8[0x0][_0x42823b(0x1c4)](/ /g, "")]?.[_0x42823b(0x1b8)] ||
                        _0x27b3a8[0x0]["replace"](/ /g, ""));
            }
            break;
        }
    }
}
function getForStatement(_0xa86d72) {
    const _0xfc8a76 = _0x1919e9,
        _0x56e3c4 = _0xa86d72[_0xfc8a76(0x1e4)](":");
    if (_0x56e3c4[_0xfc8a76(0x1e2)] <= 0x1) return;
    if (_0x56e3c4[0x0]["replace"](/ /g, "") != Constants[_0xfc8a76(0x1f7)]) return;
    const _0x4f3cf5 = _0x56e3c4[0x1]["split"](">>"),
        _0x31dbc3 = _0x4f3cf5[0x1][_0xfc8a76(0x1c4)](/{|}/g, "")[_0xfc8a76(0x1e4)](";"),
        _0x316626 = parseInt(_0x56e3c4[0x1]);
    for (let _0x34090d = 0x0; _0x34090d < _0x316626; _0x34090d++) {
        const _0x41d264 = new Lexer(_0x31dbc3);
        _0x41d264["start"]();
    }
}
function getFunctions(_0x54983a) {
    const _0x549134 = _0x1919e9,
        _0x33d249 = _0x54983a["split"]("\x20>>\x20");
    if (_0x33d249[0x0] !== Constants[_0x549134(0x1ce)]) return;
    if (_0x33d249[0x2] === _0x549134(0x1db)) _0x33d249[0x2] = null;
    if (_0x33d249[_0x549134(0x1e2)] < 0x4) throw new SyntaxError(_0x549134(0x1d9));
    let _0x1ff0b4 = {
        funcType: _0x33d249[0x0],
        funcName: _0x33d249[0x1],
        arguments: _0x33d249[0x2] ? _0x33d249[0x2][_0x549134(0x1e4)](",\x20") : null,
        callback: _0x33d249[0x3][_0x549134(0x1c4)](/{|}/g, "")[_0x549134(0x1e4)](/;/g),
    };
    functions[_0x1ff0b4[_0x549134(0x1f0)]] = _0x1ff0b4;
}
function getCalledFunction(_0x253405) {
    const _0x1f9014 = _0x1919e9,
        _0x654805 = _0x253405[_0x1f9014(0x1e4)](_0x1f9014(0x1fe));
    if (_0x654805[0x0] !== Constants[_0x1f9014(0x1c7)]) return;
    if (_0x654805[_0x1f9014(0x1e2)] < 0x3) throw new SyntaxError(_0x1f9014(0x1b3));
    if (functions[_0x654805[0x1]]["arguments"])
        for (const _0x2efcfb of functions[_0x654805[0x1]][_0x1f9014(0x205)]) {
            if (_0x2efcfb == null) return (args = null);
            const _0xda22cd = _0x654805[0x2][_0x1f9014(0x1c4)](/\(|\)/g, "")[_0x1f9014(0x1e4)](",\x20");
            for (const _0x25656d in functions[_0x654805[0x1]][_0x1f9014(0x205)]) {
                variables[functions[_0x654805[0x1]][_0x1f9014(0x205)][_0x25656d]] = {
                    value: _0xda22cd[_0x25656d][_0x1f9014(0x1c4)](/"/g, ""),
                    extension: _0x1f9014(0x1ae),
                    type: "any",
                };
            }
        }
    const _0x5ec928 = new Lexer(functions[_0x654805[0x1]]["callback"]);
    _0x5ec928[_0x1f9014(0x200)]();
}
function getMath(_0x4e8a87) {
    const _0x1eff8b = _0x1919e9,
        _0x1ef21c = _0x4e8a87[_0x1eff8b(0x1e4)]("\x20->\x20");
    if (_0x1ef21c[0x0] !== Constants[_0x1eff8b(0x1f3)]) return;
    if (_0x1ef21c < 0x3) throw new SyntaxError(_0x1eff8b(0x1d0));
    const _0x81358 = changeStringToVariable(_0x1ef21c[0x2][_0x1eff8b(0x1c4)](/;/g, "")),
        _0xfce68d = math["evaluate"](_0x81358);
    variables[_0x1ef21c[0x1]] = { value: _0xfce68d, extension: _0x1eff8b(0x1da), type: _0x1eff8b(0x1da) };
}
function getSetVar(_0x2e1ad2) {
    const _0x20e32f = _0x1919e9,
        _0x6ae497 = _0x2e1ad2[_0x20e32f(0x1e4)]("\x20");
    if (_0x6ae497[0x0] == "") _0x6ae497[_0x20e32f(0x1d2)]();
    if (_0x6ae497[_0x20e32f(0x1e2)] <= 0x0) return;
    if (_0x6ae497[0x0]["replace"](/ /g, "") !== Constants[_0x20e32f(0x1d1)]) return;
    const _0x5df485 = _0x6ae497[0x1];
    let _0x420843 = _0x6ae497[_0x20e32f(0x1fd)](0x3)[_0x20e32f(0x1ba)]("\x20");
    if (!variables[_0x5df485]) throw new SyntaxError(_0x20e32f(0x202) + _0x5df485 + "\x22\x20couldn\x27t\x20be\x20found");
    isNaN(_0x420843)
        ? (variables[_0x5df485][_0x20e32f(0x1b8)] = _0x420843)
        : (variables[_0x5df485][_0x20e32f(0x1b8)] = parseFloat(_0x420843));
    if (variables[_0x420843[_0x20e32f(0x1c4)](/ /g, "")])
        variables[_0x5df485]["value"] = variables[_0x420843["replace"](/ /g, "")][_0x20e32f(0x1b8)];
    switch (variables[_0x5df485][_0x20e32f(0x1cd)]) {
        case Constants[_0x20e32f(0x204)][_0x20e32f(0x1f6)]["INT"]: {
            if (variables[_0x420843[_0x20e32f(0x1c4)](/ /g, "")]) return;
            if (isNaN(_0x420843)) throw new SyntaxError(_0x20e32f(0x1d5));
            else {
                if (_0x420843[_0x20e32f(0x207)](".")) throw new SyntaxError(_0x20e32f(0x1bb));
            }
            break;
        }
        case Constants[_0x20e32f(0x204)][_0x20e32f(0x1f6)]["STRING"]: {
            if (variables[_0x420843[_0x20e32f(0x1c4)](/ /g, "")]) return;
            if (!isNaN(_0x420843)) throw new SyntaxError("You\x20cannot\x20asign\x20a\x20number\x20on\x20string");
            else {
                if (!_0x420843[_0x20e32f(0x207)]("\x22")) throw new SyntaxError(_0x20e32f(0x1f4));
            }
            break;
        }
        case Constants["SYSTEM"][_0x20e32f(0x1f6)][_0x20e32f(0x1af)]: {
            if (variables[_0x420843[_0x20e32f(0x1c4)](/ /g, "")]) return;
            if (_0x420843 != "true" && _0x420843 != _0x20e32f(0x1d4)) throw new SyntaxError(_0x20e32f(0x1de));
            break;
        }
        case Constants[_0x20e32f(0x204)][_0x20e32f(0x1f6)][_0x20e32f(0x1c0)]: {
            if (variables[_0x420843[_0x20e32f(0x1c4)](/ /g, "")]) return;
            if (_0x420843[_0x20e32f(0x1e2)] > 0x1 && !_0x420843[_0x20e32f(0x207)]("\x22"))
                throw new SyntaxError(
                    "You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type\x20and\x20you\x20muse\x20use\x20Double\x20Quotes:\x20\x22A\x22"
                );
            else {
                if (_0x420843[_0x20e32f(0x1c4)](/"/g, "")["length"] > 0x1)
                    throw new SyntaxError("You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type");
                else {
                    if (!isNaN(_0x420843)) throw new SyntaxError("You\x20cannot\x20asign\x20a\x20number\x20on\x20string");
                    else {
                        if (!_0x420843[_0x20e32f(0x207)]("\x22")) throw new SyntaxError(_0x20e32f(0x1f4));
                    }
                }
            }
            break;
        }
        case Constants[_0x20e32f(0x204)][_0x20e32f(0x1f6)][_0x20e32f(0x1d8)]: {
            if (variables[_0x420843["replace"](/ /g, "")]) return;
            if (isNaN(_0x420843) && !_0x420843[_0x20e32f(0x207)]("\x22")) throw new SyntaxError(_0x20e32f(0x1f4));
            break;
        }
    }
    (_0x420843 == _0x20e32f(0x1be) || _0x420843 == _0x20e32f(0x1d4)) &&
        (variables[_0x5df485][_0x20e32f(0x1b8)] = JSON["parse"](_0x420843));
}
async function getTrollAsk(_0x2c9592) {
    const _0x281c72 = _0x1919e9,
        _0x2ab51d = _0x2c9592[_0x281c72(0x1e4)]("\x20>>\x20");
    if (_0x2ab51d[0x0] == "") _0x2ab51d[_0x281c72(0x1d2)]();
    if (_0x2ab51d["length"] <= 0x0) return;
    const _0x58ed85 = _0x2ab51d[0x0],
        _0x2f1d8e = _0x2ab51d[0x1],
        _0x20e963 = _0x2ab51d[0x2];
    if (!_0x2ab51d[0x3]) return;
    const _0x522caf = _0x2ab51d[0x3]["replace"](/{|}/g, "")[_0x281c72(0x1e4)](";");
    if (_0x58ed85 !== Constants[_0x281c72(0x1b6)]) return;
    if (!_0x2f1d8e[_0x281c72(0x1bf)]("\x22") && !_0x2f1d8e[_0x281c72(0x1ed)]("\x22")) return new SyntaxError(_0x281c72(0x1b1));
    const _0x4d09b7 = await askQuestion(_0x2f1d8e[_0x281c72(0x1c4)](/"/g, ""));
    variables[_0x20e963] = { value: _0x4d09b7, extension: Constants[_0x281c72(0x1b6)], type: Constants["TROLLASK"] };
    const _0x416ab3 = new Lexer(_0x522caf);
    _0x416ab3[_0x281c72(0x200)]();
}
function getTrollAdd(_0x5ba0d3) {
    const _0x2b7ca0 = _0x1919e9;
    let _0x2ee865 = _0x5ba0d3[_0x2b7ca0(0x1e4)]("\x20"),
        _0x55f914;
    _0x2ee865[0x0] == "" && (_0x2ee865[_0x2b7ca0(0x1d2)](), (_0x55f914 = _0x2ee865), (_0x2ee865 = []));
    for (let _0x54d735 = 0x0; _0x54d735 < _0x55f914?.[_0x2b7ca0(0x1e2)]; _0x54d735++) {
        _0x55f914[_0x54d735] && _0x2ee865[_0x2b7ca0(0x1d3)](_0x55f914[_0x54d735]);
    }
    if (_0x2ee865["length"] <= 0x0) return;
    if (_0x2ee865[0x0][_0x2b7ca0(0x1c4)](/ /g, "") != Constants[_0x2b7ca0(0x1cb)]) return;
    const _0x30151e = _0x2ee865[0x1];
    let _0x35ffa3 = _0x2ee865["slice"](0x3)[_0x2b7ca0(0x1ba)]("\x20");
    if (!variables[_0x30151e]) throw new SyntaxError("Variable\x20\x22" + _0x30151e + _0x2b7ca0(0x1fa));
    if (
        variables[_0x30151e][_0x2b7ca0(0x1cd)] != _0x2b7ca0(0x1cf) &&
        variables[_0x30151e][_0x2b7ca0(0x1cd)] != _0x2b7ca0(0x1ee) &&
        variables[_0x30151e][_0x2b7ca0(0x1cd)] != _0x2b7ca0(0x1ae)
    )
        throw new SyntaxError(_0x2b7ca0(0x1ca));
    if (isNaN(_0x35ffa3)) throw new SyntaxError(_0x2b7ca0(0x208));
    if (
        _0x35ffa3["includes"](".") &&
        variables[_0x30151e][_0x2b7ca0(0x1cd)] != Constants[_0x2b7ca0(0x204)]["VARIABLE_TYPES"]["FLOAT"]
    )
        throw new SyntaxError(_0x2b7ca0(0x1e9));
    variables[_0x30151e]["value"] = parseFloat(variables[_0x30151e][_0x2b7ca0(0x1b8)]) + parseFloat(_0x35ffa3);
}
function getTrollMinus(_0x597a94) {
    const _0x434599 = _0x1919e9;
    let _0x11b4f4 = _0x597a94[_0x434599(0x1e4)]("\x20"),
        _0x2ed97e;
    _0x11b4f4[0x0] == "" && (_0x11b4f4["shift"](), (_0x2ed97e = _0x11b4f4), (_0x11b4f4 = []));
    for (let _0xf2ee92 = 0x0; _0xf2ee92 < _0x2ed97e?.[_0x434599(0x1e2)]; _0xf2ee92++) {
        _0x2ed97e[_0xf2ee92] && _0x11b4f4[_0x434599(0x1d3)](_0x2ed97e[_0xf2ee92]);
    }
    if (_0x11b4f4[_0x434599(0x1e2)] <= 0x0) return;
    if (_0x11b4f4[0x0][_0x434599(0x1c4)](/ /g, "") !== Constants[_0x434599(0x203)]) return;
    const _0x4a614b = _0x11b4f4[0x1];
    let _0x43c97e = _0x11b4f4["slice"](0x3)[_0x434599(0x1ba)]("\x20");
    if (!variables[_0x4a614b]) throw new SyntaxError(_0x434599(0x202) + _0x4a614b + _0x434599(0x1fa));
    if (
        variables[_0x4a614b][_0x434599(0x1cd)] != "int" &&
        variables[_0x4a614b]["extension"] != "float" &&
        variables[_0x4a614b]["extension"] != _0x434599(0x1ae)
    )
        throw new SyntaxError(_0x434599(0x1ca));
    if (isNaN(_0x43c97e)) throw new SyntaxError(_0x434599(0x208));
    if (
        _0x43c97e[_0x434599(0x207)](".") &&
        variables[_0x4a614b]["extension"] != Constants[_0x434599(0x204)]["VARIABLE_TYPES"]["FLOAT"]
    )
        throw new SyntaxError(_0x434599(0x1e9));
    variables[_0x4a614b][_0x434599(0x1b8)] = parseFloat(variables[_0x4a614b]["value"]) - parseFloat(_0x43c97e);
}
function getTrollMultiply(_0x3737bc) {
    const _0x2babd9 = _0x1919e9;
    let _0x231843 = _0x3737bc[_0x2babd9(0x1e4)]("\x20"),
        _0x5ed625;
    _0x231843[0x0] == "" && (_0x231843["shift"](), (_0x5ed625 = _0x231843), (_0x231843 = []));
    for (let _0x2e15d2 = 0x0; _0x2e15d2 < _0x5ed625?.[_0x2babd9(0x1e2)]; _0x2e15d2++) {
        _0x5ed625[_0x2e15d2] && _0x231843[_0x2babd9(0x1d3)](_0x5ed625[_0x2e15d2]);
    }
    if (_0x231843["length"] <= 0x0) return;
    if (_0x231843[0x0][_0x2babd9(0x1c4)](/ /g, "") !== Constants[_0x2babd9(0x1fb)]) return;
    const _0x3e6af2 = _0x231843[0x1];
    let _0x469e50 = _0x231843[_0x2babd9(0x1fd)](0x3)[_0x2babd9(0x1ba)]("\x20");
    if (!variables[_0x3e6af2]) throw new SyntaxError(_0x2babd9(0x202) + _0x3e6af2 + _0x2babd9(0x1fa));
    if (
        variables[_0x3e6af2][_0x2babd9(0x1cd)] != "int" &&
        variables[_0x3e6af2]["extension"] != _0x2babd9(0x1ee) &&
        variables[_0x3e6af2]["extension"] != _0x2babd9(0x1ae)
    )
        throw new SyntaxError(_0x2babd9(0x1ca));
    if (isNaN(_0x469e50)) throw new SyntaxError(_0x2babd9(0x208));
    if (
        _0x469e50["includes"](".") &&
        variables[_0x3e6af2]["extension"] != Constants[_0x2babd9(0x204)][_0x2babd9(0x201)][_0x2babd9(0x1d6)]
    )
        throw new SyntaxError("Cannot\x20asign\x20a\x20float\x20value\x20to\x20int");
    variables[_0x3e6af2]["value"] = parseFloat(variables[_0x3e6af2][_0x2babd9(0x1b8)]) * parseFloat(_0x469e50);
}
function getTrollDivide(_0x5066fe) {
    const _0x47cfa0 = _0x1919e9;
    let _0x5d93ae = _0x5066fe[_0x47cfa0(0x1e4)]("\x20"),
        _0x2f7cf2;
    _0x5d93ae[0x0] == "" && (_0x5d93ae[_0x47cfa0(0x1d2)](), (_0x2f7cf2 = _0x5d93ae), (_0x5d93ae = []));
    for (let _0x31e766 = 0x0; _0x31e766 < _0x2f7cf2?.[_0x47cfa0(0x1e2)]; _0x31e766++) {
        _0x2f7cf2[_0x31e766] && _0x5d93ae["push"](_0x2f7cf2[_0x31e766]);
    }
    if (_0x5d93ae[_0x47cfa0(0x1e2)] <= 0x0) return;
    if (_0x5d93ae[0x0][_0x47cfa0(0x1c4)](/ /g, "") !== Constants[_0x47cfa0(0x1ea)]) return;
    const _0x5c60a8 = _0x5d93ae[0x1];
    let _0x827d82 = _0x5d93ae[_0x47cfa0(0x1fd)](0x3)[_0x47cfa0(0x1ba)]("\x20");
    if (!variables[_0x5c60a8]) throw new SyntaxError(_0x47cfa0(0x202) + _0x5c60a8 + "\x22\x20couldn\x27t\x20be\x20found");
    if (
        variables[_0x5c60a8]["extension"] != _0x47cfa0(0x1cf) &&
        variables[_0x5c60a8][_0x47cfa0(0x1cd)] != _0x47cfa0(0x1ee) &&
        variables[_0x5c60a8][_0x47cfa0(0x1cd)] != "any"
    )
        throw new SyntaxError(_0x47cfa0(0x1ca));
    if (isNaN(_0x827d82)) throw new SyntaxError("Value\x20must\x20be\x20a\x20number!");
    if (
        _0x827d82[_0x47cfa0(0x207)](".") &&
        variables[_0x5c60a8][_0x47cfa0(0x1cd)] != Constants[_0x47cfa0(0x204)][_0x47cfa0(0x201)]["FLOAT"]
    )
        throw new SyntaxError(_0x47cfa0(0x1e9));
    variables[_0x5c60a8][_0x47cfa0(0x1b8)] = parseFloat(variables[_0x5c60a8]["value"]) / parseFloat(_0x827d82);
}
function getWindow(_0xfa0d26) {
    const _0x44a90c = _0x1919e9;
    let _0x39d062 = _0xfa0d26[_0x44a90c(0x1e4)]("\x20"),
        _0x5f5c6f;
    _0x39d062[0x0] == "" && (_0x39d062[_0x44a90c(0x1d2)](), (_0x5f5c6f = _0x39d062), (_0x39d062 = []));
    for (let _0x214255 = 0x0; _0x214255 < _0x5f5c6f?.[_0x44a90c(0x1e2)]; _0x214255++) {
        _0x5f5c6f[_0x214255] && _0x39d062[_0x44a90c(0x1d3)](_0x5f5c6f[_0x214255]);
    }
    if (_0x39d062["length"] <= 0x0) return;
    if (_0x39d062[0x0][_0x44a90c(0x1c4)](/ /g, "") !== Constants[_0x44a90c(0x1fc)][_0x44a90c(0x1f2)]) return;
    let _0x66183b, _0x4e553d, _0x5c883d;
    (_0x66183b = _0x39d062[0x0] || null),
        (_0x5c883d = _0x39d062[0x1] || null),
        (_0x4e553d = _0x39d062[_0x44a90c(0x1fd)](0x3)["join"]("\x20")[_0x44a90c(0x1c4)](";", ""));
    const _0x347c73 = _0x4e553d[_0x44a90c(0x1c4)](/\)|Troll.window/g, "")
            ["split"]("(")
            [_0x44a90c(0x1ba)]("\x20")
            [_0x44a90c(0x1e4)](",\x20"),
        _0x4c6f1f = Handler[_0x44a90c(0x1b9)](
            parseFloat(_0x347c73[0x0]),
            parseFloat(_0x347c73[0x1]),
            parseFloat(_0x347c73[0x2]),
            parseFloat(_0x347c73[0x3]),
            JSON[_0x44a90c(0x1f1)](_0x347c73[0x4]),
            _0x347c73[0x5] || null
        );
    windows[_0x5c883d] = { values: _0x347c73 };
}
function _0x1c51() {
    const _0x40cb53 = [
        "toString",
        "7nuvxdJ",
        "Channel\x20name\x20wasn\x27t\x20declared",
        "WHILE",
        "!==",
        "any",
        "BOOLEAN",
        "2185608nDRjNd",
        "Text\x20to\x20say\x20must\x20be\x20a\x20string!",
        "57747DAISZN",
        "Type,\x20Name\x20or\x20arguments\x20is\x20missing!",
        "You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type\x20and\x20you\x20muse\x20use\x20Double\x20Quotes:\x20\x22A\x22",
        "You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type",
        "TROLLASK",
        "ready",
        "value",
        "createWindow",
        "join",
        "You\x20cannot\x20asign\x20a\x20float\x20number\x20on\x20integer",
        "6619680dUqdNx",
        "4099630WeNrRj",
        "true",
        "startsWith",
        "CHARACTER",
        "log",
        "164ZowIfn",
        "7084105rsxxwl",
        "replace",
        "exports",
        "358678iaaMSU",
        "CALL",
        "readline",
        "5161446ASMkCu",
        "Cannot\x20asign\x20a\x20number\x20on\x20string,\x20bool\x20and\x20char",
        "TROLLADD",
        "INT",
        "extension",
        "FUNCTION",
        "int",
        "Type\x20or\x20Sum\x20is\x20missing!",
        "SET_VAR",
        "shift",
        "push",
        "false",
        "You\x20cannot\x20asign\x20a\x20string\x20on\x20integer",
        "FLOAT",
        "Window\x20\x22",
        "ANY",
        "Function\x20name,\x20arguments\x20or\x20callback\x20is\x20missing!",
        "trollmath",
        "null",
        "STRING",
        "advance",
        "You\x20can\x20only\x20assign\x20true\x20or\x20false\x20on\x20boolean\x20types",
        "Troll.Face.System.Log(",
        "../errors/Errors",
        "TROLLIPC",
        "length",
        "You\x20cannot\x20asign\x20a\x20number\x20on\x20string",
        "split",
        "../constants/Constants",
        "loadURL",
        "data",
        "VARIABLE",
        "Cannot\x20asign\x20a\x20float\x20value\x20to\x20int",
        "TROLLDIVIDE",
        "currIndex",
        "createInterface",
        "endsWith",
        "float",
        "stdin",
        "funcName",
        "parse",
        "WINDOW",
        "MATH",
        "To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22",
        "loadFile",
        "VARIABLES",
        "FOR",
        "checkLogs",
        "invokeHandler",
        "\x22\x20couldn\x27t\x20be\x20found",
        "TROLLMULTIPLY",
        "ELECTRON",
        "slice",
        "\x20>>\x20",
        "close",
        "start",
        "VARIABLE_TYPES",
        "Variable\x20\x22",
        "TROLLMINUS",
        "SYSTEM",
        "arguments",
        "===",
        "includes",
        "Value\x20must\x20be\x20a\x20number!",
        "mathjs",
        "question",
    ];
    _0x1c51 = function () {
        return _0x40cb53;
    };
    return _0x1c51();
}
function _0x584f(_0x43b566, _0x321a7d) {
    const _0x1c51a6 = _0x1c51();
    return (
        (_0x584f = function (_0x584ff5, _0x401c42) {
            _0x584ff5 = _0x584ff5 - 0x1a9;
            let _0x491cf3 = _0x1c51a6[_0x584ff5];
            return _0x491cf3;
        }),
        _0x584f(_0x43b566, _0x321a7d)
    );
}
function getTrollWindow(_0x2382fa) {
    const _0x26ab3d = _0x1919e9;
    let _0x29e81c = _0x2382fa[_0x26ab3d(0x1e4)]("\x20"),
        _0x57ab8d;
    _0x29e81c[0x0] == "" && (_0x29e81c[_0x26ab3d(0x1d2)](), (_0x57ab8d = _0x29e81c), (_0x29e81c = []));
    for (let _0x4c6908 = 0x0; _0x4c6908 < _0x57ab8d?.[_0x26ab3d(0x1e2)]; _0x4c6908++) {
        _0x57ab8d[_0x4c6908] && _0x29e81c["push"](_0x57ab8d[_0x4c6908]);
    }
    if (_0x29e81c[_0x26ab3d(0x1e2)] <= 0x0) return;
    if (_0x29e81c[0x0][_0x26ab3d(0x1c4)](/ /g, "") !== Constants[_0x26ab3d(0x1fc)]["TROLLWINDOW"]) return;
    let _0x2878d0, _0x20a873, _0x4c55be;
    (_0x2878d0 = _0x29e81c[0x0] || null),
        (_0x4c55be = _0x29e81c[0x1] || null),
        (_0x20a873 = _0x29e81c[_0x26ab3d(0x1fd)](0x3)[_0x26ab3d(0x1ba)]("\x20")[_0x26ab3d(0x1c4)](";", ""));
    let _0x31cbd3 = _0x20a873[_0x26ab3d(0x1c4)](/\)|name|"/g, "")[_0x26ab3d(0x1e4)]("(");
    if (!windows[_0x4c55be[_0x26ab3d(0x1c4)](/ /g, "")])
        throw new SyntaxError(_0x26ab3d(0x1d7) + _0x4c55be["replace"](/ /g, "") + "\x22\x20couldn\x27t\x20be\x20found");
    if (!windows[_0x31cbd3[0x0][_0x26ab3d(0x1c4)](/.loadFile|.loadURL/g, "")])
        throw new SyntaxError(
            _0x26ab3d(0x1d7) + _0x31cbd3[0x0][_0x26ab3d(0x1c4)](/.loadFile|.loadURL/g, "") + "\x22\x20couldn\x27t\x20be\x20found"
        );
    if (_0x31cbd3[0x0][_0x26ab3d(0x207)](_0x26ab3d(0x1f5))) Handler[_0x26ab3d(0x1f5)](_0x31cbd3[0x1]);
    if (_0x31cbd3[0x0][_0x26ab3d(0x207)](_0x26ab3d(0x1e6))) Handler["loadURL"](_0x31cbd3[0x1]);
}
function getTrollIpc(_0x5a32f1) {
    const _0x549abe = _0x1919e9;
    let _0x45445f = _0x5a32f1[_0x549abe(0x1e4)](_0x549abe(0x1fe)),
        _0x791738;
    _0x45445f[0x0] == "" && (_0x45445f[_0x549abe(0x1d2)](), (_0x791738 = _0x45445f), (_0x45445f = []));
    for (let _0x382a7b = 0x0; _0x382a7b < _0x791738?.[_0x549abe(0x1e2)]; _0x382a7b++) {
        _0x791738[_0x382a7b] && _0x45445f["push"](_0x791738[_0x382a7b]);
    }
    if (_0x45445f[_0x549abe(0x1e2)] <= 0x0) return;
    if (_0x45445f[0x0]["replace"](/ /g, "") !== Constants[_0x549abe(0x1fc)][_0x549abe(0x1e1)]) return;
    let _0x3e4050 = _0x45445f[0x0] || null,
        _0xdda261 = _0x45445f[0x1] || null,
        _0x26bf42 = _0x45445f[0x2] || null,
        _0x14f64a = _0x45445f[0x3]["split"](",\x20") || null,
        _0x187444 = _0x45445f[0x4]["replace"](/{|}/g, "")[_0x549abe(0x1e4)](";");
    if (_0x14f64a == _0x549abe(0x1db)) _0x14f64a = null;
    if (!_0x26bf42) throw new SyntaxError(_0x549abe(0x1ab));
    if (!windows[_0xdda261[_0x549abe(0x1c4)](/ /g, "")])
        throw new SyntaxError(_0x549abe(0x1d7) + _0xdda261[_0x549abe(0x1c4)](/ /g, "") + _0x549abe(0x1fa));
    Handler[_0x549abe(0x1f9)](_0x26bf42, _0x187444, _0x14f64a);
}
class Lexer {
    constructor(_0x506954) {
        const _0x2e89d3 = _0x1919e9;
        (this[_0x2e89d3(0x1e7)] = _0x506954), (this[_0x2e89d3(0x1eb)] = 0x0);
    }
    [_0x1919e9(0x1dd)]() {
        const _0x1f0f43 = _0x1919e9;
        this[_0x1f0f43(0x1eb)] < this[_0x1f0f43(0x1e7)][_0x1f0f43(0x1e2)] - 0x1
            ? this[_0x1f0f43(0x1eb)]++
            : (this[_0x1f0f43(0x1eb)] = null);
    }
    async [_0x1919e9(0x200)]() {
        const _0x220093 = _0x1919e9;
        while (this[_0x220093(0x1eb)] != null) {
            !this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]][_0x220093(0x1bf)]("#") &&
                !paused &&
                (this["checkLogs"](),
                getVariableName(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getIfStatement(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getFunctions(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getCalledFunction(this["data"][this[_0x220093(0x1eb)]]),
                getMath(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getSetVar(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getTrollAsk(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getTrollAdd(this[_0x220093(0x1e7)][this["currIndex"]]),
                getTrollMinus(this[_0x220093(0x1e7)][this["currIndex"]]),
                getTrollMultiply(this[_0x220093(0x1e7)][this["currIndex"]]),
                getTrollDivide(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getWhileStatement(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getForStatement(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getWindow(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getTrollWindow(this[_0x220093(0x1e7)][this[_0x220093(0x1eb)]]),
                getTrollIpc(this[_0x220093(0x1e7)][this["currIndex"]]),
                this[_0x220093(0x1dd)]());
        }
    }
    [_0x1919e9(0x1f8)]() {
        const _0x4571b6 = _0x1919e9;
        if (
            this[_0x4571b6(0x1e7)][this[_0x4571b6(0x1eb)]]["includes"](Constants["SYSTEM"]["LOG"]) &&
            !this[_0x4571b6(0x1e7)][this[_0x4571b6(0x1eb)]][_0x4571b6(0x1bf)](Constants[_0x4571b6(0x1ce)]) &&
            !this[_0x4571b6(0x1e7)][this["currIndex"]][_0x4571b6(0x1bf)](Constants["IF"]) &&
            !this["data"][this[_0x4571b6(0x1eb)]][_0x4571b6(0x1bf)](Constants[_0x4571b6(0x1ac)]) &&
            !this["data"][this["currIndex"]]["startsWith"](Constants[_0x4571b6(0x1f7)]) &&
            !this[_0x4571b6(0x1e7)][this[_0x4571b6(0x1eb)]]["startsWith"](Constants[_0x4571b6(0x1b6)])
        ) {
            let _0x88f7cd = this[_0x4571b6(0x1e7)][this[_0x4571b6(0x1eb)]]
                ["replace"](")", "")
                ["replace"](";", "")
                [_0x4571b6(0x1e4)](_0x4571b6(0x1df))
                [_0x4571b6(0x1ba)]("\x20");
            if (_0x88f7cd[_0x4571b6(0x207)]("\x22")) console["log"](_0x88f7cd[_0x4571b6(0x1c4)](/"/g, ""));
            else {
                if (_0x88f7cd[_0x4571b6(0x207)]("+")) {
                    const _0x4ba52f = _0x88f7cd["split"]("+");
                    let _0x154f47 = "";
                    for (let _0x5ab806 = 0x0; _0x5ab806 < _0x4ba52f[_0x4571b6(0x1e2)]; _0x5ab806++) {
                        let _0x37a95f;
                        if (variables[_0x4ba52f[_0x5ab806][_0x4571b6(0x1c4)](/ /g, "")][_0x4571b6(0x1b8)])
                            _0x37a95f =
                                variables[_0x4ba52f[_0x5ab806][_0x4571b6(0x1c4)](/ /g, "")][_0x4571b6(0x1b8)][_0x4571b6(0x1c4)](
                                    /"/g,
                                    ""
                                ) + "\x20";
                        _0x154f47 += "" + _0x37a95f;
                    }
                    console["log"](_0x154f47);
                } else
                    isNaN(variables[_0x88f7cd[_0x4571b6(0x1c4)](/ /g, "")][_0x4571b6(0x1b8)])
                        ? console[_0x4571b6(0x1c1)](
                              variables[_0x88f7cd[_0x4571b6(0x1c4)](/ /g, "")][_0x4571b6(0x1b8)]
                                  [_0x4571b6(0x1a9)]()
                                  ["replace"](/"/g, "")
                          )
                        : console[_0x4571b6(0x1c1)](variables[_0x88f7cd[_0x4571b6(0x1c4)](/ /g, "")][_0x4571b6(0x1b8)]);
            }
        }
    }
}
module[_0x1919e9(0x1c5)] = Lexer;
