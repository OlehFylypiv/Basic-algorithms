function getValidURL(url) {

  var urlObj = {};

  var buff = url.match(/^(https?:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(#[\w\-]+)?$/);
  
  urlObj.protocol = buff[1];
  urlObj.subdomain = buff[2];
  urlObj.domain = buff[3];
  urlObj.zone = buff[4];
  urlObj.path = buff[5];
  urlObj.anchor = buff[6];

  return urlObj;
}


var urlObj = getValidURL('https://www.facebook.com/OlehFylypiv/#blog');

console.log(urlObj);