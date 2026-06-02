const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const TARGET = "https://orion-chat.duckdns.org";

app.use(
  "/",
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    ws: true,
    secure: true,
    xfwd: true,
  })
);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});