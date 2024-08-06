(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8624], {
        62601: function(e, t, r) {
            "use strict";
            var a, s;
            e.exports = (null == (a = r.g.process) ? void 0 : a.env) && "object" == typeof(null == (s = r.g.process) ? void 0 : s.env) ? r.g.process : r(58960)
        },
        58624: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = r(57437),
                s = r(2265),
                n = r(89817),
                c = r(24930),
                o = r.n(c),
                h = r(62601);
            let i = o()(() => r.e(4882).then(r.bind(r, 34882)), {
                    loadableGenerated: {
                        webpack: () => [34882]
                    },
                    loading: () => (0, a.jsx)("p", {
                        children: "loading"
                    })
                }),
                u = o()(() => Promise.all([r.e(4606), r.e(1376)]).then(r.bind(r, 1376)), {
                    loadableGenerated: {
                        webpack: () => [1376]
                    },
                    loading: () => (0, a.jsx)("p", {
                        children: "loading"
                    })
                });
            t.default = () => {
                let {
                    GetCallSetting: e,
                    FetchWebCheckout: t,
                    callDetail: r,
                    sc: c
                } = (0, n.useGlobalContext)(), [o, f] = (0, s.useState)({
                    api: "",
                    key: ""
                });
                return (0, s.useEffect)(() => {
                    ! function() {
                        switch (localStorage.getItem("PATH_KEY")) {
                            case "/":
                            default:
                                return f({
                                    api: "https://horsefirereal.com",
                                    key: "FRpFWKZVZKCbjKXDDaxOsnulOhQJoFhcyjCyGJkokZbziYUxAJ"
                                });
                            case "/hfo":
                                return f({
                                    api: h.env.NEXT_APP_URL_HFO,
                                    key: h.env.NEXT_APP_API_KEY_HFO
                                });
                            case "/hfu":
                                return f({
                                    api: h.env.NEXT_APP_URL_HFU,
                                    key: h.env.NEXT_APP_API_KEY_HFU
                                });
                            case "/hfd":
                                return f({
                                    api: h.env.NEXT_APP_URL_HFD,
                                    key: h.env.NEXT_APP_API_KEY_HFD
                                });
                            case "/hflip":
                            case "/hflip":
                                return f({
                                    api: "https://horsefirereal.com/hflip",
                                    key: "WSlfTqQTftTnvRbjIYjPlHbKZiTErmEcdvZyRgkjFLeLrMxJBL"
                                });
                            case "/hfq":
                                return f({
                                    api: h.env.NEXT_APP_URL_HFQ,
                                    key: h.env.NEXT_APP_API_KEY_HFQ
                                });
                            case "/hfkrt":
                            case "/hfkrt":
                                return f({
                                    api: "https://horsefirereal.com/hfkrt",
                                    key: "VrMegQpOigjSUokiExDxfJQcdJqprurfJruyPDDAzSqJVakrLI"
                                });
                            case "/hfkt":
                                return f({
                                    api: h.env.NEXT_APP_URL_HFKT,
                                    key: h.env.NEXT_APP_API_KEY_HFKT
                                });
                            case "/hfkart":
                            case "/hfkart":
                                return f({
                                    api: "https://horsefirereal.com/hfkart",
                                    key: "kSBGIGKEXMRTkgGAxjmWXEQJrFNEcEqLBOVVQhAesDSWqxMWBO"
                                });
                            case "/hkart":
                                return f({
                                    api: h.env.NEXT_APP_URL_HKART,
                                    key: h.env.NEXT_APP_API_KEY_HKART
                                });
                            case "/hfb":
                                return f({
                                    api: h.env.NEXT_APP_URL_HFB,
                                    key: h.env.NEXT_APP_API_KEY_HFB
                                });
                            case "/hfs":
                                return f({
                                    api: h.env.NEXT_APP_URL_HFS,
                                    key: h.env.NEXT_APP_API_KEY_HFS
                                });
                            case "/ahf":
                                return f({
                                    api: "https://horsefirereal.com/ahf",
                                    key: "iuOKTWEIZMXSpsbkeuNzJZHHmYvOSNjjYZQNQpjTvsszQwShsN"
                                });
                            case "/ahfkt":
                                return f({
                                    api: "https://horsefirereal.com/ahfkt",
                                    key: "ZdZOuySMWVioHTxNjFfdVNJRxydPMJbCQbfnQyMOUtcjTwXimp"
                                });
                            case "/bhf":
                                return f({
                                    api: "https://horsefirereal.com/bhf",
                                    key: "hzneKHBjqbAoiybFfClFswgbDlEoHjosXthdFcREjObsNvxmge"
                                });
                            case "/bhfkt":
                                return f({
                                    api: "https://horsefirereal.com/bhfkt",
                                    key: "qpyFnbuDVmkaAsFfKZaxmDqGBRMaqoroMHEnSRHXWwnucCEapk"
                                });
                            case "/hfn":
                                return f({
                                    api: "https://horsefirereal.com/hfn",
                                    key: "wgXvWegpLYTujLKHoiMDrSHTqSPDwUvNYxbMpflJdBZXivEIBo"
                                });
                            case "/hfh":
                                return f({
                                    api: "https://horsefirereal.com/hfh",
                                    key: "eJSasjdhYwkVcRrurxOChdKRZqKigdRTJShSUhjPzpmqoHANUY"
                                });
                            case "/hft":
                                return f({
                                    api: "https://horsefirereal.com/hft",
                                    key: "scjrBRCPeqQxDLNANIBaKVscqSNcQQonZpgggxVtiPyPAINTOr"
                                });
                            case "/hfy":
                                return f({
                                    api: "https://horsefirereal.com/hfy",
                                    key: "NUTGdxMakQiXRBbMUKIENVVbnHgEaCoICPhyrQKVBApajBCCtI"
                                });
                            case "/hfa":
                                return f({
                                    api: "https://horsefirereal.com/hfa",
                                    key: "xjXBRIXSiNGvDYmnWfOULYiJRYisFaTPDTotcKqpMfZVXzLSCv"
                                });
                            case "/hfp":
                            case "/hfp":
                                return f({
                                    api: "https://horsefirereal.com/hfp",
                                    key: "WvaCygkuSaRXhKiJTzNmfxclwNkzPBQHQPQEiMkmRBnCTDIKiZ"
                                });
                            case "/hfv":
                                return f({
                                    api: "https://horsefirereal.com/hfv",
                                    key: "byYyhCSRQKmyLXlsgsDcpElYQzyLsitXkJNDJQRokFScioGWTc"
                                });
                            case "/hfw":
                                return f({
                                    api: "https://horsefirereal.com/hfw",
                                    key: "quBWZviaPqaRXAUrrQygIplXOqECaAxDpBBBuGQCmVNZuOznXW"
                                });
                            case "/hfx":
                                return f({
                                    api: "https://horsefirereal.com/hfx",
                                    key: "MZKDxtxDKRNSQlABknAGFOcKmsaIdrgdrMJmEkFgIwuhuHNbqb"
                                });
                            case "/hfm":
                                return f({
                                    api: "https://horsefirereal.com/hfm",
                                    key: "pCVKEWUnblFGoLQVQaSnGsoyaifVzRwgVyASOMtUcvZiZbjxMq"
                                });
                            case "/cjhf":
                                return f({
                                    api: "https://horsefirereal.com/cjhf",
                                    key: "JaullQIhWmliahxQmwWiZDDPlFLfyZaTZHivMjXCKUcltRpAoP"
                                });
                            case "/hfsnh":
                                return f({
                                    api: "https://horsefirereal.com/hfsnh",
                                    key: "NwEHKNFnlstUGncFvLjetWGuozAAIgQeHfuEhzAgGbeIMKCIzH"
                                });
                            case "/hftbet":
                                return f({
                                    api: "https://horsefirereal.com/hftbet",
                                    key: "TqhyuNqDPzaIOpnoyVNxKLdRjtMXXPHtHRMvYTlRuseDpPpwIQ"
                                });
                            case "/hftdelta":
                                return f({
                                    api: "https://horsefirereal.com/hftdelta",
                                    key: "ugXcBUjpCoxPNWoyhWIQrNokTWCPTrxsZcpaVJIeZCpPbCdxlo"
                                });
                            case "/hft36sin":
                                return f({
                                    api: "https://horsefirereal.com/hft36sin",
                                    key: "GvQcooHjIXynfzytLvzJybkgUbEQkEqTiZxUbxkjobGvJXMtJd"
                                });
                            case "/hft71e":
                                return f({
                                    api: "https://horsefirereal.com/hft71e",
                                    key: "yRHxNktdnLWIlQxzDxcAaRRNRmmiGQMStRCChkhlXymYJmFeLd"
                                });
                            case "/hfncw":
                                return f({
                                    api: "https://horsefirereal.com/hfncw",
                                    key: "bHdkACZXAYcxjdJzuMnTUBCLTvmfnGsmTYcJtaRXeHuwgKiRll"
                                });
                            case "/hfncf":
                                return f({
                                    api: "https://horsefirereal.com/hfncf",
                                    key: "XhLBrvBxfTKBZVsMAlUQJAlXjylahXNgxGFkkpOQmWPOJfeGzQ"
                                });
                            case "/hftsx":
                                return f({
                                    api: "https://horsefirereal.com/hftsx",
                                    key: "EniEQjnWTHFXSQsLoscwKIJGmxhCktlpXUvtjbKcxeBCUSCZmi"
                                });
                            case "/hfrush":
                                return f({
                                    api: "https://horsefirereal.com/hfrush",
                                    key: "JksIUBEKTiJdAaEKEvzIBxSLXNSNmKHJWnyWuRPNzuSmuSVaTS"
                                });
                            case "/hfstar":
                                return f({
                                    api: "https://horsefirereal.com/hfstar",
                                    key: "daKuOPpGxcqFxqbqZEkHJUcJzycCuQunrJlxIUfaSbmvFZuqEU"
                                });
                            case "/hfjsx":
                                return f({
                                    api: "https://horsefirereal.com/hfjsx",
                                    key: "uniKhkNSZBVazcoAFQRoAXrEZhpifBRcxzrVelSAuXCBkUPxXH"
                                });
                            case "/hfbulge":
                                return f({
                                    api: "https://horsefirereal.com/hfbulge",
                                    key: "KJteXtOyCbcJqaIrWEBqYUAnsqhtAGOKGLlvdAvIFItaEPUiCf"
                                });
                            case "/hft143":
                                return f({
                                    api: "https://horsefirereal.com/hft143",
                                    key: "SYKrZdzGFvoXITnpbhLWkyNCgQqGTnXwCRRzPELkWwWKxCiMVG"
                                });
                            case "/hftreal":
                                return f({
                                    api: "https://horsefirereal.com/hftreal",
                                    key: "dbBkEPENLCMzxkcHsyfJdrXTFatfoCbrlXrtuVONiFrdKKGHkA"
                                });
                            case "/hftlh6":
                                return f({
                                    api: "https://horsefirereal.com/hftlh6",
                                    key: "SMznZUtNFKzqAhofAGYfJkWjKMHbaliBwLAxRHtClCEpwrMNCM"
                                });
                            case "/hftcu469":
                                return f({
                                    api: "https://horsefirereal.com/hftcu469",
                                    key: "fjvLACinVdcPjmRSDSjxpwZLytfAXIGWvAMUkjUeRCorXSEyZv"
                                });
                            case "/hftoral69":
                                return f({
                                    api: "https://horsefirereal.com/hftoral69",
                                    key: "JCvcPYokPRUFxQLgiKpjcFgIZPBNAAuwYHCPnOiSdaaMZsumCq"
                                });
                            case "/hfrx":
                                return f({
                                    api: "https://horsefirereal.com/hfrx",
                                    key: "dQuWaFUCgXjAwDCynkhvsGMlDkkLaXMNFRMaFRRpAbVhiVqRHY"
                                });
                            case "/hftrci":
                                return f({
                                    api: "https://horsefirereal.com/hftrci",
                                    key: "ZygJUHjfIciLcmxGUYLWvSLAoYNfKJLgZetKkxJRtDnfpAEPOz"
                                })
                        }
                    }()
                }, []), (0, s.useMemo)(() => {
                    o.api && o.key && (e(o.key), t(o.key, o.api))
                }, [o]), (0, a.jsx)("div", {
                    className: "w-full block sm:hidden ".concat(c > 50 ? "tt" : "xx", " fixed z-[10000] text-white"),
                    children: r.callStatus ? (0, a.jsx)(i, {}) : (0, a.jsx)(u, {})
                })
            }
        },
        89817: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GlobalContextProvider: function() {
                    return o
                },
                useGlobalContext: function() {
                    return h
                }
            });
            var a = r(57437),
                s = r(92173),
                n = r(2265);
            let c = (0, n.createContext)(),
                o = e => {
                    let {
                        children: t
                    } = e, [r, o] = (0, n.useState)(), [h, i] = (0, n.useState)([]), [u, f] = (0, n.useState)({
                        name: "",
                        phone: "",
                        email: "",
                        pincode: "",
                        city: "",
                        state: "",
                        address: "",
                        online: !0
                    }), [l, p] = (0, n.useState)({
                        name: "",
                        phone: "",
                        email: "",
                        pincode: "",
                        city: "",
                        state: "",
                        address: ""
                    }), [k, y] = (0, n.useState)({
                        name: "",
                        phone: "",
                        address: ""
                    }), [m, d] = (0, n.useState)({
                        callStatus: !1,
                        phoneNumber: 9099611212
                    }), [v, x] = (0, n.useState)(!1), [P, E] = (0, n.useState)({
                        checkoutChecked: !1,
                        checkoutUrl: "/checkouts"
                    }), _ = async (e, t) => {
                        try {
                            let r = await s.Z.get("".concat("https://api.brahmikalp.com/api/", "website/fetch_with_api_key?api_key=").concat(e), {
                                headers: {
                                    web_site_url: t
                                }
                            });
                            200 === r.status && E({ ...P,
                                checkoutChecked: !!r.data.website[0].checkout_toggle
                            });
                            return
                        } catch (e) {
                            return
                        }
                    };
                    (0, n.useMemo)(() => E({ ...P,
                        checkoutUrl: P.checkoutChecked ? "https://www.arayurveda.com/products/horse-fire-tablets" : "/checkout"
                    }), [P.checkoutChecked, P.checkoutUrl]);
                    let [b, T] = (0, n.useState)(0);
                    (0, n.useEffect)(() => {
                        let e = () => {
                            T(window.scrollY)
                        };
                        return window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }, []);
                    let A = async (e, t, r) => {
                            let a = await fetch("https://api.brahmikalp.com/api/product/fetch_with_api_key?api_key=" + t, {
                                headers: {
                                    web_site_url: r
                                }
                            });
                            if (!a.ok) throw Error("Interal Server Error Please Try out After some Time");
                            return i((await a.json()).product.reverse())
                        },
                        S = async e => {
                            try {
                                let t = await fetch("https://api.brahmikalp.com/api/call-setting/api_key?api_key=".concat(e), {
                                    method: "GET",
                                    redirect: "follow"
                                }).then(e => e.json()).then(e => e).catch(e => e);
                                t.massage = "success", d({
                                    callStatus: !!t.all_call[0].call_status,
                                    phoneNumber: t.all_call[0].phonenumber
                                });
                                return
                            } catch (e) {
                                return
                            }
                        },
                        [N, w] = (0, n.useState)(!1),
                        [X, g] = (0, n.useState)(3600);
                    (0, n.useEffect)(() => {
                        let e = setInterval(() => {
                            g(e => e - 1)
                        }, 1e3);
                        return () => clearInterval(e)
                    }, []);
                    let C = Math.floor(X / 3600).toString().padStart(2, "0"),
                        K = Math.floor(X % 3600 / 60).toString().padStart(2, "0"),
                        R = Math.floor(X % 60).toString().padStart(2, "0");
                    return (0, a.jsx)(c.Provider, {
                        value: {
                            envUrl: r,
                            setEnvUrl: o,
                            chng: l,
                            setchng: p,
                            ActiveProduct: u,
                            setActiveProduct: f,
                            FetchAllProductData: A,
                            AllProductData: h,
                            setAllProductData: i,
                            CustomerData: k,
                            setCustomerData: y,
                            GetCallSetting: S,
                            checkoutDetail: P,
                            setCheckoutDetail: E,
                            FetchWebCheckout: _,
                            callDetail: m,
                            setCallDetail: d,
                            loading: v,
                            setLoading: x,
                            sc: b,
                            hours: C,
                            minutes: K,
                            remainingSeconds: R,
                            isPopupOpen: N,
                            openPopup: () => {
                                w(!0)
                            },
                            closePopup: () => {
                                w(!1)
                            }
                        },
                        children: t
                    })
                },
                h = () => (0, n.useContext)(c)
        },
        58960: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, r, a, s = e.exports = {};

                            function n() {
                                throw Error("setTimeout has not been defined")
                            }

                            function c() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function o(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === n || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (r) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (r) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : n
                                } catch (e) {
                                    t = n
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : c
                                } catch (e) {
                                    r = c
                                }
                            }();
                            var h = [],
                                i = !1,
                                u = -1;

                            function f() {
                                i && a && (i = !1, a.length ? h = a.concat(h) : u = -1, h.length && l())
                            }

                            function l() {
                                if (!i) {
                                    var e = o(f);
                                    i = !0;
                                    for (var t = h.length; t;) {
                                        for (a = h, h = []; ++u < t;) a && a[u].run();
                                        u = -1, t = h.length
                                    }
                                    a = null, i = !1,
                                        function(e) {
                                            if (r === clearTimeout) return clearTimeout(e);
                                            if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                            try {
                                                r(e)
                                            } catch (t) {
                                                try {
                                                    return r.call(null, e)
                                                } catch (t) {
                                                    return r.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function p(e, t) {
                                this.fun = e, this.array = t
                            }

                            function k() {}
                            s.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                h.push(new p(e, t)), 1 !== h.length || i || o(l)
                            }, p.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = k, s.addListener = k, s.once = k, s.off = k, s.removeListener = k, s.removeAllListeners = k, s.emit = k, s.prependListener = k, s.prependOnceListener = k, s.listeners = function(e) {
                                return []
                            }, s.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, s.cwd = function() {
                                return "/"
                            }, s.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, s.umask = function() {
                                return 0
                            }
                        }
                    },
                    r = {};

                function a(e) {
                    var s = r[e];
                    if (void 0 !== s) return s.exports;
                    var n = r[e] = {
                            exports: {}
                        },
                        c = !0;
                    try {
                        t[e](n, n.exports, a), c = !1
                    } finally {
                        c && delete r[e]
                    }
                    return n.exports
                }
                a.ab = "//";
                var s = a(229);
                e.exports = s
            }()
        }
    }
]);