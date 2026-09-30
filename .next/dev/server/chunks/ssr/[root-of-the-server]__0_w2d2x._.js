module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/StarBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StarBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const stars = [
    {
        left: "8%",
        top: "12%",
        size: 2,
        delay: 0
    },
    {
        left: "18%",
        top: "35%",
        size: 1.5,
        delay: 1.2
    },
    {
        left: "28%",
        top: "18%",
        size: 2,
        delay: 0.5
    },
    {
        left: "39%",
        top: "42%",
        size: 1.5,
        delay: 1.8
    },
    {
        left: "50%",
        top: "10%",
        size: 2,
        delay: 0.8
    },
    {
        left: "61%",
        top: "30%",
        size: 1.5,
        delay: 2.2
    },
    {
        left: "72%",
        top: "15%",
        size: 2,
        delay: 1.4
    },
    {
        left: "84%",
        top: "40%",
        size: 1.5,
        delay: 0.3
    },
    {
        left: "93%",
        top: "20%",
        size: 2,
        delay: 1.7
    },
    {
        left: "12%",
        top: "58%",
        size: 1.5,
        delay: 2.5
    },
    {
        left: "23%",
        top: "75%",
        size: 2,
        delay: 0.9
    },
    {
        left: "35%",
        top: "62%",
        size: 1.5,
        delay: 1.6
    },
    {
        left: "47%",
        top: "82%",
        size: 2,
        delay: 0.2
    },
    {
        left: "58%",
        top: "55%",
        size: 1.5,
        delay: 2.1
    },
    {
        left: "69%",
        top: "72%",
        size: 2,
        delay: 1.1
    },
    {
        left: "81%",
        top: "60%",
        size: 1.5,
        delay: 2.7
    },
    {
        left: "91%",
        top: "85%",
        size: 2,
        delay: 0.6
    },
    {
        left: "5%",
        top: "90%",
        size: 1.5,
        delay: 1.9
    },
    {
        left: "31%",
        top: "92%",
        size: 2,
        delay: 2.4
    },
    {
        left: "64%",
        top: "94%",
        size: 1.5,
        delay: 0.7
    },
    {
        left: "77%",
        top: "90%",
        size: 2,
        delay: 1.5
    }
];
function StarBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "   pointer-events-none   fixed   inset-0   z-10   overflow-hidden   ",
        "aria-hidden": "true",
        children: stars.map((star, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "absolute rounded-full bg-[#D4AF37]",
                style: {
                    left: star.left,
                    top: star.top,
                    width: star.size,
                    height: star.size,
                    boxShadow: "0 0 5px rgba(212, 175, 55, 0.45)"
                },
                animate: {
                    opacity: [
                        0.15,
                        0.65,
                        0.15
                    ],
                    scale: [
                        0.8,
                        1.25,
                        0.8
                    ]
                },
                transition: {
                    duration: 3.5,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, index, false, {
                fileName: "[project]/components/StarBackground.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/StarBackground.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_w2d2x._.js.map