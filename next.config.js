/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);
const nextConfig = {
	reactStrictMode: true,
};

module.exports = withTM(nextConfig);
