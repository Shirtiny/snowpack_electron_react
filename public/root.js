console.log("root import文件位置: ", import.meta.url);

const regxp = new RegExp(`(.*)/root.js.*$`);
const result = regxp.exec(import.meta.url);
const ROOT_PATH = result[1];

console.log("ROOT_PATH：", ROOT_PATH);

localStorage.setItem("ROOT_PATH", ROOT_PATH);
