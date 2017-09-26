var win = window;
  var doc = document;

  var ieVer = (function () {
  var v = 3,
      p = doc.createElement('p'),
      all = p.getElementsByTagName('i');
  while (
      p.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
      all[0]);
  return v > 4 ? v : 0;
  }());

  var ieAX = win.ActiveXObject;
  var ieMode = doc.documentMode;
  var isIe = ieAX || ieMode;
  if (isIe && ieVer <= 9) {
  
  }