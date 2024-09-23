// 文档：https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-on-every-tab?hl=zh-cn

const reg = /project\/(\d+)/;
const projecId = location.href.match(reg)[1];

const projecIdMap = {
  2744361: "mojave",
};

function getInfo() {
  const method = document.querySelector(
    ".pui-g-ui-kit-request-method-icon-index-container"
  );

  const path = document.querySelector(
    ".pui-pages-api-api-manage-http-http-api-case-components-path-input-text pui-pages-api-api-manage-http-http-api-case-index-path-hove"
  );

  const desc = document.querySelector(".name-row-item-value");
  console.log(method, path, desc);
  return method;
}

let timer = setInterval(() => {
  if (getInfo()) {
    clearInterval(timer);
    timer = null;
  }
}, 1000);
