export default {
    base: "/",
    qiankun: {
        slave: {},
    },
    antd: {
        theme: {
            token: {
                colorPrimary: "#1677ff",
                colorInfo: "#1677ff",
                borderRadius: 2,
            },
        },
        dark: false,
        compact: true,
        style: "less",
        appConfig: {},
        styleProvider: {
            hashPriority: "high",
            legacyTransformer: true,
        },
    },
    model: {},
    routes: [
        { path: "/", component: "index" },
        { path: "/hello", component: "hello" },
    ],
    runtimePublicPath: {},
    hash: false,
};
