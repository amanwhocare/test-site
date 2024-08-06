"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1376], {
        1376: function(e, s, c) {
            c.r(s);
            var r = c(57437),
                t = c(89817),
                a = c(24606);
            s.default = () => {
                let {
                    hours: e,
                    minutes: s,
                    remainingSeconds: c
                } = (0, t.useGlobalContext)();
                return (0, r.jsxs)("div", {
                    className: "w-full bg-[#262525] py-1",
                    onClick: () => window.location.href = "#form",
                    children: [(0, r.jsxs)("p", {
                        className: "text-center text-[1.2rem] m-0",
                        children: ["डिस्काउंट का अंत: ", (0, r.jsx)("span", {
                            className: "text-[#e1c231]",
                            children: "".concat(e, ":").concat(s, ":").concat(c)
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex justify-center items-center gap-2 text-white",
                        children: [(0, r.jsx)(a.w9M, {
                            className: "arrow-3 commonArrow"
                        }), (0, r.jsx)("a", {
                            href: "#form",
                            className: "text-center decoration-none border-0 rounded-lg pt-1  px-3 font-bold bg-[red]",
                            children: "पैक 50% छूट के साथ"
                        }), (0, r.jsx)(a.e6h, {
                            className: "arrow-4 commonArrow"
                        })]
                    })]
                })
            }
        }
    }
]);