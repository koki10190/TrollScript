const _0x279d26 = _0x49ed;
(function (_0x289969, _0x56a9f8) {
    const _0x2b3280 = _0x49ed,
        _0x567724 = _0x289969();
    while (!![]) {
        try {
            const _0x1b75bf =
                -parseInt(_0x2b3280(0x170)) / 0x1 +
                (-parseInt(_0x2b3280(0x18d)) / 0x2) * (-parseInt(_0x2b3280(0x159)) / 0x3) +
                (parseInt(_0x2b3280(0x14a)) / 0x4) * (parseInt(_0x2b3280(0x180)) / 0x5) +
                -parseInt(_0x2b3280(0x135)) / 0x6 +
                parseInt(_0x2b3280(0x137)) / 0x7 +
                parseInt(_0x2b3280(0x141)) / 0x8 +
                (parseInt(_0x2b3280(0x14c)) / 0x9) * (parseInt(_0x2b3280(0x18c)) / 0xa);
            if (_0x1b75bf === _0x56a9f8) break;
            else _0x567724["push"](_0x567724["shift"]());
        } catch (_0x4da081) {
            _0x567724["push"](_0x567724["shift"]());
        }
    }
})(_0x3d42, 0x2288a);
const Constants = require(_0x279d26(0x14d)),
    readline = require(_0x279d26(0x140)),
    math = require(_0x279d26(0x149)),
    { SyntaxError } = require(_0x279d26(0x187)),
    variables = {},
    functions = {},
    windows = {};
let paused = ![];
function _0x3d42() {
    const _0x2ac797 = [
        "false",
        "mathjs",
        "4hWUHIg",
        "shift",
        "29871ptiLih",
        "../constants/Constants",
        "any",
        "callback",
        "log",
        "ANY",
        "split",
        "MATH",
        "VARIABLE",
        "INT",
        "Window\x20\x22",
        "Type\x20or\x20Sum\x20is\x20missing!",
        "currIndex",
        "3423wTGARL",
        "Cannot\x20asign\x20a\x20float\x20value\x20to\x20int",
        "To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22",
        "ELECTRON",
        "loadURL",
        "float",
        "STRING",
        "Channel\x20name\x20wasn\x27t\x20declared",
        "TROLLMINUS",
        "int",
        "join",
        "funcName",
        "handle",
        "TROLLADD",
        "FLOAT",
        "createWindow",
        "Variable\x20\x22",
        "\x20>>\x20",
        "BOOLEAN",
        "startsWith",
        "question",
        "null",
        "endsWith",
        "255886bhvNpX",
        "TROLLASK",
        "Cannot\x20asign\x20a\x20number\x20on\x20string,\x20bool\x20and\x20char",
        "toString",
        "SYSTEM",
        "evaluate",
        "true",
        "VARIABLE_TYPES",
        "Type,\x20Name\x20or\x20arguments\x20is\x20missing!",
        "ready",
        "Value\x20must\x20be\x20a\x20number!",
        "value",
        "electron",
        "\x20->\x20",
        "loadFile",
        "arguments",
        "756065zPhoHE",
        "path/to/file",
        "extension",
        "trollmath",
        "You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type",
        "exports",
        "!==",
        "../errors/Errors",
        "You\x20cannot\x20asign\x20a\x20number\x20on\x20string",
        "checkLogs",
        "slice",
        "FOR",
        "380EcqZVa",
        "86OHSVHp",
        "LOG",
        "parse",
        "WHILE",
        "data",
        "includes",
        "stdin",
        "TROLLMULTIPLY",
        "\x22\x20couldn\x27t\x20be\x20found",
        "You\x20can\x20only\x20assign\x20true\x20or\x20false\x20on\x20boolean\x20types",
        "872082XjRnHp",
        "invokeHandler",
        "1164877eDSPnp",
        "length",
        "TROLLIPC",
        "Troll.Face.System.Log(",
        "VARIABLES",
        "CALL",
        "push",
        "You\x20can\x20only\x20have\x20one\x20character\x20in\x20character\x20type\x20and\x20you\x20muse\x20use\x20Double\x20Quotes:\x20\x22A\x22",
        "You\x20cannot\x20asign\x20a\x20float\x20number\x20on\x20integer",
        "readline",
        "398992ZRHwzu",
        "WINDOW",
        "replace",
        "CHARACTER",
        "createInterface",
        "advance",
        "start",
    ];
    _0x3d42 = function () {
        return _0x2ac797;
    };
    return _0x3d42();
}
class Electron {
    [_0x279d26(0x168)](_0x3a272a, _0x1d232b, _0x4dbc90, _0x50b273, _0x1c3f47, _0x524e46) {
        const _0x75e641 = _0x279d26,
            { app: _0x29c73f, BrowserWindow: _0x518d5a, ipcMain: _0x28d7e4 } = require(_0x75e641(0x17c));
        _0x29c73f["on"](_0x75e641(0x179), () => {
            const _0x26d40b = _0x75e641;
            window = new _0x518d5a({
                minHeight: _0x1d232b || null,
                minWidth: _0x3a272a || null,
                maxHeight: _0x50b273 || null,
                maxWidth: _0x4dbc90 || null,
                autoHideMenuBar: !![],
                frame: _0x1c3f47,
                icon: _0x524e46[_0x26d40b(0x143)](/"/g, ""),
                webPreferences: { nodeIntegration: !![], contextIsolation: ![] },
            });
        });
    }
    [_0x279d26(0x17e)](_0x201cea) {
        const _0x39e1a3 = _0x279d26;
        app["on"](_0x39e1a3(0x179), () => {
            const _0x10c98b = _0x39e1a3;
            window[_0x10c98b(0x17e)](_0x201cea);
        });
    }
    ["loadURL"](_0x438190) {
        const _0x2ac5c3 = _0x279d26;
        app["on"](_0x2ac5c3(0x179), () => {
            window["loadURL"](_0x438190);
        });
    }
    ["invokeHandler"](_0x542235, _0x2c9678, ..._0x47182f) {
        const _0x53a42e = _0x279d26;
        console[_0x53a42e(0x150)](_0x542235[_0x53a42e(0x143)](/"/g, "")),
            ipcMain[_0x53a42e(0x165)](_0x542235[_0x53a42e(0x143)](/"/g, ""), (_0x50266e, ..._0x3898bb) => {
                const _0x20a7c9 = new Lexer(_0x2c9678);
                _0x20a7c9["start"]();
            });
    }
}
let window;
const Handler = new Electron();
function askQuestion(_0x5c8741) {
    const _0x2e27f1 = _0x279d26,
        _0x31327a = readline[_0x2e27f1(0x145)]({ input: process[_0x2e27f1(0x193)], output: process["stdout"] });
    return new Promise(_0x511dc0 =>
        _0x31327a[_0x2e27f1(0x16d)](_0x5c8741, _0x4405ae => {
            _0x31327a["close"](), _0x511dc0(_0x4405ae);
        })
    );
}
function splitMulti(_0x387f0e, _0x1af825) {
    const _0x50fb59 = _0x279d26;
    var _0x577df7 = _0x1af825[0x0];
    for (var _0x413c18 = 0x1; _0x413c18 < _0x1af825[_0x50fb59(0x138)]; _0x413c18++) {
        _0x387f0e = _0x387f0e["split"](_0x1af825[_0x413c18])["join"](_0x577df7);
    }
    return (_0x387f0e = _0x387f0e["split"](_0x577df7)), _0x387f0e;
}
function changeStringToVariable(_0x2394c9) {
    const _0x4f8063 = _0x279d26;
    return (
        (newVal = _0x2394c9[_0x4f8063(0x143)](/\${(.*?)}/g, _0xfdd43b => {
            const _0x133a7a = _0x4f8063,
                _0x329e92 = _0xfdd43b[_0x133a7a(0x18a)](0x2, _0xfdd43b["toString"]()[_0x133a7a(0x138)] - 0x1),
                _0x268877 = _0x329e92[_0x133a7a(0x152)](".");
            return variables[_0x268877[0x0]][_0x133a7a(0x17b)];
        })),
        newVal
    );
}
function getVariableName(_0x36f123) {
    const _0xd3f042 = _0x279d26,
        _0x336015 = _0x36f123;
    let _0x30b5ce = _0x336015[_0xd3f042(0x152)]("\x20"),
        _0x563d41;
    _0x30b5ce[0x0] == "" && (_0x30b5ce[_0xd3f042(0x14b)](), (_0x563d41 = _0x30b5ce), (_0x30b5ce = []));
    for (let _0x51442b = 0x0; _0x51442b < _0x563d41?.["length"]; _0x51442b++) {
        _0x563d41[_0x51442b] && _0x30b5ce[_0xd3f042(0x13d)](_0x563d41[_0x51442b]);
    }
    if (_0x30b5ce["length"] <= 0x0) return;
    if (
        !_0x30b5ce[0x0][_0xd3f042(0x192)](Constants[_0xd3f042(0x174)]["VARIABLES"][_0xd3f042(0x151)]) &&
        !_0x30b5ce[0x0][_0xd3f042(0x192)](Constants[_0xd3f042(0x174)][_0xd3f042(0x13b)][_0xd3f042(0x155)]) &&
        !_0x30b5ce[0x0][_0xd3f042(0x192)](Constants[_0xd3f042(0x174)][_0xd3f042(0x13b)][_0xd3f042(0x15f)]) &&
        !_0x30b5ce[0x0][_0xd3f042(0x192)](Constants[_0xd3f042(0x174)]["VARIABLES"][_0xd3f042(0x16b)]) &&
        !_0x30b5ce[0x0][_0xd3f042(0x192)](Constants[_0xd3f042(0x174)][_0xd3f042(0x13b)][_0xd3f042(0x167)]) &&
        !_0x30b5ce[0x0]["includes"](Constants[_0xd3f042(0x174)][_0xd3f042(0x13b)]["CHARACTER"])
    )
        return;
    let _0x1a064c,
        _0x226f3f,
        _0x4e47b2,
        _0x4f947c,
        _0x28ebac = ![];
    (_0x1a064c = _0x30b5ce[0x0] || null),
        (_0x4e47b2 = _0x30b5ce[0x1] || null),
        (_0x226f3f = _0x30b5ce["slice"](0x3)["join"]("\x20")["replace"](";", ""));
    switch (_0x1a064c) {
        case Constants["SYSTEM"]["VARIABLES"]["INT"]: {
            if (variables[_0x226f3f[_0xd3f042(0x143)](/ /g, "")]) return;
            if (isNaN(_0x226f3f)) throw new SyntaxError("You\x20cannot\x20asign\x20a\x20string\x20on\x20integer");
            else {
                if (_0x226f3f[_0xd3f042(0x192)](".")) throw new SyntaxError(_0xd3f042(0x13f));
            }
            break;
        }
        case Constants[_0xd3f042(0x174)][_0xd3f042(0x13b)]["STRING"]: {
            if (variables[_0x226f3f[_0xd3f042(0x143)](/ /g, "")]) return;
            if (!isNaN(_0x226f3f)) throw new SyntaxError(_0xd3f042(0x188));
            else {
                if (!_0x226f3f[_0xd3f042(0x192)]("\x22")) throw new SyntaxError(_0xd3f042(0x15b));
            }
            break;
        }
        case Constants[_0xd3f042(0x174)]["VARIABLES"][_0xd3f042(0x16b)]: {
            if (variables[_0x226f3f[_0xd3f042(0x143)](/ /g, "")]) return;
            if (_0x226f3f != _0xd3f042(0x176) && _0x226f3f != _0xd3f042(0x148))
                throw new SyntaxError("You\x20can\x20only\x20assign\x20true\x20or\x20false\x20on\x20boolean\x20types");
            break;
        }
        case Constants[_0xd3f042(0x174)]["VARIABLES"][_0xd3f042(0x144)]: {
            if (variables[_0x226f3f[_0xd3f042(0x143)](/ /g, "")]) return;
            if (_0x226f3f[_0xd3f042(0x138)] > 0x1 && !_0x226f3f["includes"]("\x22")) throw new SyntaxError(_0xd3f042(0x13e));
            else {
                if (_0x226f3f[_0xd3f042(0x143)](/"/g, "")[_0xd3f042(0x138)] > 0x1) throw new SyntaxError(_0xd3f042(0x184));
                else {
                    if (!isNaN(_0x226f3f)) throw new SyntaxError("You\x20cannot\x20asign\x20a\x20number\x20on\x20string");
                    else {
                        if (!_0x226f3f[_0xd3f042(0x192)]("\x22")) throw new SyntaxError(_0xd3f042(0x15b));
                    }
                }
            }
            break;
        }
        case Constants["SYSTEM"][_0xd3f042(0x13b)][_0xd3f042(0x151)]: {
            if (variables[_0x226f3f[_0xd3f042(0x143)](/ /g, "")]) return;
            if (isNaN(_0x226f3f) && !_0x226f3f[_0xd3f042(0x192)]("\x22"))
                throw new SyntaxError("To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22");
            break;
        }
    }
    _0x1a064c === Constants[_0xd3f042(0x174)]["VARIABLES"]["BOOLEAN"] &&
        (_0x226f3f = JSON[_0xd3f042(0x18f)](_0x30b5ce[_0xd3f042(0x18a)](0x3)["join"]("\x20")[_0xd3f042(0x143)](";", "")));
    if (_0x226f3f == !![] || _0x226f3f == ![]) _0x4f947c = Constants[_0xd3f042(0x174)][_0xd3f042(0x177)][_0xd3f042(0x16b)];
    else {
        if (_0x226f3f[_0xd3f042(0x192)]("\x22")) _0x4f947c = Constants[_0xd3f042(0x174)]["VARIABLE_TYPES"][_0xd3f042(0x15f)];
        else {
            if (_0x226f3f[_0xd3f042(0x192)](".")) _0x4f947c = Constants[_0xd3f042(0x174)][_0xd3f042(0x177)][_0xd3f042(0x167)];
            else {
                if (isNaN(_0x226f3f)) _0x4f947c = Constants[_0xd3f042(0x174)]["VARIABLE_TYPES"][_0xd3f042(0x154)];
                else _0x4f947c = Constants["SYSTEM"][_0xd3f042(0x177)][_0xd3f042(0x155)];
            }
        }
    }
    if (_0x226f3f && _0x226f3f != ![] && _0x226f3f != !![]) {
        if (variables[_0x226f3f["replace"](/ /g, "")])
            _0x226f3f = variables[_0x226f3f[_0xd3f042(0x143)](/ /g, "")][_0xd3f042(0x17b)];
    }
    variables[_0x4e47b2] = { value: _0x226f3f, extension: _0x1a064c, type: _0x4f947c };
    if (_0x226f3f == !![] || _0x226f3f == ![]) return;
    if (!isNaN(_0x226f3f)) variables[_0x4e47b2]["value"] = parseInt(_0x226f3f);
    _0x226f3f["includes"](".") && (variables[_0x4e47b2][_0xd3f042(0x17b)] = parseFloat(_0x226f3f));
}
function getIfStatement(_0x197f8f) {
    const _0x117a91 = _0x279d26,
        _0x49e7d1 = _0x197f8f[_0x117a91(0x152)](":");
    if (_0x49e7d1[_0x117a91(0x138)] <= 0x1) return;
    if (_0x49e7d1[0x0][_0x117a91(0x143)](/ /g, "") != Constants["IF"]) return;
    const _0x6771a3 = _0x49e7d1[0x3][_0x117a91(0x152)](">>");
    let _0x43cd3d =
            variables[_0x49e7d1[0x1][_0x117a91(0x143)](/ /g, "")]?.[_0x117a91(0x17b)] ||
            _0x49e7d1[0x1][_0x117a91(0x143)](/ /g, ""),
        _0xf6a2f9 = _0x49e7d1[0x2]["replace"](/ /g, ""),
        _0x10dc44 =
            variables[_0x6771a3[0x0][_0x117a91(0x143)](/ /g, "")]?.["value"] || _0x6771a3[0x0][_0x117a91(0x143)](/ /g, ""),
        _0x4a7c6b = _0x6771a3[0x1][_0x117a91(0x143)](/{|}/g, "")[_0x117a91(0x152)](";"),
        _0x106995 = ![];
    if (!isNaN(_0x10dc44)) _0x10dc44 = parseFloat(_0x10dc44);
    if (!isNaN(_0x43cd3d)) _0x43cd3d = parseFloat(_0x43cd3d);
    (variables[_0x49e7d1[0x1]["replace"](/ /g, "")]?.[_0x117a91(0x17b)] === !![] ||
        variables[_0x49e7d1[0x1][_0x117a91(0x143)](/ /g, "")]?.[_0x117a91(0x17b)] === ![]) &&
        (_0x43cd3d = variables[_0x49e7d1[0x1][_0x117a91(0x143)](/ /g, "")]?.["value"]);
    (variables[_0x6771a3[0x0][_0x117a91(0x143)](/ /g, "")]?.[_0x117a91(0x17b)] === !![] ||
        variables[_0x6771a3[0x0][_0x117a91(0x143)](/ /g, "")]?.["value"] === ![]) &&
        (_0x10dc44 = variables[_0x6771a3[0x0]["replace"](/ /g, "")]?.["value"]);
    if (_0x43cd3d == _0x117a91(0x148) || _0x43cd3d == _0x117a91(0x176)) _0x43cd3d = JSON[_0x117a91(0x18f)](_0x43cd3d);
    if (_0x10dc44 == _0x117a91(0x148) || _0x10dc44 == _0x117a91(0x176)) _0x10dc44 = JSON[_0x117a91(0x18f)](_0x10dc44);
    switch (_0xf6a2f9) {
        case "==": {
            if (_0x43cd3d == _0x10dc44) _0x106995 = !![];
            break;
        }
        case "===": {
            if (_0x43cd3d === _0x10dc44) _0x106995 = !![];
            break;
        }
        case "!=": {
            if (_0x43cd3d != _0x10dc44) _0x106995 = !![];
            break;
        }
        case _0x117a91(0x186): {
            if (_0x43cd3d !== _0x10dc44) _0x106995 = !![];
            break;
        }
        case "<=": {
            if (_0x43cd3d <= _0x10dc44) _0x106995 = !![];
            break;
        }
        case ">=": {
            if (_0x43cd3d >= _0x10dc44) _0x106995 = !![];
            break;
        }
        case ">": {
            if (_0x43cd3d > _0x10dc44) _0x106995 = !![];
            break;
        }
        case "<": {
            if (_0x43cd3d < _0x10dc44) _0x106995 = !![];
            break;
        }
    }
    if (_0x106995) {
        const _0x49422c = new Lexer(_0x4a7c6b);
        _0x49422c["start"]();
    }
}
function getWhileStatement(_0x4f8532) {
    const _0x352bf6 = _0x279d26,
        _0x43786a = _0x4f8532[_0x352bf6(0x152)](":");
    if (_0x43786a["length"] <= 0x1) return;
    if (_0x43786a[0x0]["replace"](/ /g, "") != Constants[_0x352bf6(0x190)]) return;
    const _0x168ec5 = _0x43786a[0x3][_0x352bf6(0x152)](">>");
    let _0x5a7dca =
            variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.["value"] || _0x43786a[0x1][_0x352bf6(0x143)](/ /g, ""),
        _0x3a1006 = _0x43786a[0x2][_0x352bf6(0x143)](/ /g, ""),
        _0xb10894 =
            variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
            _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""),
        _0x3e2843 = _0x168ec5[0x1][_0x352bf6(0x143)](/{|}/g, "")[_0x352bf6(0x152)](";");
    if (!isNaN(_0xb10894)) _0xb10894 = parseFloat(_0xb10894);
    if (!isNaN(_0x5a7dca)) _0x5a7dca = parseFloat(_0x5a7dca);
    (variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] === !![] ||
        variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.["value"] === ![]) &&
        (_0x5a7dca = variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)]);
    (variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] === !![] ||
        variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] === ![]) &&
        (_0xb10894 = variables[_0x168ec5[0x0]["replace"](/ /g, "")]?.["value"]);
    if (_0x5a7dca == _0x352bf6(0x148) || _0x5a7dca == _0x352bf6(0x176)) _0x5a7dca = JSON[_0x352bf6(0x18f)](_0x5a7dca);
    if (_0xb10894 == _0x352bf6(0x148) || _0xb10894 == _0x352bf6(0x176)) _0xb10894 = JSON[_0x352bf6(0x18f)](_0xb10894);
    switch (_0x3a1006) {
        case "==": {
            while (_0x5a7dca == _0xb10894) {
                const _0x2edd62 = new Lexer(_0x3e2843);
                _0x2edd62["start"](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.["value"] ||
                        _0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.["value"] ||
                        _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""));
            }
            break;
        }
        case "===": {
            while (_0x5a7dca === _0xb10894) {
                const _0xf6e788 = new Lexer(_0x3e2843);
                _0xf6e788[_0x352bf6(0x147)](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1]["replace"](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0]["replace"](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""));
            }
            break;
        }
        case "!=": {
            while (_0x5a7dca != _0xb10894) {
                const _0x43ae3f = new Lexer(_0x3e2843);
                _0x43ae3f["start"](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0]["replace"](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""));
            }
            break;
        }
        case _0x352bf6(0x186): {
            while (_0x5a7dca !== _0xb10894) {
                const _0x16e1c3 = new Lexer(_0x3e2843);
                _0x16e1c3[_0x352bf6(0x147)](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""));
            }
            break;
        }
        case "<=": {
            while (_0x5a7dca <= _0xb10894) {
                const _0x658ce2 = new Lexer(_0x3e2843);
                _0x658ce2[_0x352bf6(0x147)](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""));
            }
            break;
        }
        case ">=": {
            while (_0x5a7dca >= _0xb10894) {
                const _0x4c0139 = new Lexer(_0x3e2843);
                _0x4c0139[_0x352bf6(0x147)](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.["value"] ||
                        _0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.["value"] || _0x168ec5[0x0]["replace"](/ /g, ""));
            }
            break;
        }
        case ">": {
            while (_0x5a7dca > _0xb10894) {
                const _0x963adf = new Lexer(_0x3e2843);
                _0x963adf["start"](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1]["replace"](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x43786a[0x1]["replace"](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""));
            }
            break;
        }
        case "<": {
            while (_0x5a7dca < _0xb10894) {
                const _0x39f1b0 = new Lexer(_0x3e2843);
                _0x39f1b0["start"](),
                    (_0x5a7dca =
                        variables[_0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")]?.["value"] ||
                        _0x43786a[0x1][_0x352bf6(0x143)](/ /g, "")),
                    (_0xb10894 =
                        variables[_0x168ec5[0x0][_0x352bf6(0x143)](/ /g, "")]?.[_0x352bf6(0x17b)] ||
                        _0x168ec5[0x0][_0x352bf6(0x143)](/ /g, ""));
            }
            break;
        }
    }
}
function getForStatement(_0x3a2a50) {
    const _0x347b64 = _0x279d26,
        _0x5e12b9 = _0x3a2a50[_0x347b64(0x152)](":");
    if (_0x5e12b9[_0x347b64(0x138)] <= 0x1) return;
    if (_0x5e12b9[0x0][_0x347b64(0x143)](/ /g, "") != Constants[_0x347b64(0x18b)]) return;
    const _0x507691 = _0x5e12b9[0x1]["split"](">>"),
        _0x2d939a = _0x507691[0x1][_0x347b64(0x143)](/{|}/g, "")[_0x347b64(0x152)](";"),
        _0x2a57c5 = parseInt(_0x5e12b9[0x1]);
    for (let _0x54fadc = 0x0; _0x54fadc < _0x2a57c5; _0x54fadc++) {
        const _0x12ce27 = new Lexer(_0x2d939a);
        _0x12ce27[_0x347b64(0x147)]();
    }
}
function getFunctions(_0x25c2de) {
    const _0x10a23a = _0x279d26,
        _0x1ad521 = _0x25c2de[_0x10a23a(0x152)]("\x20>>\x20");
    if (_0x1ad521[0x0] !== Constants["FUNCTION"]) return;
    if (_0x1ad521[0x2] === "null") _0x1ad521[0x2] = null;
    if (_0x1ad521[_0x10a23a(0x138)] < 0x4)
        throw new SyntaxError("Function\x20name,\x20arguments\x20or\x20callback\x20is\x20missing!");
    let _0xbba609 = {
        funcType: _0x1ad521[0x0],
        funcName: _0x1ad521[0x1],
        arguments: _0x1ad521[0x2] ? _0x1ad521[0x2]["split"](",\x20") : null,
        callback: _0x1ad521[0x3][_0x10a23a(0x143)](/{|}/g, "")[_0x10a23a(0x152)](/;/g),
    };
    functions[_0xbba609[_0x10a23a(0x164)]] = _0xbba609;
}
function getCalledFunction(_0x2f0444) {
    const _0x32c9fb = _0x279d26,
        _0x187df7 = _0x2f0444["split"](_0x32c9fb(0x16a));
    if (_0x187df7[0x0] !== Constants[_0x32c9fb(0x13c)]) return;
    if (_0x187df7["length"] < 0x3) throw new SyntaxError(_0x32c9fb(0x178));
    if (functions[_0x187df7[0x1]][_0x32c9fb(0x17f)])
        for (const _0x39c4eb of functions[_0x187df7[0x1]][_0x32c9fb(0x17f)]) {
            if (_0x39c4eb == null) return (args = null);
            const _0x53e126 = _0x187df7[0x2][_0x32c9fb(0x143)](/\(|\)/g, "")[_0x32c9fb(0x152)](",\x20");
            for (const _0x21bf29 in functions[_0x187df7[0x1]]["arguments"]) {
                variables[functions[_0x187df7[0x1]][_0x32c9fb(0x17f)][_0x21bf29]] = {
                    value: _0x53e126[_0x21bf29][_0x32c9fb(0x143)](/"/g, ""),
                    extension: _0x32c9fb(0x14e),
                    type: _0x32c9fb(0x14e),
                };
            }
        }
    const _0x5b084e = new Lexer(functions[_0x187df7[0x1]][_0x32c9fb(0x14f)]);
    _0x5b084e[_0x32c9fb(0x147)]();
}
function getMath(_0x529530) {
    const _0x979723 = _0x279d26,
        _0x49fdb1 = _0x529530["split"](_0x979723(0x17d));
    if (_0x49fdb1[0x0] !== Constants[_0x979723(0x153)]) return;
    if (_0x49fdb1 < 0x3) throw new SyntaxError(_0x979723(0x157));
    const _0x520c8e = changeStringToVariable(_0x49fdb1[0x2][_0x979723(0x143)](/;/g, "")),
        _0x3ef5c5 = math[_0x979723(0x175)](_0x520c8e);
    variables[_0x49fdb1[0x1]] = { value: _0x3ef5c5, extension: _0x979723(0x183), type: _0x979723(0x183) };
}
function getSetVar(_0x1e1245) {
    const _0x5ec1db = _0x279d26,
        _0x294f4f = _0x1e1245[_0x5ec1db(0x152)]("\x20");
    if (_0x294f4f[0x0] == "") _0x294f4f["shift"]();
    if (_0x294f4f[_0x5ec1db(0x138)] <= 0x0) return;
    if (_0x294f4f[0x0]["replace"](/ /g, "") !== Constants["SET_VAR"]) return;
    const _0x4e42e2 = _0x294f4f[0x1];
    let _0x1ff3dc = _0x294f4f["slice"](0x3)[_0x5ec1db(0x163)]("\x20");
    if (!variables[_0x4e42e2]) throw new SyntaxError(_0x5ec1db(0x169) + _0x4e42e2 + _0x5ec1db(0x195));
    isNaN(_0x1ff3dc)
        ? (variables[_0x4e42e2]["value"] = _0x1ff3dc)
        : (variables[_0x4e42e2][_0x5ec1db(0x17b)] = parseFloat(_0x1ff3dc));
    if (variables[_0x1ff3dc[_0x5ec1db(0x143)](/ /g, "")])
        variables[_0x4e42e2]["value"] = variables[_0x1ff3dc["replace"](/ /g, "")][_0x5ec1db(0x17b)];
    switch (variables[_0x4e42e2][_0x5ec1db(0x182)]) {
        case Constants[_0x5ec1db(0x174)][_0x5ec1db(0x13b)][_0x5ec1db(0x155)]: {
            if (variables[_0x1ff3dc[_0x5ec1db(0x143)](/ /g, "")]) return;
            if (isNaN(_0x1ff3dc)) throw new SyntaxError("You\x20cannot\x20asign\x20a\x20string\x20on\x20integer");
            else {
                if (_0x1ff3dc[_0x5ec1db(0x192)]("."))
                    throw new SyntaxError("You\x20cannot\x20asign\x20a\x20float\x20number\x20on\x20integer");
            }
            break;
        }
        case Constants["SYSTEM"][_0x5ec1db(0x13b)][_0x5ec1db(0x15f)]: {
            if (variables[_0x1ff3dc[_0x5ec1db(0x143)](/ /g, "")]) return;
            if (!isNaN(_0x1ff3dc)) throw new SyntaxError("You\x20cannot\x20asign\x20a\x20number\x20on\x20string");
            else {
                if (!_0x1ff3dc[_0x5ec1db(0x192)]("\x22"))
                    throw new SyntaxError("To\x20make\x20a\x20string\x20you\x20must\x20do\x20\x22text\x22");
            }
            break;
        }
        case Constants[_0x5ec1db(0x174)][_0x5ec1db(0x13b)][_0x5ec1db(0x16b)]: {
            if (variables[_0x1ff3dc[_0x5ec1db(0x143)](/ /g, "")]) return;
            if (_0x1ff3dc != _0x5ec1db(0x176) && _0x1ff3dc != "false") throw new SyntaxError(_0x5ec1db(0x196));
            break;
        }
        case Constants[_0x5ec1db(0x174)]["VARIABLES"]["CHARACTER"]: {
            if (variables[_0x1ff3dc["replace"](/ /g, "")]) return;
            if (_0x1ff3dc[_0x5ec1db(0x138)] > 0x1 && !_0x1ff3dc[_0x5ec1db(0x192)]("\x22"))
                throw new SyntaxError(_0x5ec1db(0x13e));
            else {
                if (_0x1ff3dc[_0x5ec1db(0x143)](/"/g, "")[_0x5ec1db(0x138)] > 0x1) throw new SyntaxError(_0x5ec1db(0x184));
                else {
                    if (!isNaN(_0x1ff3dc)) throw new SyntaxError(_0x5ec1db(0x188));
                    else {
                        if (!_0x1ff3dc[_0x5ec1db(0x192)]("\x22")) throw new SyntaxError(_0x5ec1db(0x15b));
                    }
                }
            }
            break;
        }
        case Constants[_0x5ec1db(0x174)][_0x5ec1db(0x13b)][_0x5ec1db(0x151)]: {
            if (variables[_0x1ff3dc[_0x5ec1db(0x143)](/ /g, "")]) return;
            if (isNaN(_0x1ff3dc) && !_0x1ff3dc["includes"]("\x22")) throw new SyntaxError(_0x5ec1db(0x15b));
            break;
        }
    }
    (_0x1ff3dc == _0x5ec1db(0x176) || _0x1ff3dc == _0x5ec1db(0x148)) &&
        (variables[_0x4e42e2]["value"] = JSON[_0x5ec1db(0x18f)](_0x1ff3dc));
}
async function getTrollAsk(_0x5c1254) {
    const _0x5f1a7f = _0x279d26,
        _0x5ce1e6 = _0x5c1254[_0x5f1a7f(0x152)](_0x5f1a7f(0x16a));
    if (_0x5ce1e6[0x0] == "") _0x5ce1e6[_0x5f1a7f(0x14b)]();
    if (_0x5ce1e6[_0x5f1a7f(0x138)] <= 0x0) return;
    const _0x43c8c3 = _0x5ce1e6[0x0],
        _0x379886 = _0x5ce1e6[0x1],
        _0xcce5a4 = _0x5ce1e6[0x2];
    if (!_0x5ce1e6[0x3]) return;
    const _0x2efec1 = _0x5ce1e6[0x3]["replace"](/{|}/g, "")[_0x5f1a7f(0x152)](";");
    if (_0x43c8c3 !== Constants[_0x5f1a7f(0x171)]) return;
    if (!_0x379886[_0x5f1a7f(0x16c)]("\x22") && !_0x379886[_0x5f1a7f(0x16f)]("\x22"))
        return new SyntaxError("Text\x20to\x20say\x20must\x20be\x20a\x20string!");
    const _0x2b945a = await askQuestion(_0x379886[_0x5f1a7f(0x143)](/"/g, ""));
    variables[_0xcce5a4] = { value: _0x2b945a, extension: Constants[_0x5f1a7f(0x171)], type: Constants[_0x5f1a7f(0x171)] };
    const _0x171cd1 = new Lexer(_0x2efec1);
    _0x171cd1[_0x5f1a7f(0x147)]();
}
function getTrollAdd(_0x39972c) {
    const _0x29ee6a = _0x279d26;
    let _0x385899 = _0x39972c[_0x29ee6a(0x152)]("\x20"),
        _0x1ee006;
    _0x385899[0x0] == "" && (_0x385899["shift"](), (_0x1ee006 = _0x385899), (_0x385899 = []));
    for (let _0x246719 = 0x0; _0x246719 < _0x1ee006?.[_0x29ee6a(0x138)]; _0x246719++) {
        _0x1ee006[_0x246719] && _0x385899[_0x29ee6a(0x13d)](_0x1ee006[_0x246719]);
    }
    if (_0x385899["length"] <= 0x0) return;
    if (_0x385899[0x0]["replace"](/ /g, "") != Constants[_0x29ee6a(0x166)]) return;
    const _0x52dfa6 = _0x385899[0x1];
    let _0x1f8aa5 = _0x385899[_0x29ee6a(0x18a)](0x3)[_0x29ee6a(0x163)]("\x20");
    if (!variables[_0x52dfa6]) throw new SyntaxError(_0x29ee6a(0x169) + _0x52dfa6 + "\x22\x20couldn\x27t\x20be\x20found");
    if (
        variables[_0x52dfa6][_0x29ee6a(0x182)] != _0x29ee6a(0x162) &&
        variables[_0x52dfa6][_0x29ee6a(0x182)] != _0x29ee6a(0x15e) &&
        variables[_0x52dfa6][_0x29ee6a(0x182)] != _0x29ee6a(0x14e)
    )
        throw new SyntaxError(_0x29ee6a(0x172));
    if (isNaN(_0x1f8aa5)) throw new SyntaxError(_0x29ee6a(0x17a));
    if (
        _0x1f8aa5[_0x29ee6a(0x192)](".") &&
        variables[_0x52dfa6][_0x29ee6a(0x182)] != Constants[_0x29ee6a(0x174)][_0x29ee6a(0x177)][_0x29ee6a(0x167)]
    )
        throw new SyntaxError(_0x29ee6a(0x15a));
    variables[_0x52dfa6]["value"] = parseFloat(variables[_0x52dfa6][_0x29ee6a(0x17b)]) + parseFloat(_0x1f8aa5);
}
function getTrollMinus(_0x462c33) {
    const _0x25e6b0 = _0x279d26;
    let _0x40c509 = _0x462c33[_0x25e6b0(0x152)]("\x20"),
        _0x5d9311;
    _0x40c509[0x0] == "" && (_0x40c509[_0x25e6b0(0x14b)](), (_0x5d9311 = _0x40c509), (_0x40c509 = []));
    for (let _0x139df7 = 0x0; _0x139df7 < _0x5d9311?.[_0x25e6b0(0x138)]; _0x139df7++) {
        _0x5d9311[_0x139df7] && _0x40c509[_0x25e6b0(0x13d)](_0x5d9311[_0x139df7]);
    }
    if (_0x40c509["length"] <= 0x0) return;
    if (_0x40c509[0x0][_0x25e6b0(0x143)](/ /g, "") !== Constants[_0x25e6b0(0x161)]) return;
    const _0x146d36 = _0x40c509[0x1];
    let _0x586c1b = _0x40c509["slice"](0x3)[_0x25e6b0(0x163)]("\x20");
    if (!variables[_0x146d36]) throw new SyntaxError(_0x25e6b0(0x169) + _0x146d36 + _0x25e6b0(0x195));
    if (
        variables[_0x146d36][_0x25e6b0(0x182)] != "int" &&
        variables[_0x146d36]["extension"] != _0x25e6b0(0x15e) &&
        variables[_0x146d36][_0x25e6b0(0x182)] != _0x25e6b0(0x14e)
    )
        throw new SyntaxError(_0x25e6b0(0x172));
    if (isNaN(_0x586c1b)) throw new SyntaxError(_0x25e6b0(0x17a));
    if (
        _0x586c1b[_0x25e6b0(0x192)](".") &&
        variables[_0x146d36][_0x25e6b0(0x182)] != Constants[_0x25e6b0(0x174)]["VARIABLE_TYPES"][_0x25e6b0(0x167)]
    )
        throw new SyntaxError(_0x25e6b0(0x15a));
    variables[_0x146d36][_0x25e6b0(0x17b)] = parseFloat(variables[_0x146d36]["value"]) - parseFloat(_0x586c1b);
}
function getTrollMultiply(_0x11da98) {
    const _0x3f120c = _0x279d26;
    let _0x51f0bd = _0x11da98[_0x3f120c(0x152)]("\x20"),
        _0x2a5c58;
    _0x51f0bd[0x0] == "" && (_0x51f0bd["shift"](), (_0x2a5c58 = _0x51f0bd), (_0x51f0bd = []));
    for (let _0x1002dd = 0x0; _0x1002dd < _0x2a5c58?.["length"]; _0x1002dd++) {
        _0x2a5c58[_0x1002dd] && _0x51f0bd[_0x3f120c(0x13d)](_0x2a5c58[_0x1002dd]);
    }
    if (_0x51f0bd["length"] <= 0x0) return;
    if (_0x51f0bd[0x0]["replace"](/ /g, "") !== Constants[_0x3f120c(0x194)]) return;
    const _0x23c76c = _0x51f0bd[0x1];
    let _0x5c787c = _0x51f0bd[_0x3f120c(0x18a)](0x3)[_0x3f120c(0x163)]("\x20");
    if (!variables[_0x23c76c]) throw new SyntaxError("Variable\x20\x22" + _0x23c76c + _0x3f120c(0x195));
    if (
        variables[_0x23c76c][_0x3f120c(0x182)] != _0x3f120c(0x162) &&
        variables[_0x23c76c][_0x3f120c(0x182)] != _0x3f120c(0x15e) &&
        variables[_0x23c76c][_0x3f120c(0x182)] != _0x3f120c(0x14e)
    )
        throw new SyntaxError(_0x3f120c(0x172));
    if (isNaN(_0x5c787c)) throw new SyntaxError(_0x3f120c(0x17a));
    if (
        _0x5c787c["includes"](".") &&
        variables[_0x23c76c][_0x3f120c(0x182)] != Constants[_0x3f120c(0x174)][_0x3f120c(0x177)]["FLOAT"]
    )
        throw new SyntaxError(_0x3f120c(0x15a));
    variables[_0x23c76c]["value"] = parseFloat(variables[_0x23c76c][_0x3f120c(0x17b)]) * parseFloat(_0x5c787c);
}
function _0x49ed(_0x462c3e, _0x239536) {
    const _0x3d426b = _0x3d42();
    return (
        (_0x49ed = function (_0x49edeb, _0x637da) {
            _0x49edeb = _0x49edeb - 0x135;
            let _0x595ed2 = _0x3d426b[_0x49edeb];
            return _0x595ed2;
        }),
        _0x49ed(_0x462c3e, _0x239536)
    );
}
function getTrollDivide(_0x5a8a0c) {
    const _0x3c427d = _0x279d26;
    let _0x29e4e6 = _0x5a8a0c[_0x3c427d(0x152)]("\x20"),
        _0x35cae5;
    _0x29e4e6[0x0] == "" && (_0x29e4e6["shift"](), (_0x35cae5 = _0x29e4e6), (_0x29e4e6 = []));
    for (let _0x354b7e = 0x0; _0x354b7e < _0x35cae5?.[_0x3c427d(0x138)]; _0x354b7e++) {
        _0x35cae5[_0x354b7e] && _0x29e4e6[_0x3c427d(0x13d)](_0x35cae5[_0x354b7e]);
    }
    if (_0x29e4e6[_0x3c427d(0x138)] <= 0x0) return;
    if (_0x29e4e6[0x0]["replace"](/ /g, "") !== Constants["TROLLDIVIDE"]) return;
    const _0xcfec57 = _0x29e4e6[0x1];
    let _0x47f434 = _0x29e4e6[_0x3c427d(0x18a)](0x3)[_0x3c427d(0x163)]("\x20");
    if (!variables[_0xcfec57]) throw new SyntaxError(_0x3c427d(0x169) + _0xcfec57 + _0x3c427d(0x195));
    if (
        variables[_0xcfec57][_0x3c427d(0x182)] != _0x3c427d(0x162) &&
        variables[_0xcfec57][_0x3c427d(0x182)] != _0x3c427d(0x15e) &&
        variables[_0xcfec57]["extension"] != "any"
    )
        throw new SyntaxError("Cannot\x20asign\x20a\x20number\x20on\x20string,\x20bool\x20and\x20char");
    if (isNaN(_0x47f434)) throw new SyntaxError(_0x3c427d(0x17a));
    if (
        _0x47f434[_0x3c427d(0x192)](".") &&
        variables[_0xcfec57]["extension"] != Constants[_0x3c427d(0x174)][_0x3c427d(0x177)][_0x3c427d(0x167)]
    )
        throw new SyntaxError("Cannot\x20asign\x20a\x20float\x20value\x20to\x20int");
    variables[_0xcfec57][_0x3c427d(0x17b)] = parseFloat(variables[_0xcfec57][_0x3c427d(0x17b)]) / parseFloat(_0x47f434);
}
function getWindow(_0x4b3281) {
    const _0x3d34d8 = _0x279d26;
    let _0x49ee16 = _0x4b3281[_0x3d34d8(0x152)]("\x20"),
        _0x460ace;
    _0x49ee16[0x0] == "" && (_0x49ee16[_0x3d34d8(0x14b)](), (_0x460ace = _0x49ee16), (_0x49ee16 = []));
    for (let _0x589f72 = 0x0; _0x589f72 < _0x460ace?.[_0x3d34d8(0x138)]; _0x589f72++) {
        _0x460ace[_0x589f72] && _0x49ee16[_0x3d34d8(0x13d)](_0x460ace[_0x589f72]);
    }
    if (_0x49ee16[_0x3d34d8(0x138)] <= 0x0) return;
    if (_0x49ee16[0x0]["replace"](/ /g, "") !== Constants[_0x3d34d8(0x15c)][_0x3d34d8(0x142)]) return;
    let _0x4cf6d4, _0xdb31ed, _0x11cab7;
    (_0x4cf6d4 = _0x49ee16[0x0] || null),
        (_0x11cab7 = _0x49ee16[0x1] || null),
        (_0xdb31ed = _0x49ee16[_0x3d34d8(0x18a)](0x3)[_0x3d34d8(0x163)]("\x20")[_0x3d34d8(0x143)](";", ""));
    const _0x18dcf3 = _0xdb31ed["replace"](/\)|Troll.window/g, "")
            [_0x3d34d8(0x152)]("(")
            [_0x3d34d8(0x163)]("\x20")
            ["split"](",\x20"),
        _0x3796c2 = Handler[_0x3d34d8(0x168)](
            parseFloat(_0x18dcf3[0x0]),
            parseFloat(_0x18dcf3[0x1]),
            parseFloat(_0x18dcf3[0x2]),
            parseFloat(_0x18dcf3[0x3]),
            JSON[_0x3d34d8(0x18f)](_0x18dcf3[0x4]),
            _0x18dcf3[0x5] || _0x3d34d8(0x181)
        );
    windows[_0x11cab7] = { values: _0x18dcf3 };
}
function getTrollWindow(_0x5a652a) {
    const _0x56f9bc = _0x279d26;
    let _0x1b7843 = _0x5a652a[_0x56f9bc(0x152)]("\x20"),
        _0x1344d5;
    _0x1b7843[0x0] == "" && (_0x1b7843[_0x56f9bc(0x14b)](), (_0x1344d5 = _0x1b7843), (_0x1b7843 = []));
    for (let _0xc0466c = 0x0; _0xc0466c < _0x1344d5?.[_0x56f9bc(0x138)]; _0xc0466c++) {
        _0x1344d5[_0xc0466c] && _0x1b7843[_0x56f9bc(0x13d)](_0x1344d5[_0xc0466c]);
    }
    if (_0x1b7843[_0x56f9bc(0x138)] <= 0x0) return;
    if (_0x1b7843[0x0][_0x56f9bc(0x143)](/ /g, "") !== Constants[_0x56f9bc(0x15c)]["TROLLWINDOW"]) return;
    let _0x1ebc3c, _0x3c78d2, _0x1b8149;
    (_0x1ebc3c = _0x1b7843[0x0] || null),
        (_0x1b8149 = _0x1b7843[0x1] || null),
        (_0x3c78d2 = _0x1b7843[_0x56f9bc(0x18a)](0x3)[_0x56f9bc(0x163)]("\x20")[_0x56f9bc(0x143)](";", ""));
    let _0xd7bda2 = _0x3c78d2[_0x56f9bc(0x143)](/\)|name|"/g, "")[_0x56f9bc(0x152)]("(");
    if (!windows[_0x1b8149[_0x56f9bc(0x143)](/ /g, "")])
        throw new SyntaxError("Window\x20\x22" + _0x1b8149[_0x56f9bc(0x143)](/ /g, "") + _0x56f9bc(0x195));
    if (!windows[_0xd7bda2[0x0][_0x56f9bc(0x143)](/.loadFile|.loadURL/g, "")])
        throw new SyntaxError(
            _0x56f9bc(0x156) + _0xd7bda2[0x0][_0x56f9bc(0x143)](/.loadFile|.loadURL/g, "") + "\x22\x20couldn\x27t\x20be\x20found"
        );
    if (_0xd7bda2[0x0][_0x56f9bc(0x192)]("loadFile")) Handler[_0x56f9bc(0x17e)](_0xd7bda2[0x1]);
    if (_0xd7bda2[0x0][_0x56f9bc(0x192)](_0x56f9bc(0x15d))) Handler[_0x56f9bc(0x15d)](_0xd7bda2[0x1]);
}
function getTrollIpc(_0x468a74) {
    const _0x26f2c2 = _0x279d26;
    let _0x1fad4e = _0x468a74["split"](_0x26f2c2(0x16a)),
        _0x513e42;
    _0x1fad4e[0x0] == "" && (_0x1fad4e[_0x26f2c2(0x14b)](), (_0x513e42 = _0x1fad4e), (_0x1fad4e = []));
    for (let _0x7a3de3 = 0x0; _0x7a3de3 < _0x513e42?.["length"]; _0x7a3de3++) {
        _0x513e42[_0x7a3de3] && _0x1fad4e[_0x26f2c2(0x13d)](_0x513e42[_0x7a3de3]);
    }
    if (_0x1fad4e[_0x26f2c2(0x138)] <= 0x0) return;
    if (_0x1fad4e[0x0]["replace"](/ /g, "") !== Constants["ELECTRON"][_0x26f2c2(0x139)]) return;
    let _0x44146c = _0x1fad4e[0x0] || null,
        _0x2c9e2d = _0x1fad4e[0x1] || null,
        _0x83b7bc = _0x1fad4e[0x2] || null,
        _0x58f872 = _0x1fad4e[0x3][_0x26f2c2(0x152)](",\x20") || null,
        _0x5e89bb = _0x1fad4e[0x4]["replace"](/{|}/g, "")["split"](";");
    if (_0x58f872 == _0x26f2c2(0x16e)) _0x58f872 = null;
    if (!_0x83b7bc) throw new SyntaxError(_0x26f2c2(0x160));
    if (!windows[_0x2c9e2d["replace"](/ /g, "")])
        throw new SyntaxError(_0x26f2c2(0x156) + _0x2c9e2d[_0x26f2c2(0x143)](/ /g, "") + _0x26f2c2(0x195));
    Handler[_0x26f2c2(0x136)](_0x83b7bc, _0x5e89bb, _0x58f872);
}
class Lexer {
    constructor(_0x46c1c4) {
        const _0x9f9bda = _0x279d26;
        (this[_0x9f9bda(0x191)] = _0x46c1c4), (this[_0x9f9bda(0x158)] = 0x0);
    }
    [_0x279d26(0x146)]() {
        const _0x3294a5 = _0x279d26;
        this["currIndex"] < this[_0x3294a5(0x191)]["length"] - 0x1 ? this["currIndex"]++ : (this[_0x3294a5(0x158)] = null);
    }
    async ["start"]() {
        const _0x14806b = _0x279d26;
        while (this[_0x14806b(0x158)] != null) {
            !paused &&
                (this[_0x14806b(0x191)][this["currIndex"]][_0x14806b(0x143)](/ /g, "")[_0x14806b(0x16c)]("#")
                    ? this[_0x14806b(0x146)]()
                    : (this["checkLogs"](),
                      getVariableName(this["data"][this[_0x14806b(0x158)]]),
                      getIfStatement(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getFunctions(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getCalledFunction(this["data"][this[_0x14806b(0x158)]]),
                      getMath(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getSetVar(this["data"][this[_0x14806b(0x158)]]),
                      getTrollAsk(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getTrollAdd(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getTrollMinus(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getTrollMultiply(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getTrollDivide(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getWhileStatement(this[_0x14806b(0x191)][this["currIndex"]]),
                      getForStatement(this["data"][this[_0x14806b(0x158)]]),
                      getWindow(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getTrollWindow(this[_0x14806b(0x191)][this[_0x14806b(0x158)]]),
                      getTrollIpc(this[_0x14806b(0x191)][this["currIndex"]]),
                      this["advance"]()));
        }
    }
    [_0x279d26(0x189)]() {
        const _0x98f7fd = _0x279d26;
        if (
            this[_0x98f7fd(0x191)][this["currIndex"]][_0x98f7fd(0x192)](Constants["SYSTEM"][_0x98f7fd(0x18e)]) &&
            !this[_0x98f7fd(0x191)][this[_0x98f7fd(0x158)]]["startsWith"](Constants["FUNCTION"]) &&
            !this[_0x98f7fd(0x191)][this[_0x98f7fd(0x158)]][_0x98f7fd(0x16c)](Constants["IF"]) &&
            !this["data"][this[_0x98f7fd(0x158)]]["startsWith"](Constants[_0x98f7fd(0x190)]) &&
            !this[_0x98f7fd(0x191)][this[_0x98f7fd(0x158)]]["startsWith"](Constants[_0x98f7fd(0x18b)]) &&
            !this["data"][this[_0x98f7fd(0x158)]]["startsWith"](Constants[_0x98f7fd(0x171)])
        ) {
            let _0x4fb516 = this[_0x98f7fd(0x191)][this["currIndex"]]
                [_0x98f7fd(0x143)](")", "")
                [_0x98f7fd(0x143)](";", "")
                ["split"](_0x98f7fd(0x13a))
                ["join"]("\x20");
            if (_0x4fb516[_0x98f7fd(0x192)]("\x22")) console[_0x98f7fd(0x150)](_0x4fb516[_0x98f7fd(0x143)](/"/g, ""));
            else {
                if (_0x4fb516[_0x98f7fd(0x192)]("+")) {
                    const _0x26d1a5 = _0x4fb516["split"]("+");
                    let _0x1e70f5 = "";
                    for (let _0x254a72 = 0x0; _0x254a72 < _0x26d1a5[_0x98f7fd(0x138)]; _0x254a72++) {
                        let _0x4187df;
                        if (variables[_0x26d1a5[_0x254a72][_0x98f7fd(0x143)](/ /g, "")][_0x98f7fd(0x17b)])
                            _0x4187df =
                                variables[_0x26d1a5[_0x254a72][_0x98f7fd(0x143)](/ /g, "")]["value"][_0x98f7fd(0x143)](/"/g, "") +
                                "\x20";
                        _0x1e70f5 += "" + _0x4187df;
                    }
                    console[_0x98f7fd(0x150)](_0x1e70f5);
                } else
                    isNaN(variables[_0x4fb516[_0x98f7fd(0x143)](/ /g, "")][_0x98f7fd(0x17b)])
                        ? console[_0x98f7fd(0x150)](
                              variables[_0x4fb516[_0x98f7fd(0x143)](/ /g, "")][_0x98f7fd(0x17b)]
                                  [_0x98f7fd(0x173)]()
                                  [_0x98f7fd(0x143)](/"/g, "")
                          )
                        : console["log"](variables[_0x4fb516[_0x98f7fd(0x143)](/ /g, "")][_0x98f7fd(0x17b)]);
            }
        }
    }
}
module[_0x279d26(0x185)] = Lexer;
