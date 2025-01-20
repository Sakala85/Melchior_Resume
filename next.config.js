module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' chrome-extension: https://www.googletagmanager.com https://*.consentframework.com;",
          },
        ],
      },
    ];
  },
};
