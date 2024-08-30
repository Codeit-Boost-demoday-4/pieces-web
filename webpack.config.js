const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // 다른 로더들을 추가할 수 있습니다.
    ],
  },
  plugins: [
    // HTMLWebpackPlugin 등 다른 플러그인들도 추가 가능
  ],
};
