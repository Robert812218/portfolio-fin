/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: require('fast-glob').sync([
    'source/**/*.{blade.php,md,html,vue}',
    '!source/**/_tmp/*' // exclude temporary files
  ],{ dot: true }), 
  
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cairo: ["Cairo"],
      },  
      spacing: {
        128: "32rem",
      },  
    },  
  },  


  /** plugins: [require("@tailwindcss/forms")], */
};

