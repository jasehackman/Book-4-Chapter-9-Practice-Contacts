(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let elementBuild = data => {
  let build = ``;
  data.forEach(array => {
    build += `
      <div class = "contacts">
        <h3>${array.name}</h3>
        <p>${array.number}</p>
        <p>${array.address}</p>
      </div>`;
  });
  return build;
};

var _default = elementBuild;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let getfetching = () => {
  return fetch(`http://localhost:8088/contact`).then(data => data.json());
};

var _default = getfetching;
exports.default = _default;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

var _jsonPost = _interopRequireDefault(require("./jsonPost.js"));

var _jsonGet = _interopRequireDefault(require("./jsonGet.js"));

var _componentBuilder = _interopRequireDefault(require("./componentBuilder.js"));

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
(0, _jsonGet.default)().then(data => {
  console.log((0, _componentBuilder.default)(data));
  $("#section_postToDom").html((0, _componentBuilder.default)(data));
});

},{"./componentBuilder.js":1,"./jsonGet.js":2,"./jsonPost.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbXBvbmVudEJ1aWxkZXIuanMiLCIuLi9zY3JpcHRzL2pzb25HZXQuanMiLCIuLi9zY3JpcHRzL2pzb25Qb3N0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0VBLElBQUksWUFBWSxHQUFJLElBQUQsSUFBVTtBQUMzQixNQUFJLEtBQUssR0FBSSxFQUFiO0FBQ0EsRUFBQSxJQUFJLENBQUMsT0FBTCxDQUFhLEtBQUssSUFBSTtBQUNwQixJQUFBLEtBQUssSUFBSzs7Y0FFQSxLQUFLLENBQUMsSUFBSzthQUNaLEtBQUssQ0FBQyxNQUFPO2FBQ2IsS0FBSyxDQUFDLE9BQVE7YUFKdkI7QUFNRCxHQVBEO0FBUUEsU0FBTyxLQUFQO0FBQ0QsQ0FYRDs7ZUFZZSxZOzs7Ozs7Ozs7OztBQ2JmLElBQUksV0FBVyxHQUFHLE1BQU07QUFDdEIsU0FBTyxLQUFLLENBQUUsK0JBQUYsQ0FBTCxDQUNOLElBRE0sQ0FDRCxJQUFJLElBQUksSUFBSSxDQUFDLElBQUwsRUFEUCxDQUFQO0FBRUQsQ0FIRDs7ZUFLZSxXOzs7Ozs7Ozs7OztBQ0pmLElBQUksUUFBUSxHQUFJLElBQUQsSUFBVTtBQUN2QixTQUFPLEtBQUssQ0FBRSwrQkFBRixFQUFrQztBQUM1QyxJQUFBLE1BQU0sRUFBRSxNQURvQztBQUU1QyxJQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRm1DO0FBSzVDLElBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZjtBQUxzQyxHQUFsQyxDQUFaO0FBT0QsQ0FSRDs7ZUFVZSxROzs7Ozs7QUNaZjs7QUFDQTs7QUFDQTs7OztBQUVBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsS0FBbkIsQ0FBeUIsTUFBTTtBQUM3QixNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEdBQWpCLEVBQWY7QUFDQSxNQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLEdBQW5CLEVBQWpCO0FBQ0EsTUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsR0FBcEIsRUFBbEI7QUFFQSxNQUFJLE9BQU8sR0FBRztBQUNaLElBQUEsSUFBSSxFQUFFLFFBRE07QUFFWixJQUFBLE1BQU0sRUFBRSxVQUZJO0FBR1osSUFBQSxPQUFPLEVBQUU7QUFIRyxHQUFkO0FBS0UseUJBQVMsT0FBVDtBQUNILENBWEQ7QUFhQSx3QkFBVSxJQUFWLENBQWUsSUFBSSxJQUFJO0FBQ3JCLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSwrQkFBTSxJQUFOLENBQVo7QUFDQSxFQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLElBQXhCLENBQTZCLCtCQUFNLElBQU4sQ0FBN0I7QUFFRCxDQUpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG5sZXQgZWxlbWVudEJ1aWxkID0gKGRhdGEpID0+IHtcclxuICBsZXQgYnVpbGQgPSBgYDtcclxuICBkYXRhLmZvckVhY2goYXJyYXkgPT4ge1xyXG4gICAgYnVpbGQgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzID0gXCJjb250YWN0c1wiPlxyXG4gICAgICAgIDxoMz4ke2FycmF5Lm5hbWV9PC9oMz5cclxuICAgICAgICA8cD4ke2FycmF5Lm51bWJlcn08L3A+XHJcbiAgICAgICAgPHA+JHthcnJheS5hZGRyZXNzfTwvcD5cclxuICAgICAgPC9kaXY+YFxyXG4gIH0pXHJcbiAgcmV0dXJuIGJ1aWxkO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRCdWlsZCIsIlxyXG5sZXQgZ2V0ZmV0Y2hpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdGApXHJcbiAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0ZmV0Y2hpbmciLCJcclxuXHJcbmxldCBmZXRjaGluZyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hpbmciLCJpbXBvcnQganNvblBvc3QgZnJvbSBcIi4vanNvblBvc3QuanNcIlxyXG5pbXBvcnQganNvbkdldCBmcm9tIFwiLi9qc29uR2V0LmpzXCJcclxuaW1wb3J0IGJ1aWxkIGZyb20gXCIuL2NvbXBvbmVudEJ1aWxkZXIuanNcIlxyXG5cclxuJChcIiNmb3J1bV9idXR0b25cIikuY2xpY2soKCkgPT4ge1xyXG4gIGxldCBmb3JtTmFtZSA9ICQoXCIjZm9ydW1fbmFtZVwiKS52YWwoKVxyXG4gIGxldCBmb3JtTnVtYmVyID0gJChcIiNmb3J1bV9udW1iZXJcIikudmFsKClcclxuICBsZXQgZm9ybUFkZHJlc3MgPSAkKFwiI2ZvcnVtX2FkZHJlc3NcIikudmFsKClcclxuXHJcbiAgbGV0IGZvcm1PYmogPSB7XHJcbiAgICBuYW1lOiBmb3JtTmFtZSxcclxuICAgIG51bWJlcjogZm9ybU51bWJlcixcclxuICAgIGFkZHJlc3M6IGZvcm1BZGRyZXNzXHJcbiAgfVxyXG4gICAganNvblBvc3QoZm9ybU9iaik7XHJcbn0pXHJcblxyXG5qc29uR2V0KCkudGhlbihkYXRhID0+IHtcclxuICBjb25zb2xlLmxvZyhidWlsZChkYXRhKSk7XHJcbiAgJChcIiNzZWN0aW9uX3Bvc3RUb0RvbVwiKS5odG1sKGJ1aWxkKGRhdGEpKVxyXG5cclxufSlcclxuXHJcbiJdfQ==
