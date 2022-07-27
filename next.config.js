/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.pinterest.com",
      "upload.wikimedia.org",
      "cdn.iconscout.com",
      "adityasingh.gallerycdn.vsassets.io",
      "seeklogo.com",
      "miro.medium.com",
      "miro.medium.com/max/800/1*mUISLg4ghf6QYT_f1-cnlg.png",
      "mui.com",
      "www.pinterest.com/pin/3307399714553319",
      "cdn-icons-png.flaticon.com",
      "i.pinimg.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
