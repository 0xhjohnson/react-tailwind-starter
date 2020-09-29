module.exports = () => {
  return {
    plugins: [
      require('postcss-import')(),
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer')
    ]
  };
};
