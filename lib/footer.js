
  return SockJS;
})();
if ('_sockjs_onload' in window) setTimeout(_sockjs_onload, 1);

// AMD compliance
if (typeof define === 'function' && define.amd) {
  define('sockjs', [], function(){return SockJS;});
}

if (typeof module === 'object' && module && module.exports) {
  module.exports = SockJS;
}
