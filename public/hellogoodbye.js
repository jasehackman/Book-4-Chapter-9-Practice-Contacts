(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let fetching = data => {
  return fetch(`http://localhost:8088/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

var _default = fetching;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _jsonPost = _interopRequireDefault(require("./jsonPost.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$("#forum_button").click(() => {
  let formName = $("#forum_name").val();
  let formNumber = $("#forum_number").val();
  let formAddress = $("#forum_address").val();
  let formObj = {
    name: formName,
    number: formNumber,
    address: formAddress
  };
  (0, _jsonPost.default)(formObj);
});

},{"./jsonPost.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2pzb25Qb3N0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0VBLElBQUksUUFBUSxHQUFJLElBQUQsSUFBVTtBQUN2QixTQUFPLEtBQUssQ0FBRSwrQkFBRixFQUFrQztBQUM1QyxJQUFBLE1BQU0sRUFBRSxNQURvQztBQUU1QyxJQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRm1DO0FBSzVDLElBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZjtBQUxzQyxHQUFsQyxDQUFaO0FBT0QsQ0FSRDs7ZUFVZSxROzs7Ozs7QUNaZjs7OztBQUVBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsS0FBbkIsQ0FBeUIsTUFBTTtBQUM3QixNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEdBQWpCLEVBQWY7QUFDQSxNQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLEdBQW5CLEVBQWpCO0FBQ0EsTUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsR0FBcEIsRUFBbEI7QUFFQSxNQUFJLE9BQU8sR0FBRztBQUNaLElBQUEsSUFBSSxFQUFFLFFBRE07QUFFWixJQUFBLE1BQU0sRUFBRSxVQUZJO0FBR1osSUFBQSxPQUFPLEVBQUU7QUFIRyxHQUFkO0FBS0UseUJBQVMsT0FBVDtBQUNILENBWEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuXHJcbmxldCBmZXRjaGluZyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hpbmciLCJpbXBvcnQganNvblBvc3QgZnJvbSBcIi4vanNvblBvc3QuanNcIlxyXG5cclxuJChcIiNmb3J1bV9idXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gIGxldCBmb3JtTmFtZSA9ICQoXCIjZm9ydW1fbmFtZVwiKS52YWwoKVxyXG4gIGxldCBmb3JtTnVtYmVyID0gJChcIiNmb3J1bV9udW1iZXJcIikudmFsKClcclxuICBsZXQgZm9ybUFkZHJlc3MgPSAkKFwiI2ZvcnVtX2FkZHJlc3NcIikudmFsKClcclxuXHJcbiAgbGV0IGZvcm1PYmogPSB7XHJcbiAgICBuYW1lOiBmb3JtTmFtZSxcclxuICAgIG51bWJlcjogZm9ybU51bWJlcixcclxuICAgIGFkZHJlc3M6IGZvcm1BZGRyZXNzXHJcbiAgfVxyXG4gICAganNvblBvc3QoZm9ybU9iaik7XHJcbn0pXHJcbiJdfQ==
