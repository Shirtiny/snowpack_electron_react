import img from "./img";

function axiosTest() {
  if (typeof XMLHttpRequest !== "undefined") {
    console.log("浏览器环境 Guide Url:", import.meta.url);
  } else if (typeof process !== "undefined") {
    // const fs = require('fs');
    // const root = fs.readdirSync('/');
    // console.log('node环境:', root);
  }
}

function getRootPath() {
  return localStorage.getItem("ROOT_PATH");
}

const assets = {
  img,
};

export { getRootPath };
export default assets;
