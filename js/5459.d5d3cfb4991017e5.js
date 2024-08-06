"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5459], {
        38829: function(e, t, a) {
            a.d(t, {
                f: function() {
                    return l
                },
                v: function() {
                    return o
                }
            });
            var n = a(35106),
                r = a.n(n);
            let l = [{
                icon: null,
                label: "नाम लिखिए",
                inputValue: {
                    type: "text",
                    name: "name"
                }
            }, {
                label: "फोन नंबर लिखिए",
                icon: "+91",
                inputValue: {
                    type: "text",
                    name: "phone",
                    maxLength: 10,
                    minLength: 10
                }
            }];
            class o {
                constructor() {}
            }
            o.JoiValidator = e => {
                let {
                    error: t,
                    value: a
                } = r().object({
                    name: r().string().trim().required(),
                    phone: r().string().regex(/^[6-9]\d{9}$/).required().messages({
                        "string.regex": "Please Fill Correct Value"
                    }),
                    address: r().string().optional().allow("")
                }).validate(e, {
                    allowUnknown: !1,
                    abortEarly: !0,
                    stripUnknown: !1
                });
                if (t) throw t.message;
                return a
            }
        },
        65459: function(e, t, a) {
            a.r(t);
            var n = a(57437),
                r = a(89817),
                l = a(38829),
                o = a(92173),
                s = a(24033),
                c = a(24930),
                i = a.n(c);
            let d = i()(() => a.e(1469).then(a.bind(a, 31469)), {
                    loadableGenerated: {
                        webpack: () => [31469]
                    },
                    loading: () => (0, n.jsx)("p", {
                        children: "load"
                    })
                }),
                u = i()(() => Promise.all([a.e(1678), a.e(2626)]).then(a.bind(a, 8588)), {
                    loadableGenerated: {
                        webpack: () => [8588]
                    },
                    loading: () => (0, n.jsx)("p", {
                        children: "loader"
                    })
                });
            t.default = () => {
                let e = (0, s.useSearchParams)(),
                    {
                        CustomerData: t,
                        setCustomerData: a,
                        checkoutDetail: c,
                        setLoading: i,
                        openPopup: p,
                        loading: h
                    } = (0, r.useGlobalContext)(),
                    m = async e => {
                        a({ ...t,
                            [e.target.name]: e.target.value
                        })
                    },
                    f = async a => {
                        a.preventDefault(), i(!0);
                        try {
                            var n, r;
                            let a = l.v.JoiValidator(t),
                                s = await o.Z.get("https://api.ipify.org?format=json").then(e => e.data.ip).catch(e => console.log(e)),
                                d = new FormData;
                            d.append("name", a.name), d.append("phone", a.phone), d.append("address", a.address), d.append("post", "Horsefirereal.com/HFT36SIN"), d.append("ip", s || ""), d.append("checkout_toogle", c.checkoutChecked), d.append("blog_url", (n = "https://horsefirereal.com/hft36sin", void 0 !== n) ? n : "horsefirereal.com/hft36sin");
                            let u = e.get("krt"),
                                p = e.get("krttracker");
                            p && d.append("conversions_tracking", p), u && d.append("conversions", u);
                            let h = e.get("hftevadev");
                            h && d.append("hftevadev", h);
                            try {
                                let e = await fetch("https://horsefirereal.com/submitdata.php", {
                                        body: d,
                                        method: "POST"
                                    }),
                                    t = await e.json(),
                                    a = null !== (r = t.blogWebId) && void 0 !== r ? r : null;
                                if (t.ok) {
                                    i(!1);
                                    let e = decodeURI(t.destination),
                                        n = e.split("?name=")[1].split("&")[0],
                                        r = e.split("&phone=")[1].split("&")[0];
                                    return window.location.href = "".concat(c.checkoutUrl, "?source=").concat(a, "&name=").concat(n, "&phone=").concat(r)
                                }
                                return i(!1), window.location.href = "".concat(c.checkoutUrl, "?source=").concat(a, "&name=&phone=")
                            } catch (e) {
                                return i(!1), window.location.href = c.checkoutUrl
                            }
                        } catch (e) {
                            return i(!1), alert(e)
                        }
                    };
                return (0, n.jsxs)("section", {
                    className: "w-full max-w-2xl mx-auto",
                    children: [h && (0, n.jsx)(u, {}), (0, n.jsxs)("div", {
                        className: "bg-black py-5 md:px-2",
                        id: "form",
                        children: [(0, n.jsx)("div", {
                            className: "text-center py-3",
                            children: (0, n.jsxs)("h1", {
                                className: "text-[1.5rem] md:text-4xl font-bold fontArya text-white",
                                children: ["कॉल पर विशेषज्ञ डॉक्टरों से", (0, n.jsx)("br", {}), " मुफ्त सलाह के लिए फॉर्म भरें!"]
                            })
                        }), (0, n.jsx)("div", {
                            className: "text-black ",
                            id: "formcallhide",
                            children: (0, n.jsx)("div", {
                                className: "bg-white max-w-2xl mx-4 md:mx-auto md:px-4 rounded-md",
                                children: (0, n.jsxs)("div", {
                                    className: "py-4",
                                    children: [(0, n.jsx)("div", {
                                        className: "text-center",
                                        children: (0, n.jsx)("h1", {
                                            className: " text-3xl md:text-4xl font-bold mb-5 inline-block py-2",
                                            children: " Contact Us "
                                        })
                                    }), (0, n.jsxs)("form", {
                                        className: "space-y-3 px-2",
                                        children: [null === l.f || void 0 === l.f ? void 0 : l.f.map((e, a) => (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("label", {
                                                className: "font-semibold text-left text-[0.9rem] py-1",
                                                children: e.label
                                            }), (0, n.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, n.jsx)("input", { ...e.inputValue,
                                                    className: "p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ".concat(e.icon ? "pl-[3.5rem]" : ""),
                                                    onChange: m,
                                                    value: t[e.inputValue.name]
                                                }), e.icon && (0, n.jsx)("span", {
                                                    className: "absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2",
                                                    children: e.icon
                                                })]
                                            })]
                                        }, a)), (0, n.jsx)("div", {
                                            className: "flex justify-center items-center pt-6 ",
                                            children: (0, n.jsx)("button", {
                                                onClick: f,
                                                type: "button",
                                                className: "text-2xl font-bold p-3 pt-3 md:w-72 w-full rounded-md bg-red-600 text-white",
                                                children: "SUBMIT"
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), (0, n.jsx)(d, {})]
                    })]
                })
            }
        },
        89817: function(e, t, a) {
            a.r(t), a.d(t, {
                GlobalContextProvider: function() {
                    return s
                },
                useGlobalContext: function() {
                    return c
                }
            });
            var n = a(57437),
                r = a(92173),
                l = a(2265);
            let o = (0, l.createContext)(),
                s = e => {
                    let {
                        children: t
                    } = e, [a, s] = (0, l.useState)(), [c, i] = (0, l.useState)([]), [d, u] = (0, l.useState)({
                        name: "",
                        phone: "",
                        email: "",
                        pincode: "",
                        city: "",
                        state: "",
                        address: "",
                        online: !0
                    }), [p, h] = (0, l.useState)({
                        name: "",
                        phone: "",
                        email: "",
                        pincode: "",
                        city: "",
                        state: "",
                        address: ""
                    }), [m, f] = (0, l.useState)({
                        name: "",
                        phone: "",
                        address: ""
                    }), [x, b] = (0, l.useState)({
                        callStatus: !1,
                        phoneNumber: 9099611212
                    }), [w, k] = (0, l.useState)(!1), [v, g] = (0, l.useState)({
                        checkoutChecked: !1,
                        checkoutUrl: "/checkouts"
                    }), y = async (e, t) => {
                        try {
                            let a = await r.Z.get("".concat("https://api.brahmikalp.com/api/", "website/fetch_with_api_key?api_key=").concat(e), {
                                headers: {
                                    web_site_url: t
                                }
                            });
                            200 === a.status && g({ ...v,
                                checkoutChecked: !!a.data.website[0].checkout_toggle
                            });
                            return
                        } catch (e) {
                            return
                        }
                    };
                    (0, l.useMemo)(() => g({ ...v,
                        checkoutUrl: v.checkoutChecked ? "https://www.arayurveda.com/products/horse-fire-tablets" : "/checkout"
                    }), [v.checkoutChecked, v.checkoutUrl]);
                    let [j, _] = (0, l.useState)(0);
                    (0, l.useEffect)(() => {
                        let e = () => {
                            _(window.scrollY)
                        };
                        return window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }, []);
                    let S = async (e, t, a) => {
                            let n = await fetch("https://api.brahmikalp.com/api/product/fetch_with_api_key?api_key=" + t, {
                                headers: {
                                    web_site_url: a
                                }
                            });
                            if (!n.ok) throw Error("Interal Server Error Please Try out After some Time");
                            return i((await n.json()).product.reverse())
                        },
                        N = async e => {
                            try {
                                let t = await fetch("https://api.brahmikalp.com/api/call-setting/api_key?api_key=".concat(e), {
                                    method: "GET",
                                    redirect: "follow"
                                }).then(e => e.json()).then(e => e).catch(e => e);
                                t.massage = "success", b({
                                    callStatus: !!t.all_call[0].call_status,
                                    phoneNumber: t.all_call[0].phonenumber
                                });
                                return
                            } catch (e) {
                                return
                            }
                        },
                        [C, U] = (0, l.useState)(!1),
                        [E, P] = (0, l.useState)(3600);
                    (0, l.useEffect)(() => {
                        let e = setInterval(() => {
                            P(e => e - 1)
                        }, 1e3);
                        return () => clearInterval(e)
                    }, []);
                    let I = Math.floor(E / 3600).toString().padStart(2, "0"),
                        V = Math.floor(E % 3600 / 60).toString().padStart(2, "0"),
                        G = Math.floor(E % 60).toString().padStart(2, "0");
                    return (0, n.jsx)(o.Provider, {
                        value: {
                            envUrl: a,
                            setEnvUrl: s,
                            chng: p,
                            setchng: h,
                            ActiveProduct: d,
                            setActiveProduct: u,
                            FetchAllProductData: S,
                            AllProductData: c,
                            setAllProductData: i,
                            CustomerData: m,
                            setCustomerData: f,
                            GetCallSetting: N,
                            checkoutDetail: v,
                            setCheckoutDetail: g,
                            FetchWebCheckout: y,
                            callDetail: x,
                            setCallDetail: b,
                            loading: w,
                            setLoading: k,
                            sc: j,
                            hours: I,
                            minutes: V,
                            remainingSeconds: G,
                            isPopupOpen: C,
                            openPopup: () => {
                                U(!0)
                            },
                            closePopup: () => {
                                U(!1)
                            }
                        },
                        children: t
                    })
                },
                c = () => (0, l.useContext)(o)
        }
    }
]);