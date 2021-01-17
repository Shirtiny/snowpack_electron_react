function axiosTest() {
  if (typeof XMLHttpRequest !== 'undefined') {
    console.log('浏览器环境 Guide Url:', import.meta.url);
  } else if (typeof process !== 'undefined') {
    // const fs = require('fs');
    // const root = fs.readdirSync('/');
    // console.log('node环境:', root);
  }
}

function test() {
  if (typeof process !== 'undefined') {
    // const { format } = require('url');
    // const { join } = require('path');
    // const publicFileUrl = format({
    //   pathname: join(__dirname, '../'),
    //   protocol: 'file:',
    //   slashes: true,
    // });
    // console.log('拥有node环境 Guide Url:', __dirname, publicFileUrl);
  } else {
    console.log('浏览器环境 Guide Url:', import.meta.url);
  }

  console.log('import.meta.url：', import.meta.url);
}
