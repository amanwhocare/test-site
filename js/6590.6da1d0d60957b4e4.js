(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6590], {
        74548: function(e) {
            var a, t, i, n, r, s, c, h, o, l, u, d, m, f, p, b, g, y, k, x, v, $;
            e.exports = (a = "millisecond", t = "second", i = "minute", n = "hour", r = "week", s = "month", c = "quarter", h = "year", o = "date", l = "Invalid Date", u = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, m = function(e, a, t) {
                var i = String(e);
                return !i || i.length >= a ? e : "" + Array(a + 1 - i.length).join(t) + e
            }, (p = {})[f = "en"] = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(e) {
                    var a = ["th", "st", "nd", "rd"],
                        t = e % 100;
                    return "[" + e + (a[(t - 20) % 10] || a[t] || "th") + "]"
                }
            }, b = "$isDayjsObject", g = function(e) {
                return e instanceof v || !(!e || !e[b])
            }, y = function e(a, t, i) {
                var n;
                if (!a) return f;
                if ("string" == typeof a) {
                    var r = a.toLowerCase();
                    p[r] && (n = r), t && (p[r] = t, n = r);
                    var s = a.split("-");
                    if (!n && s.length > 1) return e(s[0])
                } else {
                    var c = a.name;
                    p[c] = a, n = c
                }
                return !i && n && (f = n), n || !i && f
            }, k = function(e, a) {
                if (g(e)) return e.clone();
                var t = "object" == typeof a ? a : {};
                return t.date = e, t.args = arguments, new v(t)
            }, (x = {
                s: m,
                z: function(e) {
                    var a = -e.utcOffset(),
                        t = Math.abs(a);
                    return (a <= 0 ? "+" : "-") + m(Math.floor(t / 60), 2, "0") + ":" + m(t % 60, 2, "0")
                },
                m: function e(a, t) {
                    if (a.date() < t.date()) return -e(t, a);
                    var i = 12 * (t.year() - a.year()) + (t.month() - a.month()),
                        n = a.clone().add(i, s),
                        r = t - n < 0,
                        c = a.clone().add(i + (r ? -1 : 1), s);
                    return +(-(i + (t - n) / (r ? n - c : c - n)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(e) {
                    return ({
                        M: s,
                        y: h,
                        w: r,
                        d: "day",
                        D: o,
                        h: n,
                        m: i,
                        s: t,
                        ms: a,
                        Q: c
                    })[e] || String(e || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            }).l = y, x.i = g, x.w = function(e, a) {
                return k(e, {
                    locale: a.$L,
                    utc: a.$u,
                    x: a.$x,
                    $offset: a.$offset
                })
            }, $ = (v = function() {
                function e(e) {
                    this.$L = y(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[b] = !0
                }
                var m = e.prototype;
                return m.parse = function(e) {
                    this.$d = function(e) {
                        var a = e.date,
                            t = e.utc;
                        if (null === a) return new Date(NaN);
                        if (x.u(a)) return new Date;
                        if (a instanceof Date) return new Date(a);
                        if ("string" == typeof a && !/Z$/i.test(a)) {
                            var i = a.match(u);
                            if (i) {
                                var n = i[2] - 1 || 0,
                                    r = (i[7] || "0").substring(0, 3);
                                return t ? new Date(Date.UTC(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)) : new Date(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)
                            }
                        }
                        return new Date(a)
                    }(e), this.init()
                }, m.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                }, m.$utils = function() {
                    return x
                }, m.isValid = function() {
                    return this.$d.toString() !== l
                }, m.isSame = function(e, a) {
                    var t = k(e);
                    return this.startOf(a) <= t && t <= this.endOf(a)
                }, m.isAfter = function(e, a) {
                    return k(e) < this.startOf(a)
                }, m.isBefore = function(e, a) {
                    return this.endOf(a) < k(e)
                }, m.$g = function(e, a, t) {
                    return x.u(e) ? this[a] : this.set(t, e)
                }, m.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, m.valueOf = function() {
                    return this.$d.getTime()
                }, m.startOf = function(e, a) {
                    var c = this,
                        l = !!x.u(a) || a,
                        u = x.p(e),
                        d = function(e, a) {
                            var t = x.w(c.$u ? Date.UTC(c.$y, a, e) : new Date(c.$y, a, e), c);
                            return l ? t : t.endOf("day")
                        },
                        m = function(e, a) {
                            return x.w(c.toDate()[e].apply(c.toDate("s"), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(a)), c)
                        },
                        f = this.$W,
                        p = this.$M,
                        b = this.$D,
                        g = "set" + (this.$u ? "UTC" : "");
                    switch (u) {
                        case h:
                            return l ? d(1, 0) : d(31, 11);
                        case s:
                            return l ? d(1, p) : d(0, p + 1);
                        case r:
                            var y = this.$locale().weekStart || 0,
                                k = (f < y ? f + 7 : f) - y;
                            return d(l ? b - k : b + (6 - k), p);
                        case "day":
                        case o:
                            return m(g + "Hours", 0);
                        case n:
                            return m(g + "Minutes", 1);
                        case i:
                            return m(g + "Seconds", 2);
                        case t:
                            return m(g + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, m.endOf = function(e) {
                    return this.startOf(e, !1)
                }, m.$set = function(e, r) {
                    var c, l = x.p(e),
                        u = "set" + (this.$u ? "UTC" : ""),
                        d = ((c = {}).day = u + "Date", c[o] = u + "Date", c[s] = u + "Month", c[h] = u + "FullYear", c[n] = u + "Hours", c[i] = u + "Minutes", c[t] = u + "Seconds", c[a] = u + "Milliseconds", c)[l],
                        m = "day" === l ? this.$D + (r - this.$W) : r;
                    if (l === s || l === h) {
                        var f = this.clone().set(o, 1);
                        f.$d[d](m), f.init(), this.$d = f.set(o, Math.min(this.$D, f.daysInMonth())).$d
                    } else d && this.$d[d](m);
                    return this.init(), this
                }, m.set = function(e, a) {
                    return this.clone().$set(e, a)
                }, m.get = function(e) {
                    return this[x.p(e)]()
                }, m.add = function(e, a) {
                    var c, o = this;
                    e = Number(e);
                    var l = x.p(a),
                        u = function(a) {
                            var t = k(o);
                            return x.w(t.date(t.date() + Math.round(a * e)), o)
                        };
                    if (l === s) return this.set(s, this.$M + e);
                    if (l === h) return this.set(h, this.$y + e);
                    if ("day" === l) return u(1);
                    if (l === r) return u(7);
                    var d = ((c = {})[i] = 6e4, c[n] = 36e5, c[t] = 1e3, c)[l] || 1,
                        m = this.$d.getTime() + e * d;
                    return x.w(m, this)
                }, m.subtract = function(e, a) {
                    return this.add(-1 * e, a)
                }, m.format = function(e) {
                    var a = this,
                        t = this.$locale();
                    if (!this.isValid()) return t.invalidDate || l;
                    var i = e || "YYYY-MM-DDTHH:mm:ssZ",
                        n = x.z(this),
                        r = this.$H,
                        s = this.$m,
                        c = this.$M,
                        h = t.weekdays,
                        o = t.months,
                        u = t.meridiem,
                        m = function(e, t, n, r) {
                            return e && (e[t] || e(a, i)) || n[t].slice(0, r)
                        },
                        f = function(e) {
                            return x.s(r % 12 || 12, e, "0")
                        },
                        p = u || function(e, a, t) {
                            var i = e < 12 ? "AM" : "PM";
                            return t ? i.toLowerCase() : i
                        };
                    return i.replace(d, function(e, i) {
                        return i || function(e) {
                            switch (e) {
                                case "YY":
                                    return String(a.$y).slice(-2);
                                case "YYYY":
                                    return x.s(a.$y, 4, "0");
                                case "M":
                                    return c + 1;
                                case "MM":
                                    return x.s(c + 1, 2, "0");
                                case "MMM":
                                    return m(t.monthsShort, c, o, 3);
                                case "MMMM":
                                    return m(o, c);
                                case "D":
                                    return a.$D;
                                case "DD":
                                    return x.s(a.$D, 2, "0");
                                case "d":
                                    return String(a.$W);
                                case "dd":
                                    return m(t.weekdaysMin, a.$W, h, 2);
                                case "ddd":
                                    return m(t.weekdaysShort, a.$W, h, 3);
                                case "dddd":
                                    return h[a.$W];
                                case "H":
                                    return String(r);
                                case "HH":
                                    return x.s(r, 2, "0");
                                case "h":
                                    return f(1);
                                case "hh":
                                    return f(2);
                                case "a":
                                    return p(r, s, !0);
                                case "A":
                                    return p(r, s, !1);
                                case "m":
                                    return String(s);
                                case "mm":
                                    return x.s(s, 2, "0");
                                case "s":
                                    return String(a.$s);
                                case "ss":
                                    return x.s(a.$s, 2, "0");
                                case "SSS":
                                    return x.s(a.$ms, 3, "0");
                                case "Z":
                                    return n
                            }
                            return null
                        }(e) || n.replace(":", "")
                    })
                }, m.utcOffset = function() {
                    return -(15 * Math.round(this.$d.getTimezoneOffset() / 15))
                }, m.diff = function(e, a, o) {
                    var l, u = this,
                        d = x.p(a),
                        m = k(e),
                        f = (m.utcOffset() - this.utcOffset()) * 6e4,
                        p = this - m,
                        b = function() {
                            return x.m(u, m)
                        };
                    switch (d) {
                        case h:
                            l = b() / 12;
                            break;
                        case s:
                            l = b();
                            break;
                        case c:
                            l = b() / 3;
                            break;
                        case r:
                            l = (p - f) / 6048e5;
                            break;
                        case "day":
                            l = (p - f) / 864e5;
                            break;
                        case n:
                            l = p / 36e5;
                            break;
                        case i:
                            l = p / 6e4;
                            break;
                        case t:
                            l = p / 1e3;
                            break;
                        default:
                            l = p
                    }
                    return o ? l : x.a(l)
                }, m.daysInMonth = function() {
                    return this.endOf(s).$D
                }, m.$locale = function() {
                    return p[this.$L]
                }, m.locale = function(e, a) {
                    if (!e) return this.$L;
                    var t = this.clone(),
                        i = y(e, a, !0);
                    return i && (t.$L = i), t
                }, m.clone = function() {
                    return x.w(this.$d, this)
                }, m.toDate = function() {
                    return new Date(this.valueOf())
                }, m.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, m.toISOString = function() {
                    return this.$d.toISOString()
                }, m.toString = function() {
                    return this.$d.toUTCString()
                }, e
            }()).prototype, k.prototype = $, [
                ["$ms", a],
                ["$s", t],
                ["$m", i],
                ["$H", n],
                ["$W", "day"],
                ["$M", s],
                ["$y", h],
                ["$D", o]
            ].forEach(function(e) {
                $[e[1]] = function(a) {
                    return this.$g(a, e[0], e[1])
                }
            }), k.extend = function(e, a) {
                return e.$i || (e(a, v, k), e.$i = !0), k
            }, k.locale = y, k.isDayjs = g, k.unix = function(e) {
                return k(1e3 * e)
            }, k.en = p[f], k.Ls = p, k.p = {}, k)
        },
        56590: function(e, a, t) {
            "use strict";
            t.r(a);
            var i = t(57437),
                n = t(2265),
                r = t(72695),
                s = t(74548),
                c = t.n(s);
            a.default = () => {
                let [e] = (0, n.useState)(r), [a, t] = (0, n.useState)(5), s = (0, n.useMemo)(() => e.slice(0, a).map((e, a) => {
                    let t = 0;
                    switch (a) {
                        case 0:
                            t = 1;
                            break;
                        case 1:
                            t = 3;
                            break;
                        case 2:
                            t = 6;
                            break;
                        case 3:
                            t = 9;
                            break;
                        case 4:
                            t = 11;
                            break;
                        case 5:
                            t = 15;
                            break;
                        case 6:
                            t = 18;
                            break;
                        case 7:
                            t = 20;
                            break;
                        case 8:
                            t = 24;
                            break;
                        case 9:
                            t = 25;
                            break;
                        case 10:
                            t = 27
                    }
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            className: "mx-2 my-5 p-2 rounded-md",
                            style: {
                                boxShadow: "-1px 0px 5px 0px  rgba(0, 0, 0, 0.16)"
                            },
                            children: [(0, i.jsxs)("div", {
                                className: "flex justify-start align-items-center gap-2 mb-2 mt-2",
                                children: [(0, i.jsx)("div", {
                                    className: "w-[50px] h-[50px]",
                                    children: (0, i.jsx)("img", {
                                        decoding: "async",
                                        src: e.profile_photo,
                                        alt: "pic",
                                        className: "rounded-full",
                                        height: 50,
                                        width: 50
                                    })
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsxs)("h5", {
                                        className: "mb-0 text-center align-center text-xl font-bold",
                                        children: [e.name, "\xa0", (0, i.jsx)("img", {
                                            decoding: "async",
                                            src: "/common_images/verify.svg",
                                            className: "inline",
                                            alt: "pic",
                                            height: 18,
                                            width: 18
                                        })]
                                    }), (0, i.jsx)("p", {
                                        className: "m-0 text-start",
                                        children: (0, i.jsxs)("span", {
                                            className: " text-[gray] text-sm",
                                            children: [" ", c()().subtract(t || a + a + 6, "days").format("DD MMM YYYY")]
                                        })
                                    })]
                                })]
                            }), (0, i.jsx)("p", {
                                className: "text-start mt-0 text-[0.9rem]",
                                children: e.comment
                            }), (0, i.jsxs)("div", {
                                className: "w-full md:w-[20rem] m-auto",
                                children: [1 === a && (0, i.jsx)("img", {
                                    alt: "notdf",
                                    fetchPriority: "high",
                                    loading: "eager",
                                    decoding: "async",
                                    src: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5e3a89b-42a0-4717-20c8-49c5e1a5bb00/public",
                                    className: "min-w-[330px] max-w-[300px]"
                                }), 2 === a && (0, i.jsx)("img", {
                                    alt: "notfount",
                                    fetchPriority: "high",
                                    loading: "eager",
                                    decoding: "async",
                                    src: "/reviews/b_f.jpg",
                                    className: "min-w-[330px] max-w-[300px]"
                                }), 5 === a && (0, i.jsx)("img", {
                                    alt: "notfount",
                                    fetchPriority: "high",
                                    loading: "eager",
                                    decoding: "async",
                                    src: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d9150399-df58-428c-f3ac-43f624de2500/public",
                                    className: "min-w-[330px]  max-w-[300px]"
                                }), 10 === a && (0, i.jsx)("img", {
                                    alt: "notfount",
                                    fetchPriority: "high",
                                    loading: "eager",
                                    decoding: "async",
                                    src: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cadcb4e9-4482-46f0-ad6d-76d5247d8b00/public",
                                    lassName: "min-w-[330px] max-w-[300px]"
                                }), 7 === a && (0, i.jsx)("img", {
                                    alt: "notfount",
                                    fetchPriority: "high",
                                    loading: "eager",
                                    decoding: "async",
                                    src: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5e3a89b-42a0-4717-20c8-49c5e1a5bb00/public",
                                    className: "min-w-[330px] max-w-[300px]"
                                })]
                            })]
                        }, a)
                    }, a)
                }), [e, a]);
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)("div", {
                        className: "bg-gray-700 ",
                        children: (0, i.jsx)("section", {
                            className: "w-full bg-white py-3 md:py-7",
                            children: (0, i.jsx)("div", {
                                className: "w-full max-w-2xl mx-auto overflow-hidden",
                                children: (0, i.jsxs)("div", {
                                    className: "pt-4 w-full max-w-2xl mx-auto",
                                    children: [(0, i.jsxs)("div", {
                                        className: "fontPoppins text-2xl md:text-3xl font-bold mb-4 text-center",
                                        children: ["What Our ", (0, i.jsx)("span", {
                                            className: "text-[#e91b1b]",
                                            children: "Customers Say"
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "text-center",
                                        children: (0, i.jsxs)("div", {
                                            className: "w-full",
                                            children: [s.length ? s : "Loading...", a >= r.length ? "" : (0, i.jsx)("button", {
                                                className: "text-white font-bold px-3 my-2 py-1 bg-[red] rounded-md",
                                                onClick: () => {
                                                    a + 3 <= e.length ? t(a + 3) : t(e.length)
                                                },
                                                children: "Show more"
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    }), (0, i.jsx)("div", {})]
                })
            }
        },
        72695: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"name":"Hemraj Prasad","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/96056993-2aa9-40c2-e3c8-1ce4deb27f00/public","comment":"पहले  पकड़ने पर पता ही नहीं चलता था और 2-4 झटके में पानी निकल जाता था पर Horsefire खाने के बाद तो मेरा लिंग मेरी GF के हाथ में पूरा नहीं आता है और वो घुसते ही सिसकने लगती है Horsefire Tablet बहुत असरदार है।"},{"name":"Prakash Yadav","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8353c936-177e-4774-03c2-7e55ed562800/public","comment":"हॉर्सफायर खाने से पहले मेरा लिंग ढीला और छोटा भी था, माल भी जल्दी छूट जाता था पर अब घंटो तक सेक्स होता है और लिंग बृद्धि में इस दवा का परिणाम आपके सामने है"},{"name":"Pravin Kumar","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e862093b-ce04-4842-c4a3-144ff8287000/public","comment":"Yah dwa bahut asardar hai ise khane ke bad mera josh, power, size aur sex timing kafi bad gya hai...chhote ling aur jaldi jhad jane wale mardo ko is dwa ka upyog jarur krna chahiye. Ling par iska result unbelievable hai, aap dekh sakte hai."},{"name":"Sanjiv Gupta","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/84f7508e-a5dd-4f77-21f5-46fb9730b000/public","comment":"मुझे शीघ्रपतन की समस्या थी, साइज भी जितना मैं चाहता था उससे कम थी। फिर मैने मेरे दोस्त के सुझाव से हॉर्सफायर टेबलेट खाया इससे मुझे जोरदार लाभ मिला। मेरी टाइमिंग कई गुना बढ़ गयी और मात्र 2 पैक में ही लिंग साइज का बदलाव भी आश्चर्यजनक था अब मेरे इन रॉड जैसे पेनिस से किसी भी महिला को ठोक के ठंडा कर सकता हूँ।"},{"name":"Ajay Shukla","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/10f8b807-58a7-480f-19cb-5ef31769df00/public","comment":"Main 2 mahine se is goli ko kha rha hu. Is adbhut goli ne meri kai sex problems ko mita diya...Is Horsefire ki goli se mera stamina, josh, timing aur penis size kafi jyada badhh gya hai..in dino me 7 cm se jyada size 25 minute se jyada timing badha hai."},{"name":"Jitan Patel","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4060c79c-a591-43ec-2f1f-2aaf66a89900/public","comment":"मेरा लिंग पहले छोटा था। अब मुझे जैसा चाहिए था वैसा हो गया है मैंने निचे पहले के और अब के पिक दे रहा हूँ आप देख सकते है। इससे से के टाइम ड्यूरेशन में भी बड़ा बदलाव आया है !!"},{"name":"Krishnappa Murali","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a151c90b-bc6f-43c9-29f5-19aebbcfe000/public","comment":"मेरी कई GF हुई लेकिन मैं किसी को मजे नहीं दे पाता था। सबने ब्रेकअप कर लिया। Horsefire ने कमाल कर दिया। इस गोली से मेरी सेक्स पावर और पेनिस के साइज में बहुत सुधार हो गया है अब मेरी जो GF है वो मुझ से एकदम संतुष्ट रहती है। "},{"name":"Anil Kush","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4a6ed0f5-1664-4ef1-89fb-9e4ed302d900/public","comment":"Abhi tak mai kai product use kar chuka hu...ye sabse a6aa hai. mere vichar se khaskar mere liye ye ayurved ka best formulation hai. Iska kuchh hi din use krne ke bad meri stamina aur timing increase ho gyi. Horse Fire Tablet ne meri marital life ko khushahal bna diya."},{"name":"Raghav Lokhande","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/488cfbac-ef25-4c2d-3212-1bbc8ca9b900/public","comment":"हे औषध खरोखर कार्य करते. या उत्पादनाने मला वयाच्या ४५ व्या वर्षी तरुण वाटले"},{"name":"Neerav Pathak","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/825c459d-8738-4305-c693-39650a7ab000/public","comment":"Yah waakai me kamaal ka ayurvedic stamina booster product hai, Iska koi comperesion nahi hai. Bilkul jaisa naam waisa kam hai iska gajab ki sex takt deta hai. Ab main pahle se kai guna jyada time tak enjoy kar paata hu."},{"name":"Shikha Chaugale","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/15635ea8-0551-4ad4-7da5-86cc65bd0000/public","comment":"This is best for men with short penish and lack of sex timing...jisse meri jaisi kitni sari females ko sex ka mja nhi mil paata hai..mere Husband ka penis kafi badh gya hai ab mujhe vo har bar thaka dete hai... mai har bar discharge ho jati hu par vo nhi hote hai. mujhe mja bahut milta hai...ab unka adha penis bhi orgasm de deta hai..."},{"name":"Dhirendra Yadav","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/51db8496-cd42-4583-e0a3-c94f3c92bb00/public","comment":"इसका परिणाम बहुत शानदार है, जिस समस्या का सालों से इलाज करा रहा था पर कुछ खास असर नहीं हो रहा था। उसे इसने केवल 2 महीने में पूरी तरह से समाप्त कर दिया। दिल से धन्यवाद इसे बनाने वाले को"},{"name":"Satish Sharma","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac5f2b29-5267-4777-6fcc-e8df8c30a600/public","comment":"Very effective product...he feel\'s very energetic now"},{"name":"Vikash","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5e6edb7e-fb56-4ba9-8f08-1b0b1ae51100/public","comment":"Mujhe kmal ka result mila hai, iske istemal se ab meri timing kafi badh gyi hai...Part me hard erection milti hai jo jaldi dhila nhi padta hai."},{"name":"Jitendar Rajbhar","profile_photo":"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bc3c0fe9-0136-4a73-b92c-f2767d194c00/public","comment":"शुरुआत के २ महीने रेगुलर दोनों टाइम सेवन किया पर तीसरे महीने से एक दिन या दो दिन में एक गोली का सेवन करता हूँ क्यूंकि मेरी क्षमता और टाइमिंग में काफी सुधार हो चुका है। मेरी यौन जीवन को सुधारने के लिए थैंक्स हॉर्सफायर!!"}]')
        }
    }
]);