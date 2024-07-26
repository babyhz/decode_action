//Fri Jul 26 2024 01:54:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  checkCk,
  getCookies,
  getUserInfo,
  validateCarmeWithType,
  checkCarmeCount,
  tryCatchPromise
} = require("./common.js");
const request = require("request");
const {
  wait
} = require("./common");
const GAME_TYEP = 6;
const kami = process.env.ELE_CARME;
function isEmpty(_0x5eb02e) {
  const _0x338867 = {};
  _0x338867.fJMQM = function (_0x35fe4c, _0x567107) {
    return _0x35fe4c === _0x567107;
  };
  const _0x56d0ab = _0x338867;
  return _0x56d0ab.fJMQM(Object.values(_0x5eb02e).length, 0);
}
async function lottery(_0x441099) {
  const _0x2516ad = {};
  _0x2516ad.JuiKk = "function *\\( *\\)";
  _0x2516ad.nhmjg = "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)";
  _0x2516ad.FlZXF = function (_0x1d2c83, _0x8ef035) {
    return _0x1d2c83(_0x8ef035);
  };
  _0x2516ad.REBbL = "init";
  _0x2516ad.OQNkw = function (_0xd39d60, _0x4c53e4) {
    return _0xd39d60 + _0x4c53e4;
  };
  _0x2516ad.SvAcC = "chain";
  _0x2516ad.QyQwB = function (_0x3a43c6, _0x5defe0) {
    return _0x3a43c6 + _0x5defe0;
  };
  _0x2516ad.OOMVv = "input";
  _0x2516ad.bfkdz = function (_0x4e5ee2) {
    return _0x4e5ee2();
  };
  _0x2516ad.tYMZO = function (_0x4baf9f, _0x84f2e6) {
    return _0x4baf9f(_0x84f2e6);
  };
  _0x2516ad.aOoum = function (_0x5490c5, _0x176887) {
    return _0x5490c5(_0x176887);
  };
  _0x2516ad.CCUSR = function (_0x1eaa9d, _0x13092a) {
    return _0x1eaa9d + _0x13092a;
  };
  _0x2516ad.QtQzK = function (_0x7c50bc, _0x372db0) {
    return _0x7c50bc !== _0x372db0;
  };
  _0x2516ad.vPCLh = "KgbDq";
  _0x2516ad.oLATq = "RhAUS";
  _0x2516ad.rJBJz = function (_0x38bc6a, _0x340e08) {
    return _0x38bc6a === _0x340e08;
  };
  _0x2516ad.nrEwh = "xSKUB";
  _0x2516ad.npYnn = function (_0x3089d7, _0x2dadee) {
    return _0x3089d7 === _0x2dadee;
  };
  _0x2516ad.dwWuc = "QLfIg";
  _0x2516ad.ungkh = "PhcZd";
  _0x2516ad.XkLcF = function (_0x366312, _0x1bf58c) {
    return _0x366312(_0x1bf58c);
  };
  _0x2516ad.cVenG = function (_0x417231, _0x3703c9) {
    return _0x417231 !== _0x3703c9;
  };
  _0x2516ad.ZxDWV = "eNZEy";
  _0x2516ad.dSWaY = "yojYh";
  _0x2516ad.tZJYg = "NJJex";
  _0x2516ad.yeZIm = "tGvGW";
  _0x2516ad.pdEEw = "yWzEq";
  _0x2516ad.kJEOe = "KnjzX";
  _0x2516ad.JWKay = "jEzDF";
  _0x2516ad.OixQY = function (_0x34f3a4, _0xda7202) {
    return _0x34f3a4 + _0xda7202;
  };
  _0x2516ad.lNggs = "wGmOV";
  _0x2516ad.oHWkJ = "avIUV";
  _0x2516ad.LEtCl = function (_0x3ba128, _0x17605c) {
    return _0x3ba128 !== _0x17605c;
  };
  _0x2516ad.buTvF = "KtvqG";
  _0x2516ad.VZlmM = "WOwTS";
  _0x2516ad.iZntg = "aunHR";
  _0x2516ad.cnOGc = function (_0x46e80a, _0x205c18, _0x1be00e) {
    return _0x46e80a(_0x205c18, _0x1be00e);
  };
  _0x2516ad.SBMXd = "shopping.ele.me";
  _0x2516ad.LjvHD = "application/json";
  _0x2516ad.UKmbX = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x2516ad.vragu = "no-cache";
  _0x2516ad.ikAIG = "application/x-www-form-urlencoded";
  _0x2516ad.YJvBO = "https://r.ele.me";
  _0x2516ad.GytNn = "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0";
  _0x2516ad.vMYqV = "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x2516ad.xbvAL = "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x2516ad.kJLhd = "20221207144029906162546384";
  _0x2516ad.QJCrD = "20230224114656384938530468";
  _0x2516ad.UuYFF = "20230224114825216373367998";
  _0x2516ad.kUDRy = "game_center";
  _0x2516ad.TQoYt = "LOTTERY";
  _0x2516ad.rAXaw = "120.21993197500706";
  _0x2516ad.yOZpT = "30.178378857672215";
  _0x2516ad.QuOIe = "2A232091VOX6SPEQYH6RG4";
  _0x2516ad.gthWE = "{\"bizType\":\"LOTTERY\"}";
  _0x2516ad.MWHsN = "140#CK1oj11hzzW9Szo2K52s+pN8s77HHUFmuM/UtDDs0Qi3WsJVBjgCRSpLBmwg1t45dolchfqRmKl1bALrrsgqlbzxhMT65/VGzzcSb1NVl3MzzPzbVXlqlYfWGwrfAdGuzF4SLIuKlpODzPzYVXEul+Fx3DH3uJBlzFzb2mD5lp1bojnSONdOHaU+WFtTI267wOPmhF8Lb1t1AGAMJzaUhlSZ37eoVlUxdJDMRuBaLMfDybLO0h1eFD9Bu8b+DVPhp0zq91yfNSAXB7K0jltKROauR0mY6uMsohEuI04aSewXLPQudoCKe4KTqOdcfQxcM7naN0frsSX8GkmfK7MJZvMjY1U5qUZ8S6B6etbmdFpXI71kiclSbDtLx68pvrlX+Fc4UR+S3Pe1djdcWkhUqAOMMF1UoPppTe48HVaz+8QLqCm5C+vFVcG/nR4fp/Nqr9zxZZ1BEF2cqauKj9rwh1wg0ciKSZHr7d7+iqSugixQcmeWHucfFqAnDSqbHS8s0IlgXzfyfX4mbjfwsHaceDK5eauu/HlurzK0IpFhTLNn95u4XaF2p+Vx7/iLXMyEDky/HPCNi8XALSXJrmIz7wz6xcq2coakOoMyCQhrEhtsCgKAdzI0tjMldN3kNPusrd2JYaqKN6tK0a3ntrBfPvKjkXqX7p9CYI7DIp40BjnHwQCDKd3fZl6Fu4aOYZlfXnVkuSnuL0gkYtscTU4hIBmZsaKOKXSJdWYdynhh29HJVvpLAptEkD8Lnvm9nXnk7GorF+NPoY/dpJ+S2eh8/XksaIyRH3zWcpW5Ua30Hn94YEcqMFI/gQVjPHTdGkzBbjU8oTiLJ5Y5qSIY5eDM6T7XYoSwhGbyAL+=";
  _0x2516ad.bPuaC = "T2gA__C3-r3sSTF7ZzBUS-C0RcKNSn8q17hKFBPM5pcplOQGdIK15W9ScohgOWU8PE0=";
  _0x2516ad.mGjQV = function (_0x3aa1a3, _0x309522) {
    return _0x3aa1a3 + _0x309522;
  };
  _0x2516ad.jONeK = "data=";
  _0x2516ad.kAAvC = function (_0x50c6e9, _0x2e8716) {
    return _0x50c6e9 + _0x2e8716;
  };
  _0x2516ad.HJkSG = function (_0x5b4987, _0x3ca4b0) {
    return _0x5b4987 + _0x3ca4b0;
  };
  _0x2516ad.IFEth = function (_0x3b6704, _0x35e1b8) {
    return _0x3b6704 + _0x35e1b8;
  };
  _0x2516ad.zIcKt = function (_0x545038, _0x5460ba) {
    return _0x545038 + _0x5460ba;
  };
  _0x2516ad.dGpYI = function (_0x360fde, _0x375381) {
    return _0x360fde + _0x375381;
  };
  _0x2516ad.pmRXe = function (_0x13805c, _0x1f1f95) {
    return _0x13805c + _0x1f1f95;
  };
  _0x2516ad.pweRB = "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=";
  _0x2516ad.AHyuD = "&sign=";
  _0x2516ad.MDLNg = "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json";
  _0x2516ad.AeeZL = "POST";
  _0x2516ad.dYALx = function (_0xf80a67, _0x417742) {
    return _0xf80a67(_0x417742);
  };
  const _0x38541b = _0x2516ad;
  const _0x164482 = {};
  _0x164482.authority = _0x38541b.SBMXd;
  _0x164482.accept = _0x38541b.LjvHD;
  _0x164482["accept-language"] = _0x38541b.UKmbX;
  _0x164482["cache-control"] = _0x38541b.vragu;
  _0x164482["content-type"] = _0x38541b.ikAIG;
  _0x164482.origin = _0x38541b.YJvBO;
  _0x164482.pragma = _0x38541b.vragu;
  _0x164482.referer = _0x38541b.GytNn;
  _0x164482.cookie = _0x441099;
  _0x164482["x-ele-ua"] = _0x38541b.vMYqV;
  _0x164482["user-agent"] = _0x38541b.xbvAL;
  var _0x4b451e = _0x164482;
  const _0x4c8be9 = {};
  _0x4c8be9.actId = _0x38541b.kJLhd;
  _0x4c8be9.collectionId = _0x38541b.QJCrD;
  _0x4c8be9.componentId = _0x38541b.UuYFF;
  _0x4c8be9.bizScene = _0x38541b.kUDRy;
  _0x4c8be9.bizCode = _0x38541b.TQoYt;
  _0x4c8be9.longitude = _0x38541b.rAXaw;
  _0x4c8be9.latitude = _0x38541b.yOZpT;
  _0x4c8be9.asac = _0x38541b.QuOIe;
  _0x4c8be9.extParams = _0x38541b.gthWE;
  _0x4c8be9.ua = _0x38541b.MWHsN;
  _0x4c8be9.umidtoken = _0x38541b.bPuaC;
  const _0x5d69df = _0x4c8be9;
  const _0x5cf979 = new Date().getTime();
  const _0x589efa = 12574478;
  var _0x50f757 = _0x38541b.mGjQV(_0x38541b.jONeK, _0x38541b.XkLcF(encodeURIComponent, JSON.stringify(_0x5d69df)));
  const _0x518b43 = _0x38541b.XkLcF(getToken, _0x441099),
    _0x3f3df5 = _0x518b43.split("_")[0];
  const _0x1b7023 = await _0x38541b.cnOGc(sign, _0x38541b.mGjQV(_0x38541b.kAAvC(_0x38541b.HJkSG(_0x38541b.IFEth(_0x38541b.zIcKt(_0x38541b.zIcKt(_0x3f3df5, "&"), _0x5cf979), "&"), _0x589efa), "&"), JSON.stringify(_0x5d69df)), kami);
  const _0x4156e1 = {};
  _0x4156e1.url = _0x38541b.dGpYI(_0x38541b.dGpYI(_0x38541b.pmRXe(_0x38541b.pmRXe(_0x38541b.pweRB, _0x5cf979), _0x38541b.AHyuD), _0x1b7023), _0x38541b.MDLNg);
  _0x4156e1.method = _0x38541b.AeeZL;
  _0x4156e1.headers = _0x4b451e;
  _0x4156e1.body = _0x50f757;
  var _0x59df54 = _0x4156e1;
  return _0x38541b.dYALx(tryCatchPromise, _0x18a0e9 => {
    const _0x17875c = {};
    _0x17875c.FcQln = function (_0x5947c8, _0x54554b) {
      return _0x38541b.tYMZO(_0x5947c8, _0x54554b);
    };
    _0x17875c.DoHGz = function (_0x55ba45, _0x4dfc49) {
      return _0x38541b.aOoum(_0x55ba45, _0x4dfc49);
    };
    _0x17875c.LfXnY = function (_0x3b4b64, _0x16817b) {
      return _0x38541b.CCUSR(_0x3b4b64, _0x16817b);
    };
    _0x17875c.UqjxB = function (_0x51afe3, _0x56c2eb) {
      return _0x38541b.aOoum(_0x51afe3, _0x56c2eb);
    };
    _0x17875c.DcmlU = function (_0x2838f0, _0x266e75) {
      return _0x38541b.QtQzK(_0x2838f0, _0x266e75);
    };
    _0x17875c.ukohv = _0x38541b.vPCLh;
    _0x17875c.aKoCa = _0x38541b.oLATq;
    _0x17875c.QXofB = function (_0x50d143, _0x11be20) {
      return _0x38541b.rJBJz(_0x50d143, _0x11be20);
    };
    _0x17875c.Xuqil = _0x38541b.nrEwh;
    _0x17875c.Cktav = function (_0x8aa648, _0x356237) {
      return _0x38541b.npYnn(_0x8aa648, _0x356237);
    };
    _0x17875c.kOFVJ = _0x38541b.dwWuc;
    _0x17875c.hMcyH = _0x38541b.ungkh;
    _0x17875c.BjqON = function (_0x1def2f, _0x201234) {
      return _0x38541b.XkLcF(_0x1def2f, _0x201234);
    };
    _0x17875c.pZrNo = function (_0x5ccfa7, _0x453375) {
      return _0x38541b.cVenG(_0x5ccfa7, _0x453375);
    };
    _0x17875c.lEXWY = _0x38541b.ZxDWV;
    _0x17875c.RWByJ = _0x38541b.dSWaY;
    _0x17875c.DgSSd = function (_0x2e1ddf, _0x52098a) {
      return _0x38541b.XkLcF(_0x2e1ddf, _0x52098a);
    };
    _0x17875c.wUWMl = function (_0x369425, _0x54dac4) {
      return _0x38541b.npYnn(_0x369425, _0x54dac4);
    };
    _0x17875c.DvKSB = _0x38541b.tZJYg;
    _0x17875c.yQCHq = _0x38541b.yeZIm;
    _0x17875c.ZBKFd = _0x38541b.pdEEw;
    _0x17875c.uIojU = _0x38541b.kJEOe;
    _0x17875c.hJJul = _0x38541b.JWKay;
    _0x17875c.NSsBF = function (_0x278024, _0x2fd35e) {
      return _0x38541b.OixQY(_0x278024, _0x2fd35e);
    };
    _0x17875c.Vbitl = _0x38541b.lNggs;
    _0x17875c.ISCWl = _0x38541b.oHWkJ;
    _0x17875c.erQWo = function (_0x37891b, _0x33f177) {
      return _0x38541b.LEtCl(_0x37891b, _0x33f177);
    };
    _0x17875c.uvBFz = _0x38541b.buTvF;
    _0x17875c.laDfW = _0x38541b.VZlmM;
    const _0x10ea11 = _0x17875c;
    if (_0x38541b.npYnn(_0x38541b.iZntg, _0x38541b.iZntg)) {
      _0x38541b.cnOGc(request, _0x59df54, async (_0x53422a, _0x24898a, _0xb8dfb5) => {
        const _0x38e543 = {};
        _0x38e543.MSQbO = function (_0x184350, _0x5b460a) {
          return _0x10ea11.LfXnY(_0x184350, _0x5b460a);
        };
        _0x38e543.MOiJb = function (_0x1b7699, _0x28a51f) {
          return _0x10ea11.UqjxB(_0x1b7699, _0x28a51f);
        };
        const _0x1657b0 = _0x38e543;
        if (_0x10ea11.DcmlU(_0x10ea11.ukohv, _0x10ea11.aKoCa)) {
          if (!_0x53422a && _0x10ea11.QXofB(_0x24898a.statusCode, 200)) {
            if (_0x10ea11.QXofB(_0x10ea11.Xuqil, _0x10ea11.Xuqil)) {
              try {
                if (_0x10ea11.Cktav(_0x10ea11.kOFVJ, _0x10ea11.hMcyH)) {
                  console.log(data.bizErrorMsg);
                  return null;
                } else {
                  const _0x2f5905 = JSON.parse(_0xb8dfb5);
                  if (_0x10ea11.BjqON(isEmpty, _0x2f5905.data.data)) {
                    if (_0x10ea11.pZrNo(_0x10ea11.lEXWY, _0x10ea11.RWByJ)) {
                      console.log(_0x2f5905.ret[0]);
                      _0x10ea11.DgSSd(_0x18a0e9, false);
                    } else {
                      console.log(_0xb8dfb5);
                      _0x10ea11.FcQln(_0x18a0e9, null);
                    }
                  } else {
                    if (_0x10ea11.wUWMl(_0x10ea11.DvKSB, _0x10ea11.yQCHq)) {
                      const _0x43e45e = fn.apply(context, arguments);
                      fn = null;
                      return _0x43e45e;
                    } else {
                      if (_0x2f5905.data.data.errorMsg) {
                        if (_0x10ea11.pZrNo(_0x10ea11.ZBKFd, _0x10ea11.ZBKFd)) {
                          console.log(_0x2f5905.ret[0]);
                          _0x10ea11.DoHGz(_0x18a0e9, false);
                        } else {
                          console.log(_0x2f5905.data.data.errorMsg);
                        }
                      } else {
                        if (_0x10ea11.wUWMl(_0x10ea11.uIojU, _0x10ea11.hJJul)) {
                          return false;
                        } else {
                          let _0x14c287 = _0x2f5905.data.data.sendRightList[0];
                          const _0x32671a = _0x10ea11.NSsBF(_0x14c287.materialInfo.description, _0x14c287.materialInfo.title);
                          console.log(_0x32671a);
                        }
                      }
                      _0x10ea11.DgSSd(_0x18a0e9, _0x2f5905);
                    }
                  }
                }
              } catch (_0x5bf7f5) {
                if (_0x10ea11.wUWMl(_0x10ea11.Vbitl, _0x10ea11.ISCWl)) {
                  if (req.data.data.errorMsg) {
                    console.log(req.data.data.errorMsg);
                  } else {
                    let _0x6f235c = req.data.data.sendRightList[0];
                    const _0x546871 = _0x1657b0.MSQbO(_0x6f235c.materialInfo.description, _0x6f235c.materialInfo.title);
                    console.log(_0x546871);
                  }
                  _0x1657b0.MOiJb(_0x18a0e9, req);
                } else {
                  _0x10ea11.DgSSd(_0x18a0e9, false);
                }
              }
            } else {
              if (ret) {
                return debuggerProtection;
              } else {
                _0x10ea11.DoHGz(debuggerProtection, 0);
              }
            }
          } else {
            if (_0x10ea11.erQWo(_0x10ea11.uvBFz, _0x10ea11.laDfW)) {
              _0x10ea11.DgSSd(_0x18a0e9, false);
            } else {
              console.log(req.data.data.errorMsg);
            }
          }
        } else {
          console.log(req.data.errorMsg);
        }
      });
    } else {
      const _0x1b8a5e = new RegExp(_0x38541b.JuiKk);
      const _0x4845e8 = new RegExp(_0x38541b.nhmjg, "i");
      const _0x1f2070 = _0x38541b.FlZXF(mMWhM, _0x38541b.REBbL);
      if (!_0x1b8a5e.test(_0x38541b.OQNkw(_0x1f2070, _0x38541b.SvAcC)) || !_0x4845e8.test(_0x38541b.QyQwB(_0x1f2070, _0x38541b.OOMVv))) {
        _0x38541b.FlZXF(_0x1f2070, "0");
      } else {
        _0x38541b.bfkdz(mMWhM);
      }
    }
  });
}
async function lyb_sign(_0x3a3148) {
  const _0x43e05c = {};
  _0x43e05c.QpVWk = function (_0x36db9e, _0x121f79) {
    return _0x36db9e + _0x121f79;
  };
  _0x43e05c.Zraef = "debu";
  _0x43e05c.mEWhn = "gger";
  _0x43e05c.PnrBh = "action";
  _0x43e05c.MaDkJ = function (_0x198d81, _0x120d69) {
    return _0x198d81(_0x120d69);
  };
  _0x43e05c.jcmDs = "return /\" + this + \"/";
  _0x43e05c.KXDJz = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x43e05c.hapRI = function (_0x392f55, _0x258154) {
    return _0x392f55 !== _0x258154;
  };
  _0x43e05c.eNYwS = "uVTqp";
  _0x43e05c.SOUaz = "PBXgu";
  _0x43e05c.khCJF = function (_0x179829, _0x314283) {
    return _0x179829 == _0x314283;
  };
  _0x43e05c.dPgNP = "GAxfv";
  _0x43e05c.kqmOP = function (_0x506c3c, _0x1fdffd) {
    return _0x506c3c === _0x1fdffd;
  };
  _0x43e05c.eiFWN = "jHrTX";
  _0x43e05c.mQrOu = "kFywq";
  _0x43e05c.Wnfoz = function (_0x511a82, _0x404cf2) {
    return _0x511a82 !== _0x404cf2;
  };
  _0x43e05c.NvlGU = "rhgHD";
  _0x43e05c.dnJli = "签到成功";
  _0x43e05c.znQft = function (_0x461ceb, _0x32459a) {
    return _0x461ceb(_0x32459a);
  };
  _0x43e05c.ShVpN = "hPUHD";
  _0x43e05c.aRlBW = "Ddrel";
  _0x43e05c.BqgES = "HKwlA";
  _0x43e05c.PWezN = "LAscS";
  _0x43e05c.Imrsj = function (_0x1ee052, _0x50afac, _0x4f13ea) {
    return _0x1ee052(_0x50afac, _0x4f13ea);
  };
  _0x43e05c.LpEHa = function (_0xa121d6, _0x264e76) {
    return _0xa121d6(_0x264e76);
  };
  _0x43e05c.rDCHp = "mtop.ele.me";
  _0x43e05c.NfGkR = "application/json";
  _0x43e05c.IKCdI = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x43e05c.excoA = "2A21607NIIT1ND5C4YXJ6C";
  _0x43e05c.lBeeW = "no-cache";
  _0x43e05c.pNFun = "application/x-www-form-urlencoded";
  _0x43e05c.zoWpN = "https://tb.ele.me";
  _0x43e05c.VnZNq = "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login";
  _0x43e05c.tAXOz = "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x43e05c.PKwpq = "game_center";
  _0x43e05c.mNDFY = "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@";
  _0x43e05c.Hrbqx = "data=";
  _0x43e05c.sJjHZ = function (_0x523381, _0x88ee3e) {
    return _0x523381(_0x88ee3e);
  };
  _0x43e05c.cSIUT = function (_0x300db1, _0x30dad2) {
    return _0x300db1 + _0x30dad2;
  };
  _0x43e05c.kiWLM = function (_0xdbf537, _0x53f0ee) {
    return _0xdbf537 + _0x53f0ee;
  };
  _0x43e05c.EXkJN = function (_0x162381, _0x1bc9db) {
    return _0x162381 + _0x1bc9db;
  };
  _0x43e05c.WJNAJ = function (_0x512a45, _0x435928) {
    return _0x512a45 + _0x435928;
  };
  _0x43e05c.TtCAC = function (_0x4ac088, _0x581f9f) {
    return _0x4ac088 + _0x581f9f;
  };
  _0x43e05c.VYXSK = "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.7.1&appKey=";
  _0x43e05c.tUHDZ = "&t=";
  _0x43e05c.GTTAl = "&sign=";
  _0x43e05c.zwBbr = "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141";
  _0x43e05c.hpfeP = "POST";
  const _0x2df2fc = _0x43e05c;
  const _0x5007d6 = await _0x2df2fc.LpEHa(checkCk, _0x3a3148);
  const _0x3a79b2 = {};
  _0x3a79b2.authority = _0x2df2fc.rDCHp;
  _0x3a79b2.accept = _0x2df2fc.NfGkR;
  _0x3a79b2["accept-language"] = _0x2df2fc.IKCdI;
  _0x3a79b2.asac = _0x2df2fc.excoA;
  _0x3a79b2["cache-control"] = _0x2df2fc.lBeeW;
  _0x3a79b2["content-type"] = _0x2df2fc.pNFun;
  _0x3a79b2.origin = _0x2df2fc.zoWpN;
  _0x3a79b2.pragma = _0x2df2fc.lBeeW;
  _0x3a79b2.referer = _0x2df2fc.VnZNq;
  _0x3a79b2.cookie = _0x5007d6;
  _0x3a79b2["user-agent"] = _0x2df2fc.tAXOz;
  var _0x4fa61d = _0x3a79b2;
  const _0x4458f1 = new Date().getTime();
  const _0x47de7c = 12574478;
  const _0x51fe1b = {};
  _0x51fe1b.bizScene = _0x2df2fc.PKwpq;
  _0x51fe1b.asac = _0x2df2fc.excoA;
  _0x51fe1b.umidtoken = _0x2df2fc.QpVWk(_0x2df2fc.mNDFY, _0x4458f1);
  const _0x294ff5 = _0x51fe1b;
  var _0x460cf7 = _0x2df2fc.QpVWk(_0x2df2fc.Hrbqx, _0x2df2fc.LpEHa(encodeURIComponent, JSON.stringify(_0x294ff5)));
  const _0x5c1418 = _0x2df2fc.sJjHZ(getToken, _0x5007d6),
    _0x2e8100 = _0x5c1418.split("_")[0];
  const _0x57f632 = await _0x2df2fc.Imrsj(sign, _0x2df2fc.QpVWk(_0x2df2fc.QpVWk(_0x2df2fc.cSIUT(_0x2df2fc.kiWLM(_0x2df2fc.kiWLM(_0x2df2fc.EXkJN(_0x2e8100, "&"), _0x4458f1), "&"), _0x47de7c), "&"), JSON.stringify(_0x294ff5)), kami);
  const _0x103a27 = {};
  _0x103a27.url = _0x2df2fc.EXkJN(_0x2df2fc.EXkJN(_0x2df2fc.WJNAJ(_0x2df2fc.WJNAJ(_0x2df2fc.WJNAJ(_0x2df2fc.TtCAC(_0x2df2fc.VYXSK, _0x47de7c), _0x2df2fc.tUHDZ), _0x4458f1), _0x2df2fc.GTTAl), _0x57f632), _0x2df2fc.zwBbr);
  _0x103a27.method = _0x2df2fc.hpfeP;
  _0x103a27.headers = _0x4fa61d;
  _0x103a27.body = _0x460cf7;
  var _0xcf2e6a = _0x103a27;
  return _0x2df2fc.sJjHZ(tryCatchPromise, _0x35144b => {
    const _0x265500 = {};
    _0x265500.iOEqZ = function (_0x29261c, _0x1e791f) {
      return _0x2df2fc.QpVWk(_0x29261c, _0x1e791f);
    };
    _0x265500.bvAfF = _0x2df2fc.Zraef;
    _0x265500.sCyzi = _0x2df2fc.mEWhn;
    _0x265500.qocrT = _0x2df2fc.PnrBh;
    _0x265500.VQQSA = function (_0x1b1ef2, _0x2cd333) {
      return _0x2df2fc.MaDkJ(_0x1b1ef2, _0x2cd333);
    };
    _0x265500.ptpBZ = _0x2df2fc.jcmDs;
    _0x265500.GLiRS = _0x2df2fc.KXDJz;
    _0x265500.sVqhU = function (_0x185633, _0x3b2d74) {
      return _0x2df2fc.hapRI(_0x185633, _0x3b2d74);
    };
    _0x265500.IJRPY = _0x2df2fc.eNYwS;
    _0x265500.NcoSQ = _0x2df2fc.SOUaz;
    _0x265500.quimZ = function (_0x5cb7c6, _0x50d04e) {
      return _0x2df2fc.khCJF(_0x5cb7c6, _0x50d04e);
    };
    _0x265500.AxuNu = function (_0x2e3235, _0x1f9d07) {
      return _0x2df2fc.hapRI(_0x2e3235, _0x1f9d07);
    };
    _0x265500.CkgEs = _0x2df2fc.dPgNP;
    _0x265500.dqAoN = function (_0x452aea, _0x115a79) {
      return _0x2df2fc.kqmOP(_0x452aea, _0x115a79);
    };
    _0x265500.YnniI = _0x2df2fc.eiFWN;
    _0x265500.DVWIJ = _0x2df2fc.mQrOu;
    _0x265500.kTGhY = function (_0x55fb29, _0x316f96) {
      return _0x2df2fc.Wnfoz(_0x55fb29, _0x316f96);
    };
    _0x265500.hecfx = _0x2df2fc.NvlGU;
    _0x265500.tyCOw = _0x2df2fc.dnJli;
    _0x265500.reqPe = function (_0xb88f23, _0x20e02c) {
      return _0x2df2fc.znQft(_0xb88f23, _0x20e02c);
    };
    _0x265500.KhSNQ = _0x2df2fc.ShVpN;
    _0x265500.KRzVo = _0x2df2fc.aRlBW;
    const _0x3c8b2d = _0x265500;
    if (_0x2df2fc.Wnfoz(_0x2df2fc.BqgES, _0x2df2fc.PWezN)) {
      _0x2df2fc.Imrsj(request, _0xcf2e6a, async (_0x2a14dd, _0x1b1f47, _0x2f2f86) => {
        const _0x33f07b = {};
        _0x33f07b.HnLDm = function (_0x3c5a8c, _0x177a1b) {
          return _0x3c8b2d.VQQSA(_0x3c5a8c, _0x177a1b);
        };
        const _0x49fbbf = _0x33f07b;
        if (_0x3c8b2d.sVqhU(_0x3c8b2d.IJRPY, _0x3c8b2d.NcoSQ)) {
          if (!_0x2a14dd && _0x3c8b2d.quimZ(_0x1b1f47.statusCode, 200)) {
            if (_0x3c8b2d.AxuNu(_0x3c8b2d.CkgEs, _0x3c8b2d.CkgEs)) {
              try {
                const _0xed0d2b = JSON.parse(_0x2f2f86);
                const _0x4363f7 = JSON.parse(_0xed0d2b.data.data);
                _0x49fbbf.HnLDm(_0x35144b, _0x4363f7);
              } catch (_0x17cf02) {
                console.log(_0x2f2f86);
                _0x49fbbf.HnLDm(_0x35144b, null);
              }
            } else {
              const _0x2af948 = JSON.parse(_0x2f2f86);
              if (_0x2af948.data.errorMsg) {
                if (_0x3c8b2d.dqAoN(_0x3c8b2d.YnniI, _0x3c8b2d.DVWIJ)) {
                  (function () {
                    return true;
                  }).constructor(_0x3c8b2d.iOEqZ(_0x3c8b2d.bvAfF, _0x3c8b2d.sCyzi)).call(_0x3c8b2d.qocrT);
                } else {
                  console.log(_0x2af948.data.errorMsg);
                }
              } else {
                if (_0x3c8b2d.kTGhY(_0x3c8b2d.hecfx, _0x3c8b2d.hecfx)) {
                  _0x3c8b2d.VQQSA(_0x35144b, false);
                } else {
                  console.log(_0x3c8b2d.tyCOw);
                }
              }
              _0x3c8b2d.reqPe(_0x35144b, _0x2af948);
            }
          } else {
            if (_0x3c8b2d.kTGhY(_0x3c8b2d.KhSNQ, _0x3c8b2d.KRzVo)) {
              _0x3c8b2d.reqPe(_0x35144b, null);
            } else {
              const _0x501914 = test.constructor(_0x3c8b2d.ptpBZ)().compile(_0x3c8b2d.GLiRS);
              return !_0x501914.test(_0x6a18c7);
            }
          }
        } else {
          if (fn) {
            const _0x81590c = fn.apply(context, arguments);
            fn = null;
            return _0x81590c;
          }
        }
      });
    } else {
      console.log(_0x3c8b2d.tyCOw);
    }
  });
}
async function lyb_llk_token(_0x4ce4bd) {
  const _0x18afc7 = {};
  _0x18afc7.IAlTy = "LIANLIANKAN";
  _0x18afc7.WbaSe = "login";
  _0x18afc7.OihYT = "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}";
  _0x18afc7.KPmiU = function (_0x37395f, _0x287284, _0x4e377a) {
    return _0x37395f(_0x287284, _0x4e377a);
  };
  const _0x477743 = _0x18afc7;
  const _0x139c7c = {};
  _0x139c7c.bizScene = _0x477743.IAlTy;
  _0x139c7c.bizMethod = _0x477743.WbaSe;
  _0x139c7c.bizParam = _0x477743.OihYT;
  _0x139c7c.longitude = 114.174328;
  _0x139c7c.latitude = 22.316555;
  const _0x499fac = _0x139c7c;
  const _0x32416e = await _0x477743.KPmiU(gameRequest, _0x4ce4bd, _0x499fac);
  return _0x32416e.data.token;
}
setInterval(function () {
  const _0x4441e5 = {};
  _0x4441e5.idbAj = function (_0x2ea895) {
    return _0x2ea895();
  };
  const _0x3bb969 = _0x4441e5;
  _0x3bb969.idbAj(mMWhM);
}, 4000);
async function lyb_llk_gamecode(_0x2f4631, _0x169c28) {
  const _0x25bcd1 = {};
  _0x25bcd1.EoGun = function (_0x3e49a6, _0x136b67) {
    return _0x3e49a6(_0x136b67);
  };
  _0x25bcd1.IMAcL = "LIANLIANKAN";
  _0x25bcd1.KnEHJ = "startGame";
  _0x25bcd1.BeePx = function (_0x597c1b, _0x20f746) {
    return _0x597c1b + _0x20f746;
  };
  _0x25bcd1.UPKPS = function (_0x19f8d4, _0x338871) {
    return _0x19f8d4 + _0x338871;
  };
  _0x25bcd1.nkcko = "{\"gameId\":null,\"token\":\"";
  _0x25bcd1.qYQpU = function (_0x163610, _0x20b06b, _0x2b2663) {
    return _0x163610(_0x20b06b, _0x2b2663);
  };
  _0x25bcd1.mtCWr = function (_0x166b70, _0x2a762e) {
    return _0x166b70 != _0x2a762e;
  };
  _0x25bcd1.RZtiu = "success";
  _0x25bcd1.aCWXe = function (_0x242017, _0x444bdc) {
    return _0x242017 !== _0x444bdc;
  };
  _0x25bcd1.PxiME = "pIhfX";
  const _0x429d43 = _0x25bcd1;
  const _0x34a699 = {};
  _0x34a699.bizScene = _0x429d43.IMAcL;
  _0x34a699.bizMethod = _0x429d43.KnEHJ;
  _0x34a699.bizParam = _0x429d43.BeePx(_0x429d43.UPKPS(_0x429d43.nkcko, _0x169c28), "\"}");
  _0x34a699.longitude = 114.174328;
  _0x34a699.latitude = 22.316555;
  const _0xa252b = _0x34a699;
  const _0x2bc865 = await _0x429d43.qYQpU(gameRequest, _0x2f4631, _0xa252b);
  if (_0x429d43.mtCWr(_0x2bc865.bizErrorMsg, _0x429d43.RZtiu)) {
    if (_0x429d43.aCWXe(_0x429d43.PxiME, _0x429d43.PxiME)) {
      _0x429d43.EoGun(result, "0");
    } else {
      console.log(_0x2bc865.bizErrorMsg);
      return null;
    }
  }
  return _0x2bc865.data.gameCode;
}
async function lyb_llk_passgame(_0xecec59, _0x150bf3, _0xa6c33a) {
  const _0x4996b4 = {};
  _0x4996b4.KRvWT = "LIANLIANKAN";
  _0x4996b4.JYDeU = "settlement";
  _0x4996b4.NQPRU = function (_0x3828e5, _0x3488b1) {
    return _0x3828e5 + _0x3488b1;
  };
  _0x4996b4.xbHsp = function (_0x30c2c2, _0x1974bf) {
    return _0x30c2c2 + _0x1974bf;
  };
  _0x4996b4.mUkcm = function (_0x378186, _0x5f5392) {
    return _0x378186 + _0x5f5392;
  };
  _0x4996b4.dTlvg = "{\"gameCode\":\"";
  _0x4996b4.XAXSw = "\",\"passLevelTime\":40351,\"gameId\":null,\"token\":\"";
  _0x4996b4.WueYY = function (_0x4161ec, _0x3dd1d8, _0x184180) {
    return _0x4161ec(_0x3dd1d8, _0x184180);
  };
  _0x4996b4.byCvU = function (_0x5f0849, _0x145504) {
    return _0x5f0849 != _0x145504;
  };
  _0x4996b4.bnmfQ = "success";
  _0x4996b4.dvmzc = function (_0x2c1893, _0x5b070a) {
    return _0x2c1893 !== _0x5b070a;
  };
  _0x4996b4.uYLYq = "OCkRb";
  _0x4996b4.uaTmX = "bQlVA";
  const _0x215279 = _0x4996b4;
  const _0x4904ee = {};
  _0x4904ee.bizScene = _0x215279.KRvWT;
  _0x4904ee.bizMethod = _0x215279.JYDeU;
  _0x4904ee.bizParam = _0x215279.NQPRU(_0x215279.NQPRU(_0x215279.xbHsp(_0x215279.mUkcm(_0x215279.dTlvg, _0x150bf3), _0x215279.XAXSw), _0xa6c33a), "\"}");
  const _0x6dfea5 = _0x4904ee;
  const _0x38fb9e = await _0x215279.WueYY(gameRequest, _0xecec59, _0x6dfea5);
  if (_0x215279.byCvU(_0x38fb9e.bizErrorMsg, _0x215279.bnmfQ)) {
    if (_0x215279.dvmzc(_0x215279.uYLYq, _0x215279.uaTmX)) {
      console.log(_0x38fb9e.bizErrorMsg);
      return null;
    } else {
      console.log(_0x38fb9e.bizErrorMsg);
      return null;
    }
  }
  return _0x38fb9e.data.lastLevelId;
}
async function gameRequest(_0xc99132, _0x202860) {
  const _0x653deb = {};
  _0x653deb.XCaUx = function (_0x4e1a52, _0x2b8511) {
    return _0x4e1a52(_0x2b8511);
  };
  _0x653deb.bzvNV = function (_0x25e573) {
    return _0x25e573();
  };
  _0x653deb.pvdbS = function (_0x37b110, _0x326e0b) {
    return _0x37b110 + _0x326e0b;
  };
  _0x653deb.irKru = function (_0x383528, _0xab9182) {
    return _0x383528 * _0xab9182;
  };
  _0x653deb.BbRvL = function (_0x43e089, _0xf3aa25) {
    return _0x43e089 - _0xf3aa25;
  };
  _0x653deb.mGxax = function (_0xb7fd3, _0x18c857) {
    return _0xb7fd3 !== _0x18c857;
  };
  _0x653deb.gZCrg = "cyhrK";
  _0x653deb.SEpfy = "RcRaM";
  _0x653deb.tYHXq = function (_0x31bfc2, _0x1279d7) {
    return _0x31bfc2 == _0x1279d7;
  };
  _0x653deb.vYxTO = function (_0x452050, _0x46a7db) {
    return _0x452050 !== _0x46a7db;
  };
  _0x653deb.qPiZg = "wJFsP";
  _0x653deb.gRRTu = "PnSCG";
  _0x653deb.irBnZ = function (_0x240318, _0x149930) {
    return _0x240318 === _0x149930;
  };
  _0x653deb.xCjQT = "THUTR";
  _0x653deb.JAIFU = function (_0x39e529, _0x569e2a) {
    return _0x39e529(_0x569e2a);
  };
  _0x653deb.zqlbQ = function (_0xdf2e64, _0x5db7dd) {
    return _0xdf2e64 !== _0x5db7dd;
  };
  _0x653deb.PzrJM = "SjGKT";
  _0x653deb.rXqjY = function (_0x3f91bb, _0x1a7f60) {
    return _0x3f91bb !== _0x1a7f60;
  };
  _0x653deb.FIpTo = "QLIHv";
  _0x653deb.ZGURd = function (_0x1f4b34, _0x5d503b) {
    return _0x1f4b34(_0x5d503b);
  };
  _0x653deb.fOxcJ = "debu";
  _0x653deb.sSHvc = "gger";
  _0x653deb.cWFoP = "stateObject";
  _0x653deb.hLzAt = function (_0x3968e7, _0x5b6e2c) {
    return _0x3968e7 !== _0x5b6e2c;
  };
  _0x653deb.MOnBS = "PcdLT";
  _0x653deb.YEpQu = "JBtAq";
  _0x653deb.mqaQC = function (_0x3cd206, _0x50c150, _0x165260) {
    return _0x3cd206(_0x50c150, _0x165260);
  };
  _0x653deb.HHJGB = "shopping.ele.me";
  _0x653deb.IEzEZ = "application/json";
  _0x653deb.GjEYr = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x653deb.JeSms = "no-cache";
  _0x653deb.eQMAk = "application/x-www-form-urlencoded";
  _0x653deb.DtMbf = "https://r.ele.me";
  _0x653deb.JeUWY = "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0";
  _0x653deb.WNkpF = "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x653deb.HSsFy = "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x653deb.rOYbq = function (_0x599343, _0x455478) {
    return _0x599343 + _0x455478;
  };
  _0x653deb.kUEad = "data=";
  _0x653deb.YqyMp = function (_0xc64a2, _0x3e01a4, _0x14b01b) {
    return _0xc64a2(_0x3e01a4, _0x14b01b);
  };
  _0x653deb.RlBUk = function (_0x25b4ab, _0x5c8110) {
    return _0x25b4ab + _0x5c8110;
  };
  _0x653deb.BBjpb = function (_0x4c0897, _0x3e943b) {
    return _0x4c0897 + _0x3e943b;
  };
  _0x653deb.GIPhU = function (_0x11f940, _0x52b839) {
    return _0x11f940 + _0x52b839;
  };
  _0x653deb.AdQWU = function (_0x1b6c0f, _0x2537df) {
    return _0x1b6c0f + _0x2537df;
  };
  _0x653deb.tvKVN = function (_0x305217, _0x58817a) {
    return _0x305217 + _0x58817a;
  };
  _0x653deb.YomNJ = function (_0x2b7744, _0x55f389) {
    return _0x2b7744 + _0x55f389;
  };
  _0x653deb.QHvpv = "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=";
  _0x653deb.YiuJu = "&sign=";
  _0x653deb.wADHU = "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0";
  _0x653deb.yCBSI = "POST";
  _0x653deb.fJmJp = function (_0x231d5f, _0x23f7dd) {
    return _0x231d5f(_0x23f7dd);
  };
  const _0x3b5556 = _0x653deb;
  const _0x55d508 = {};
  _0x55d508.authority = _0x3b5556.HHJGB;
  _0x55d508.accept = _0x3b5556.IEzEZ;
  _0x55d508["accept-language"] = _0x3b5556.GjEYr;
  _0x55d508["cache-control"] = _0x3b5556.JeSms;
  _0x55d508["content-type"] = _0x3b5556.eQMAk;
  _0x55d508.origin = _0x3b5556.DtMbf;
  _0x55d508.pragma = _0x3b5556.JeSms;
  _0x55d508.referer = _0x3b5556.JeUWY;
  _0x55d508.cookie = _0xc99132;
  _0x55d508["x-ele-ua"] = _0x3b5556.WNkpF;
  _0x55d508["user-agent"] = _0x3b5556.HSsFy;
  var _0x47e382 = _0x55d508;
  const _0x100890 = new Date().getTime();
  const _0x9f9faa = 12574478;
  var _0x4d2a81 = _0x3b5556.rOYbq(_0x3b5556.kUEad, _0x3b5556.ZGURd(encodeURIComponent, JSON.stringify(_0x202860)));
  const _0xfd701b = _0x3b5556.ZGURd(getToken, _0xc99132),
    _0x2db1ef = _0xfd701b.split("_")[0];
  const _0x12d1c9 = await _0x3b5556.YqyMp(sign, _0x3b5556.RlBUk(_0x3b5556.RlBUk(_0x3b5556.BBjpb(_0x3b5556.GIPhU(_0x3b5556.AdQWU(_0x3b5556.AdQWU(_0x2db1ef, "&"), _0x100890), "&"), _0x9f9faa), "&"), JSON.stringify(_0x202860)), kami);
  const _0x1390dd = {};
  _0x1390dd.url = _0x3b5556.tvKVN(_0x3b5556.tvKVN(_0x3b5556.tvKVN(_0x3b5556.YomNJ(_0x3b5556.QHvpv, _0x100890), _0x3b5556.YiuJu), _0x12d1c9), _0x3b5556.wADHU);
  _0x1390dd.method = _0x3b5556.yCBSI;
  _0x1390dd.headers = _0x47e382;
  _0x1390dd.body = _0x4d2a81;
  var _0x3865ea = _0x1390dd;
  return _0x3b5556.fJmJp(tryCatchPromise, _0x21767f => {
    const _0x313fa3 = {};
    _0x313fa3.yxDPl = function (_0x495258, _0x165c52) {
      return _0x3b5556.pvdbS(_0x495258, _0x165c52);
    };
    _0x313fa3.Qmblz = _0x3b5556.fOxcJ;
    _0x313fa3.jLUix = _0x3b5556.sSHvc;
    _0x313fa3.rmIob = _0x3b5556.cWFoP;
    _0x313fa3.RmhEl = function (_0x53d3c9, _0x4173a0) {
      return _0x3b5556.ZGURd(_0x53d3c9, _0x4173a0);
    };
    const _0x520287 = _0x313fa3;
    if (_0x3b5556.hLzAt(_0x3b5556.MOnBS, _0x3b5556.YEpQu)) {
      _0x3b5556.mqaQC(request, _0x3865ea, async (_0x4cfe9c, _0x9ba4ae, _0x3deaee) => {
        const _0x9105d3 = {};
        _0x9105d3.oczbZ = function (_0x1ea9f7, _0x3a6a5c) {
          return _0x3b5556.XCaUx(_0x1ea9f7, _0x3a6a5c);
        };
        _0x9105d3.IGUFY = function (_0x31116e) {
          return _0x3b5556.bzvNV(_0x31116e);
        };
        _0x9105d3.PCnbt = function (_0x59f772, _0x1363c3) {
          return _0x3b5556.pvdbS(_0x59f772, _0x1363c3);
        };
        _0x9105d3.GnYWZ = function (_0xf9a086, _0x58bedb) {
          return _0x3b5556.irKru(_0xf9a086, _0x58bedb);
        };
        _0x9105d3.mxsBw = function (_0x336cc3, _0x21f463) {
          return _0x3b5556.pvdbS(_0x336cc3, _0x21f463);
        };
        _0x9105d3.OaIoN = function (_0x490914, _0x1c307e) {
          return _0x3b5556.BbRvL(_0x490914, _0x1c307e);
        };
        const _0x1954ef = _0x9105d3;
        if (_0x3b5556.mGxax(_0x3b5556.gZCrg, _0x3b5556.SEpfy)) {
          if (!_0x4cfe9c && _0x3b5556.tYHXq(_0x9ba4ae.statusCode, 200)) {
            if (_0x3b5556.vYxTO(_0x3b5556.qPiZg, _0x3b5556.gRRTu)) {
              try {
                if (_0x3b5556.irBnZ(_0x3b5556.xCjQT, _0x3b5556.xCjQT)) {
                  const _0x287ec7 = JSON.parse(_0x3deaee);
                  const _0x6b9773 = JSON.parse(_0x287ec7.data.data);
                  _0x3b5556.JAIFU(_0x21767f, _0x6b9773);
                } else {
                  (function () {
                    return false;
                  }).constructor(_0x520287.yxDPl(_0x520287.Qmblz, _0x520287.jLUix)).apply(_0x520287.rmIob);
                }
              } catch (_0x197b21) {
                if (_0x3b5556.zqlbQ(_0x3b5556.PzrJM, _0x3b5556.PzrJM)) {
                  _0x1954ef.oczbZ(_0x21767f, false);
                } else {
                  console.log(_0x3deaee);
                  _0x3b5556.JAIFU(_0x21767f, null);
                }
              }
            } else {
              const _0x302d7e = JSON.parse(_0x3deaee);
              const _0x4648af = JSON.parse(_0x302d7e.data.data);
              _0x520287.RmhEl(_0x21767f, _0x4648af);
            }
          } else {
            if (_0x3b5556.rXqjY(_0x3b5556.FIpTo, _0x3b5556.FIpTo)) {
              _0x1954ef.IGUFY(mMWhM);
            } else {
              _0x3b5556.ZGURd(_0x21767f, null);
            }
          }
        } else {
          return Math.floor(_0x1954ef.PCnbt(_0x1954ef.GnYWZ(Math.random(), _0x1954ef.mxsBw(_0x1954ef.OaIoN(m, n), 1)), n));
        }
      });
    } else {
      const _0x1a47d7 = fn.apply(context, arguments);
      fn = null;
      return _0x1a47d7;
    }
  });
}
async function llk_game(_0x2af59c, _0x34554a) {
  const _0x316127 = {};
  _0x316127.jqnDP = "while (true) {}";
  _0x316127.bcrjS = "counter";
  _0x316127.tEjPt = function (_0x4b117d, _0x461625) {
    return _0x4b117d(_0x461625);
  };
  _0x316127.SqKFF = function (_0x4b876e, _0x5f9111, _0x40e2f5) {
    return _0x4b876e(_0x5f9111, _0x40e2f5);
  };
  _0x316127.DrfZd = function (_0x263baf, _0x19ce8e) {
    return _0x263baf === _0x19ce8e;
  };
  _0x316127.KYVaB = "FBRBG";
  _0x316127.xfEHc = function (_0x471408, _0x45d754, _0x49af09, _0x2d8c4b) {
    return _0x471408(_0x45d754, _0x49af09, _0x2d8c4b);
  };
  _0x316127.xsIgq = function (_0xa88f1b, _0x416969) {
    return _0xa88f1b != _0x416969;
  };
  _0x316127.dEIES = function (_0x58ee38, _0x3dc42e) {
    return _0x58ee38 !== _0x3dc42e;
  };
  _0x316127.exvvu = "dLNDN";
  _0x316127.ZHYqs = "BOlHN";
  _0x316127.kfhKR = function (_0x168248, _0x328f0, _0x952781) {
    return _0x168248(_0x328f0, _0x952781);
  };
  const _0x4b9cc0 = _0x316127;
  const _0x2cb4d8 = await _0x4b9cc0.SqKFF(lyb_llk_gamecode, _0x2af59c, _0x34554a);
  if (_0x2cb4d8) {
    if (_0x4b9cc0.DrfZd(_0x4b9cc0.KYVaB, _0x4b9cc0.KYVaB)) {
      const _0x41b490 = await _0x4b9cc0.xfEHc(lyb_llk_passgame, _0x2af59c, _0x2cb4d8, _0x34554a);
      if (_0x4b9cc0.xsIgq(_0x41b490, 3)) {
        if (_0x4b9cc0.dEIES(_0x4b9cc0.exvvu, _0x4b9cc0.ZHYqs)) {
          await _0x4b9cc0.kfhKR(llk_game, _0x2af59c, _0x34554a);
        } else {
          return function (_0x4033a0) {}.constructor(_0x4b9cc0.jqnDP).apply(_0x4b9cc0.bcrjS);
        }
      }
    } else {
      _0x4b9cc0.tEjPt(debuggerProtection, 0);
    }
  }
  return;
}
async function water_login(_0xe1759d) {
  const _0x10e4c3 = {};
  _0x10e4c3.FGhTI = "WATER_SORT";
  _0x10e4c3.FsMxY = "{\"type\":\"login\"}";
  _0x10e4c3.qhkEX = "login";
  _0x10e4c3.lEfuJ = function (_0x776d80, _0x5c8408, _0x554505) {
    return _0x776d80(_0x5c8408, _0x554505);
  };
  const _0x1865b2 = _0x10e4c3;
  const _0x56b574 = {};
  _0x56b574.bizScene = _0x1865b2.FGhTI;
  _0x56b574.bizParam = _0x1865b2.FsMxY;
  _0x56b574.bizMethod = _0x1865b2.qhkEX;
  const _0x1d932b = _0x56b574;
  const _0x4ae40e = await _0x1865b2.lEfuJ(gameRequest, _0xe1759d, _0x1d932b);
  return _0x4ae40e;
}
async function water_game_success(_0x127164) {
  const _0x5790dc = {};
  _0x5790dc.rqtTC = "WATER_SORT";
  _0x5790dc.NJwWp = "{\"type\":\"gameSuccess\"}";
  _0x5790dc.SpAbs = "gameSuccess";
  _0x5790dc.qDqQe = function (_0x3a2ba5, _0x36b199, _0x3bfc7c) {
    return _0x3a2ba5(_0x36b199, _0x3bfc7c);
  };
  const _0xdc5b16 = _0x5790dc;
  const _0x2070c5 = {};
  _0x2070c5.bizScene = _0xdc5b16.rqtTC;
  _0x2070c5.bizParam = _0xdc5b16.NJwWp;
  _0x2070c5.bizMethod = _0xdc5b16.SpAbs;
  const _0x16f4ec = _0x2070c5;
  const _0x36bbcd = await _0xdc5b16.qDqQe(gameRequest, _0x127164, _0x16f4ec);
  return _0x36bbcd;
}
async function water_reward(_0x835737, _0xa6e723) {
  const _0x327379 = {};
  _0x327379.VNaNT = "WATER_SORT";
  _0x327379.hwDtX = function (_0x19d35c, _0x3e4191) {
    return _0x19d35c + _0x3e4191;
  };
  _0x327379.ZOWrf = function (_0x50dad2, _0x3610e6) {
    return _0x50dad2 + _0x3610e6;
  };
  _0x327379.QMmLW = "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"";
  _0x327379.YADTL = "\",\"type\":1}}";
  _0x327379.zEmpg = "getPassPrize";
  _0x327379.xKEGb = function (_0x89317d, _0x87cfb0, _0x50a8e5) {
    return _0x89317d(_0x87cfb0, _0x50a8e5);
  };
  const _0x3563f3 = _0x327379;
  const _0x3a13ad = {};
  _0x3a13ad.bizScene = _0x3563f3.VNaNT;
  _0x3a13ad.bizParam = _0x3563f3.hwDtX(_0x3563f3.ZOWrf(_0x3563f3.QMmLW, _0xa6e723), _0x3563f3.YADTL);
  _0x3a13ad.bizMethod = _0x3563f3.zEmpg;
  const _0x97df96 = _0x3a13ad;
  const _0x1553a8 = await _0x3563f3.xKEGb(gameRequest, _0x835737, _0x97df96);
  return _0x1553a8;
}
async function water_game(_0x6761ee) {
  const _0x2444ca = {};
  _0x2444ca.vjvsL = "return /\" + this + \"/";
  _0x2444ca.yECcY = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x2444ca.MWyoJ = function (_0x3206e5) {
    return _0x3206e5();
  };
  _0x2444ca.eyoUj = function (_0x22c1cf, _0x4406e2) {
    return _0x22c1cf(_0x4406e2);
  };
  _0x2444ca.sIHlZ = function (_0x282ad8, _0x5e7a05) {
    return _0x282ad8 === _0x5e7a05;
  };
  _0x2444ca.MEjlW = "rwMKp";
  _0x2444ca.YQTgB = "mQlyq";
  _0x2444ca.SIiVP = function (_0x52ee54, _0x3200ad) {
    return _0x52ee54 <= _0x3200ad;
  };
  _0x2444ca.FXIfp = function (_0x495343, _0x2bf944) {
    return _0x495343 - _0x2bf944;
  };
  _0x2444ca.HJrwS = function (_0x482995, _0x232851) {
    return _0x482995 === _0x232851;
  };
  _0x2444ca.rIIbe = "DiceR";
  _0x2444ca.bPbpU = "bXWRn";
  _0x2444ca.ahURy = function (_0x211bba, _0x3cde8b) {
    return _0x211bba + _0x3cde8b;
  };
  _0x2444ca.mldCY = "欢乐倒水第";
  _0x2444ca.AqDfg = "关闯关成功";
  _0x2444ca.oiyHy = function (_0x58194c, _0x3dc850) {
    return _0x58194c !== _0x3dc850;
  };
  _0x2444ca.dmdlp = "qOhfh";
  _0x2444ca.JRpRD = function (_0x10d56d, _0x56e9c0, _0x533fa5) {
    return _0x10d56d(_0x56e9c0, _0x533fa5);
  };
  _0x2444ca.RDoUP = "获得：";
  _0x2444ca.bXlok = "乐园币";
  _0x2444ca.WHzzA = "快乐倒水闯关完成";
  const _0x5acf9d = _0x2444ca;
  const _0x3ccac2 = await _0x5acf9d.eyoUj(water_login, _0x6761ee);
  const _0x8b6514 = _0x3ccac2.passConf;
  const _0x3c95c0 = [];
  for (let _0x1981ca of Object.values(_0x8b6514)) {
    if (_0x5acf9d.sIHlZ(_0x5acf9d.MEjlW, _0x5acf9d.YQTgB)) {
      const _0x2ee1ed = function () {
        const _0x3da6ed = _0x2ee1ed.constructor(_0x5acf9d.vjvsL)().compile(_0x5acf9d.yECcY);
        return !_0x3da6ed.test(_0x6a18c7);
      };
      return _0x5acf9d.MWyoJ(_0x2ee1ed);
    } else {
      _0x3c95c0.push(_0x1981ca.passNum);
    }
  }
  var _0x10a6d8 = await _0x5acf9d.eyoUj(water_game_success, _0x6761ee);
  var _0x48b6b9 = _0x10a6d8.info.todayPass;
  var _0x3f2cd8 = 0;
  while (_0x5acf9d.SIiVP(_0x48b6b9, _0x3c95c0[_0x5acf9d.FXIfp(_0x3c95c0.length, 1)])) {
    if (_0x5acf9d.HJrwS(_0x5acf9d.rIIbe, _0x5acf9d.bPbpU)) {
      _0x5acf9d.eyoUj(resolve, null);
    } else {
      _0x10a6d8 = await _0x5acf9d.eyoUj(water_game_success, _0x6761ee);
      _0x48b6b9 = _0x10a6d8.info.todayPass;
      console.log(_0x5acf9d.ahURy(_0x5acf9d.ahURy(_0x5acf9d.mldCY, _0x48b6b9), _0x5acf9d.AqDfg));
      if (_0x3c95c0.includes(_0x48b6b9)) {
        if (_0x5acf9d.oiyHy(_0x5acf9d.dmdlp, _0x5acf9d.dmdlp)) {
          console.log(error);
        } else {
          _0x3f2cd8 = _0x5acf9d.ahURy(_0x3c95c0.indexOf(_0x48b6b9), 1);
          const _0x447f5e = await _0x5acf9d.JRpRD(water_reward, _0x6761ee, _0x3f2cd8);
          console.log(_0x5acf9d.ahURy(_0x5acf9d.ahURy(_0x5acf9d.RDoUP, _0x447f5e.goldnum), _0x5acf9d.bXlok));
        }
      }
    }
  }
  console.log(_0x5acf9d.WHzzA);
}
async function start() {
  const _0x423dc0 = {};
  _0x423dc0.nfNpp = function (_0x40f1ba, _0x4b3099) {
    return _0x40f1ba !== _0x4b3099;
  };
  _0x423dc0.MobXF = "wcGnq";
  _0x423dc0.eGWTi = "FSyVJ";
  _0x423dc0.dfjEG = "OyBqJ";
  _0x423dc0.NfmQe = function (_0x163275, _0x291cde) {
    return _0x163275 === _0x291cde;
  };
  _0x423dc0.aQqrS = function (_0x5121f5, _0x9dff5) {
    return _0x5121f5 !== _0x9dff5;
  };
  _0x423dc0.ldHbL = "ipHwC";
  _0x423dc0.AboRE = "weLPy";
  _0x423dc0.dnusy = "gFBHV";
  _0x423dc0.DKlFj = " ❌无效用户信息, 请重新获取ck";
  _0x423dc0.vyElE = "签到成功";
  _0x423dc0.GmeNs = function (_0x5276ab, _0x14d840) {
    return _0x5276ab(_0x14d840);
  };
  _0x423dc0.FoyzR = "xOQyu";
  _0x423dc0.YRkJH = "emaUU";
  _0x423dc0.hRnHo = "return /\" + this + \"/";
  _0x423dc0.frBtQ = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x423dc0.XpZxd = function (_0x5dff28, _0x41ecc2) {
    return _0x5dff28 === _0x41ecc2;
  };
  _0x423dc0.xDrBh = "TYtSe";
  _0x423dc0.BnkcW = "WGJCC";
  _0x423dc0.OVIaT = function (_0x13a163) {
    return _0x13a163();
  };
  _0x423dc0.Jpaue = function (_0x4e8ffb, _0x350e67) {
    return _0x4e8ffb(_0x350e67);
  };
  _0x423dc0.AbTiN = function (_0x550200, _0x53ad42) {
    return _0x550200 + _0x53ad42;
  };
  _0x423dc0.XTXjK = function (_0x2bc3fe, _0x1fdfce) {
    return _0x2bc3fe === _0x1fdfce;
  };
  _0x423dc0.lMVAV = "GAXjB";
  _0x423dc0.SzgYK = function (_0x430da0, _0x1ca235) {
    return _0x430da0 !== _0x1ca235;
  };
  _0x423dc0.LAhcz = "msmPT";
  _0x423dc0.bcSRN = "zdclx";
  _0x423dc0.EiEdp = function (_0x431998, _0x505a44) {
    return _0x431998 !== _0x505a44;
  };
  _0x423dc0.NRris = "JADEy";
  _0x423dc0.Sqjqp = "vZqZp";
  _0x423dc0.XOaIr = "ciTtS";
  _0x423dc0.PxJAG = "function *\\( *\\)";
  _0x423dc0.gIrCO = "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)";
  _0x423dc0.rCmca = function (_0x5d3c0b, _0x86806d) {
    return _0x5d3c0b(_0x86806d);
  };
  _0x423dc0.gOwXJ = "init";
  _0x423dc0.yttGw = "chain";
  _0x423dc0.wHKIq = function (_0x47219b, _0xbcda1d) {
    return _0x47219b + _0xbcda1d;
  };
  _0x423dc0.AWWix = "input";
  _0x423dc0.Tycih = function (_0xc268d4, _0x11e110, _0x532186) {
    return _0xc268d4(_0x11e110, _0x532186);
  };
  _0x423dc0.iJibw = "OAfiN";
  _0x423dc0.lpvcR = "Rahay";
  _0x423dc0.jaUcX = function (_0x18c8f3, _0x1e6008) {
    return _0x18c8f3 === _0x1e6008;
  };
  _0x423dc0.gjmFC = "LEjar";
  _0x423dc0.oPvNT = "YSTTh";
  _0x423dc0.FaPHM = function (_0x42a534, _0x2921ba) {
    return _0x42a534(_0x2921ba);
  };
  _0x423dc0.lCryr = "rxaFZ";
  _0x423dc0.lTYDf = function (_0x13f1dc, _0x24dd23, _0x151815) {
    return _0x13f1dc(_0x24dd23, _0x151815);
  };
  _0x423dc0.jXJjk = function (_0x587fa5, _0x43532f, _0x39917d) {
    return _0x587fa5(_0x43532f, _0x39917d);
  };
  _0x423dc0.MzneI = function (_0x45dd6c) {
    return _0x45dd6c();
  };
  _0x423dc0.JHMLG = function (_0x2fbf77, _0x23f44a) {
    return _0x2fbf77 < _0x23f44a;
  };
  _0x423dc0.MGjsa = function (_0x4e38f0, _0x549a8b, _0xa90937) {
    return _0x4e38f0(_0x549a8b, _0xa90937);
  };
  _0x423dc0.JSTvd = "账号失效！请重新登录！！！😭";
  _0x423dc0.bzEnP = function (_0x46796b, _0x252473, _0xff28ba, _0x59e230) {
    return _0x46796b(_0x252473, _0xff28ba, _0x59e230);
  };
  _0x423dc0.HNkxF = "******开始【饿了么账号";
  _0x423dc0.VRYNz = function (_0x15cf49, _0x4365cf) {
    return _0x15cf49 + _0x4365cf;
  };
  _0x423dc0.ggHJE = "*********";
  _0x423dc0.lQGLS = function (_0x500098, _0x5bbddb) {
    return _0x500098(_0x5bbddb);
  };
  _0x423dc0.CELln = function (_0x3fc466, _0x1a21f9) {
    return _0x3fc466(_0x1a21f9);
  };
  _0x423dc0.AsRlD = function (_0x392d59, _0x476cba) {
    return _0x392d59(_0x476cba);
  };
  _0x423dc0.xQbiF = function (_0x3f5fa1, _0xb0ae05, _0x10b964) {
    return _0x3f5fa1(_0xb0ae05, _0x10b964);
  };
  _0x423dc0.FeSua = function (_0xff8a5a, _0x2d19dd) {
    return _0xff8a5a(_0x2d19dd);
  };
  _0x423dc0.uWjNw = "防止黑号延时5-10秒";
  _0x423dc0.cISRd = function (_0x544eab, _0x2d9339) {
    return _0x544eab(_0x2d9339);
  };
  const _0x4bb99f = _0x423dc0;
  const _0x2779c8 = function () {
    const _0x3e6c51 = {};
    _0x3e6c51.DavZU = function (_0x138a86, _0x431077) {
      return _0x4bb99f.nfNpp(_0x138a86, _0x431077);
    };
    _0x3e6c51.WJJUP = _0x4bb99f.MobXF;
    _0x3e6c51.aUaMX = _0x4bb99f.eGWTi;
    _0x3e6c51.lwQkz = _0x4bb99f.dfjEG;
    _0x3e6c51.igsBD = function (_0x240594, _0x50cd0d) {
      return _0x4bb99f.NfmQe(_0x240594, _0x50cd0d);
    };
    _0x3e6c51.EEmIz = function (_0x43c882, _0x249c77) {
      return _0x4bb99f.aQqrS(_0x43c882, _0x249c77);
    };
    _0x3e6c51.JQmEc = _0x4bb99f.ldHbL;
    const _0x33c135 = _0x3e6c51;
    if (_0x4bb99f.NfmQe(_0x4bb99f.AboRE, _0x4bb99f.dnusy)) {
      passNum.push(value.passNum);
    } else {
      let _0x45a2a4 = true;
      return function (_0x466faf, _0x478b5a) {
        const _0x3e404a = {};
        _0x3e404a.rlhCf = function (_0x1dc4ce, _0x13b9c5) {
          return _0x33c135.igsBD(_0x1dc4ce, _0x13b9c5);
        };
        const _0x5774af = _0x3e404a;
        if (_0x33c135.EEmIz(_0x33c135.JQmEc, _0x33c135.JQmEc)) {
          return _0x5774af.rlhCf(Object.values(obj).length, 0);
        } else {
          const _0x3fb0b9 = _0x45a2a4 ? function () {
            if (_0x33c135.DavZU(_0x33c135.WJJUP, _0x33c135.aUaMX)) {
              if (_0x478b5a) {
                if (_0x33c135.DavZU(_0x33c135.lwQkz, _0x33c135.lwQkz)) {
                  const _0x5573ce = _0x45a2a4 ? function () {
                    if (_0x478b5a) {
                      const _0x126ec7 = _0x478b5a.apply(_0x466faf, arguments);
                      _0x478b5a = null;
                      return _0x126ec7;
                    }
                  } : function () {};
                  _0x45a2a4 = false;
                  return _0x5573ce;
                } else {
                  const _0x45ee4b = _0x478b5a.apply(_0x466faf, arguments);
                  _0x478b5a = null;
                  return _0x45ee4b;
                }
              }
            } else {
              return true;
            }
          } : function () {};
          _0x45a2a4 = false;
          return _0x3fb0b9;
        }
      };
    }
  }();
  const _0x23af4a = _0x4bb99f.jXJjk(_0x2779c8, this, function () {
    const _0x126dcd = {};
    _0x126dcd.MOyfR = _0x4bb99f.DKlFj;
    _0x126dcd.jRWOJ = _0x4bb99f.vyElE;
    _0x126dcd.PZYEg = function (_0x4650c6, _0x3a1ac8) {
      return _0x4bb99f.GmeNs(_0x4650c6, _0x3a1ac8);
    };
    _0x126dcd.NcfbC = function (_0x47fd7d, _0x108f55) {
      return _0x4bb99f.NfmQe(_0x47fd7d, _0x108f55);
    };
    _0x126dcd.BPRqG = _0x4bb99f.FoyzR;
    _0x126dcd.sJjVq = _0x4bb99f.YRkJH;
    _0x126dcd.SimBW = _0x4bb99f.hRnHo;
    _0x126dcd.QHqdN = _0x4bb99f.frBtQ;
    const _0x171eb2 = _0x126dcd;
    if (_0x4bb99f.XpZxd(_0x4bb99f.xDrBh, _0x4bb99f.BnkcW)) {
      console.log(_0x171eb2.MOyfR);
    } else {
      const _0x193a9c = function () {
        if (_0x171eb2.NcfbC(_0x171eb2.BPRqG, _0x171eb2.sJjVq)) {
          const _0x46b98d = JSON.parse(body);
          if (_0x46b98d.data.errorMsg) {
            console.log(_0x46b98d.data.errorMsg);
          } else {
            console.log(_0x171eb2.jRWOJ);
          }
          _0x171eb2.PZYEg(resolve, _0x46b98d);
        } else {
          const _0x374194 = _0x193a9c.constructor(_0x171eb2.SimBW)().compile(_0x171eb2.QHqdN);
          return !_0x374194.test(_0x23af4a);
        }
      };
      return _0x4bb99f.OVIaT(_0x193a9c);
    }
  });
  _0x4bb99f.MzneI(_0x23af4a);
  const _0x5b6d60 = function () {
    if (_0x4bb99f.EiEdp(_0x4bb99f.Sqjqp, _0x4bb99f.XOaIr)) {
      let _0x312b1e = true;
      return function (_0x92e7b7, _0x508305) {
        const _0x3139ca = {};
        _0x3139ca.tUXbm = function (_0x553fa9, _0x616c85) {
          return _0x4bb99f.Jpaue(_0x553fa9, _0x616c85);
        };
        _0x3139ca.rAyvf = function (_0x1fa739, _0x2db437) {
          return _0x4bb99f.AbTiN(_0x1fa739, _0x2db437);
        };
        _0x3139ca.PZztS = function (_0x18482f, _0x3e70e5) {
          return _0x4bb99f.XTXjK(_0x18482f, _0x3e70e5);
        };
        _0x3139ca.dhSCS = _0x4bb99f.lMVAV;
        _0x3139ca.kfyxq = function (_0x4e7f00, _0x3a885e) {
          return _0x4bb99f.SzgYK(_0x4e7f00, _0x3a885e);
        };
        _0x3139ca.hSZgN = _0x4bb99f.LAhcz;
        _0x3139ca.BOxch = _0x4bb99f.bcSRN;
        const _0x3bf0bb = _0x3139ca;
        if (_0x4bb99f.EiEdp(_0x4bb99f.NRris, _0x4bb99f.NRris)) {
          const _0x95241c = _0x312b1e ? function () {
            if (_0x508305) {
              const _0x9c5574 = _0x508305.apply(_0x92e7b7, arguments);
              _0x508305 = null;
              return _0x9c5574;
            }
          } : function () {};
          _0x312b1e = false;
          return _0x95241c;
        } else {
          const _0x52597e = _0x312b1e ? function () {
            const _0x299b29 = {};
            _0x299b29.pFeTH = function (_0x2a512b, _0x3de566) {
              return _0x3bf0bb.rAyvf(_0x2a512b, _0x3de566);
            };
            const _0x1a42af = _0x299b29;
            if (_0x3bf0bb.PZztS(_0x3bf0bb.dhSCS, _0x3bf0bb.dhSCS)) {
              if (_0x508305) {
                if (_0x3bf0bb.kfyxq(_0x3bf0bb.hSZgN, _0x3bf0bb.BOxch)) {
                  const _0x49363f = _0x508305.apply(_0x92e7b7, arguments);
                  _0x508305 = null;
                  return _0x49363f;
                } else {
                  let _0x5bc676 = req.data.data.sendRightList[0];
                  const _0x42d064 = _0x1a42af.pFeTH(_0x5bc676.materialInfo.description, _0x5bc676.materialInfo.title);
                  console.log(_0x42d064);
                }
              }
            } else {
              _0x3bf0bb.tUXbm(resolve, null);
            }
          } : function () {};
          _0x312b1e = false;
          return _0x52597e;
        }
      };
    } else {
      _0x4bb99f.OVIaT(mMWhM);
    }
  }();
  (function () {
    const _0x2f27d8 = {};
    _0x2f27d8.ZyjVu = _0x4bb99f.PxJAG;
    _0x2f27d8.iERIU = _0x4bb99f.gIrCO;
    _0x2f27d8.vbvYw = function (_0x1fe805, _0x2ffbbe) {
      return _0x4bb99f.rCmca(_0x1fe805, _0x2ffbbe);
    };
    _0x2f27d8.hJSTQ = _0x4bb99f.gOwXJ;
    _0x2f27d8.WsNrA = function (_0x20fb61, _0x196666) {
      return _0x4bb99f.AbTiN(_0x20fb61, _0x196666);
    };
    _0x2f27d8.FXQkc = _0x4bb99f.yttGw;
    _0x2f27d8.MxsbG = function (_0x118bdd, _0x26923c) {
      return _0x4bb99f.wHKIq(_0x118bdd, _0x26923c);
    };
    _0x2f27d8.uOzNi = _0x4bb99f.AWWix;
    _0x2f27d8.NwyEc = function (_0x571c59) {
      return _0x4bb99f.OVIaT(_0x571c59);
    };
    _0x2f27d8.fjNLB = function (_0x4df16a, _0x10192d, _0x36c487) {
      return _0x4bb99f.Tycih(_0x4df16a, _0x10192d, _0x36c487);
    };
    _0x2f27d8.lKPbs = function (_0xf34ffe, _0x5c62fd) {
      return _0x4bb99f.XTXjK(_0xf34ffe, _0x5c62fd);
    };
    _0x2f27d8.kMuBs = _0x4bb99f.iJibw;
    _0x2f27d8.kDxfH = _0x4bb99f.lpvcR;
    _0x2f27d8.Onspv = function (_0x37e148, _0x478b50) {
      return _0x4bb99f.wHKIq(_0x37e148, _0x478b50);
    };
    _0x2f27d8.fTkJJ = function (_0x547ccc, _0x377bbd) {
      return _0x4bb99f.jaUcX(_0x547ccc, _0x377bbd);
    };
    _0x2f27d8.UJWPm = _0x4bb99f.gjmFC;
    _0x2f27d8.MnnXU = _0x4bb99f.oPvNT;
    _0x2f27d8.QXgGp = function (_0x3bfbe1, _0x2e40ff) {
      return _0x4bb99f.FaPHM(_0x3bfbe1, _0x2e40ff);
    };
    _0x2f27d8.zcQpJ = function (_0x3cd8ea, _0x5f51a8) {
      return _0x4bb99f.jaUcX(_0x3cd8ea, _0x5f51a8);
    };
    _0x2f27d8.wXxWJ = _0x4bb99f.lCryr;
    _0x2f27d8.ZsLNb = function (_0x4247a0) {
      return _0x4bb99f.OVIaT(_0x4247a0);
    };
    const _0x4a0cf9 = _0x2f27d8;
    _0x4bb99f.lTYDf(_0x5b6d60, this, function () {
      const _0x4d0447 = {};
      _0x4d0447.csSJz = _0x4a0cf9.ZyjVu;
      _0x4d0447.iIGSV = _0x4a0cf9.iERIU;
      _0x4d0447.lIEtl = function (_0x9e939b, _0x2842bf) {
        return _0x4a0cf9.vbvYw(_0x9e939b, _0x2842bf);
      };
      _0x4d0447.LFjwH = _0x4a0cf9.hJSTQ;
      _0x4d0447.JkSHo = function (_0x200ad5, _0xec18c3) {
        return _0x4a0cf9.WsNrA(_0x200ad5, _0xec18c3);
      };
      _0x4d0447.FudOr = _0x4a0cf9.FXQkc;
      _0x4d0447.dCWib = function (_0x2c0f91, _0x12f1cc) {
        return _0x4a0cf9.MxsbG(_0x2c0f91, _0x12f1cc);
      };
      _0x4d0447.kweCH = _0x4a0cf9.uOzNi;
      _0x4d0447.XhoXZ = function (_0x272662) {
        return _0x4a0cf9.NwyEc(_0x272662);
      };
      _0x4d0447.ySAuk = function (_0x2c02df, _0x2ab94f, _0x377644) {
        return _0x4a0cf9.fjNLB(_0x2c02df, _0x2ab94f, _0x377644);
      };
      const _0xa09646 = _0x4d0447;
      if (_0x4a0cf9.lKPbs(_0x4a0cf9.kMuBs, _0x4a0cf9.kDxfH)) {
        return debuggerProtection;
      } else {
        const _0x14e2bd = new RegExp(_0x4a0cf9.ZyjVu);
        const _0x456a84 = new RegExp(_0x4a0cf9.iERIU, "i");
        const _0x2c2d88 = _0x4a0cf9.vbvYw(mMWhM, _0x4a0cf9.hJSTQ);
        if (!_0x14e2bd.test(_0x4a0cf9.Onspv(_0x2c2d88, _0x4a0cf9.FXQkc)) || !_0x456a84.test(_0x4a0cf9.Onspv(_0x2c2d88, _0x4a0cf9.uOzNi))) {
          if (_0x4a0cf9.fTkJJ(_0x4a0cf9.UJWPm, _0x4a0cf9.MnnXU)) {
            _0xa09646.ySAuk(_0x5b6d60, this, function () {
              const _0x2ff123 = new RegExp(_0xa09646.csSJz);
              const _0x307641 = new RegExp(_0xa09646.iIGSV, "i");
              const _0x4cba9f = _0xa09646.lIEtl(mMWhM, _0xa09646.LFjwH);
              if (!_0x2ff123.test(_0xa09646.JkSHo(_0x4cba9f, _0xa09646.FudOr)) || !_0x307641.test(_0xa09646.dCWib(_0x4cba9f, _0xa09646.kweCH))) {
                _0xa09646.lIEtl(_0x4cba9f, "0");
              } else {
                _0xa09646.XhoXZ(mMWhM);
              }
            })();
          } else {
            _0x4a0cf9.QXgGp(_0x2c2d88, "0");
          }
        } else {
          if (_0x4a0cf9.zcQpJ(_0x4a0cf9.wXxWJ, _0x4a0cf9.wXxWJ)) {
            _0x4a0cf9.ZsLNb(mMWhM);
          } else {
            if (fn) {
              const _0x264d5d = fn.apply(context, arguments);
              fn = null;
              return _0x264d5d;
            }
          }
        }
      }
    })();
  })();
  await _0x4bb99f.jXJjk(validateCarmeWithType, kami, 1);
  const _0x2f100c = _0x4bb99f.MzneI(getCookies);
  for (let _0x28bb82 = 0; _0x4bb99f.JHMLG(_0x28bb82, _0x2f100c.length); _0x28bb82++) {
    const _0x10e68c = _0x2f100c[_0x28bb82];
    if (!_0x10e68c) {
      console.log(_0x4bb99f.DKlFj);
    } else {
      try {
        let _0x3b7f88 = await _0x4bb99f.MGjsa(checkCk, _0x10e68c, _0x28bb82);
        if (!_0x3b7f88) {
          continue;
        }
        let _0x2d55f7 = await _0x4bb99f.FaPHM(getUserInfo, _0x3b7f88);
        if (!_0x2d55f7.username) {
          console.log("第", _0x4bb99f.wHKIq(_0x28bb82, 1), _0x4bb99f.JSTvd);
          continue;
        }
        const _0x5cb41f = _0x2d55f7.user_id;
        await _0x4bb99f.bzEnP(checkCarmeCount, kami, _0x5cb41f, GAME_TYEP);
        console.log(_0x4bb99f.HNkxF, _0x4bb99f.VRYNz(_0x28bb82, 1), "】", _0x2d55f7.username, _0x4bb99f.ggHJE);
        await _0x4bb99f.lQGLS(lyb_sign, _0x3b7f88);
        await _0x4bb99f.CELln(lottery, _0x3b7f88);
        const _0x18829a = await _0x4bb99f.AsRlD(lyb_llk_token, _0x3b7f88);
        await _0x4bb99f.xQbiF(llk_game, _0x3b7f88, _0x18829a);
        await _0x4bb99f.FeSua(water_game, _0x3b7f88);
        console.log(_0x4bb99f.uWjNw);
        await _0x4bb99f.cISRd(wait, _0x4bb99f.xQbiF(getRandom, 5, 10));
      } catch (_0x2a2515) {
        console.log(_0x2a2515);
      }
    }
  }
  process.exit(0);
}
start();
function getRandom(_0x452fcd, _0x5adc25) {
  const _0x1557a8 = {};
  _0x1557a8.syXGF = function (_0x276801, _0x15c51e) {
    return _0x276801 + _0x15c51e;
  };
  _0x1557a8.IpcYB = function (_0x3e6ec1, _0x502e00) {
    return _0x3e6ec1 * _0x502e00;
  };
  _0x1557a8.dlWzZ = function (_0x43b8f2, _0x2bbf54) {
    return _0x43b8f2 - _0x2bbf54;
  };
  const _0x51f07b = _0x1557a8;
  return Math.floor(_0x51f07b.syXGF(_0x51f07b.IpcYB(Math.random(), _0x51f07b.syXGF(_0x51f07b.dlWzZ(_0x5adc25, _0x452fcd), 1)), _0x452fcd));
}
function mMWhM(_0x5dc5c4) {
  const _0xdd1821 = {};
  _0xdd1821.aiakF = function (_0x10785b, _0x1b4866) {
    return _0x10785b === _0x1b4866;
  };
  _0xdd1821.kzAOD = "string";
  _0xdd1821.WhxoH = "while (true) {}";
  _0xdd1821.axDSk = "counter";
  _0xdd1821.MOZUu = function (_0x5a3d30, _0x363f5) {
    return _0x5a3d30 !== _0x363f5;
  };
  _0xdd1821.daCwN = function (_0xcd5aca, _0x549553) {
    return _0xcd5aca + _0x549553;
  };
  _0xdd1821.hmLII = function (_0x59143a, _0x5a0288) {
    return _0x59143a / _0x5a0288;
  };
  _0xdd1821.jMJfj = "length";
  _0xdd1821.nhoUa = function (_0x30bed0, _0x547f96) {
    return _0x30bed0 % _0x547f96;
  };
  _0xdd1821.QEOTK = "debu";
  _0xdd1821.GmGTs = "gger";
  _0xdd1821.QMGjU = "action";
  _0xdd1821.GluPR = function (_0x34cb4c, _0x877d12) {
    return _0x34cb4c + _0x877d12;
  };
  _0xdd1821.MEAyB = "stateObject";
  _0xdd1821.ApDXm = function (_0x4cc2fe, _0x154810) {
    return _0x4cc2fe(_0x154810);
  };
  const _0x4f3285 = _0xdd1821;
  function _0x248e00(_0x4c92d0) {
    if (_0x4f3285.aiakF(typeof _0x4c92d0, _0x4f3285.kzAOD)) {
      return function (_0x4805ce) {}.constructor(_0x4f3285.WhxoH).apply(_0x4f3285.axDSk);
    } else {
      if (_0x4f3285.MOZUu(_0x4f3285.daCwN("", _0x4f3285.hmLII(_0x4c92d0, _0x4c92d0))[_0x4f3285.jMJfj], 1) || _0x4f3285.aiakF(_0x4f3285.nhoUa(_0x4c92d0, 20), 0)) {
        (function () {
          return true;
        }).constructor(_0x4f3285.daCwN(_0x4f3285.QEOTK, _0x4f3285.GmGTs)).call(_0x4f3285.QMGjU);
      } else {
        (function () {
          return false;
        }).constructor(_0x4f3285.GluPR(_0x4f3285.QEOTK, _0x4f3285.GmGTs)).apply(_0x4f3285.MEAyB);
      }
    }
    _0x4f3285.ApDXm(_0x248e00, ++_0x4c92d0);
  }
  try {
    if (_0x5dc5c4) {
      return _0x248e00;
    } else {
      _0x4f3285.ApDXm(_0x248e00, 0);
    }
  } catch (_0x555f5b) {}
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else if (this.isQuanX()) {
        t.method = "POST";
        this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        }));
        $task.fetch(t).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => e(t));
      } else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}