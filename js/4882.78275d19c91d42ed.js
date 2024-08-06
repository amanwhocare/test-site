(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4882], {
        34882: function(a, l, e) {
            "use strict";
            e.r(l);
            var s = e(57437),
                c = e(18709),
                n = e.n(c),
                i = e(89817);
            e(9442), l.default = () => {
                let {
                    callDetail: a
                } = (0, i.useGlobalContext)();
                return (0, s.jsx)("div", {
                    className: "w-full",
                    children: (0, s.jsx)("div", {
                        className: "text-black ".concat(n().className, " bg-[#1b1b1b]"),
                        children: (0, s.jsxs)("a", {
                            href: "tel:+91".concat(a.phoneNumber),
                            className: "relative inline-block",
                            id: "hfkCall",
                            children: [(0, s.jsx)("img", {
                                src: "/common_images/call-gif.webp",
                                alt: "pic",
                                loading: "lazy",
                                className: "min-w-[360px] max-w-full"
                            }), (0, s.jsx)("div", {
                                className: "absolute top-0 left-36 text-[2.5rem] md:text-[2.6rem] font-bold",
                                children: a.phoneNumber
                            }), (0, s.jsx)("img", {
                                src: "/common_images/callicon.webp",
                                alt: "pic",
                                className: "callicon faa-ring animated",
                                loading: "lazy"
                            })]
                        })
                    })
                })
            }
        },
        9442: function() {},
        18709: function(a) {
            a.exports = {
                style: {
                    fontFamily: "'__Oswald_6b88b2', '__Oswald_Fallback_6b88b2'",
                    fontStyle: "normal"
                },
                className: "__className_6b88b2",
                variable: "__variable_6b88b2"
            }
        }
    }
]);