module.exports = {
    env: {
      URL: process.env.URL,
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://531-tracker-next-js-9a2xjvfgk.vercel.app/:path*',
        },
      ]
    },
  };