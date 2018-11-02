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
  (0, _jsonPost.default)(formObj).then((0, _jsonGet.default)().then(data => {
    console.log(data);
    $("#section_postToDom").html(null);
    $("#section_postToDom").html((0, _componentBuilder.default)(data));
  }));
});
(0, _jsonGet.default)().then(data => {
  $("#section_postToDom").html(null);
  $("#section_postToDom").html((0, _componentBuilder.default)(data));
});

},{"./componentBuilder.js":1,"./jsonGet.js":2,"./jsonPost.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbXBvbmVudEJ1aWxkZXIuanMiLCIuLi9zY3JpcHRzL2pzb25HZXQuanMiLCIuLi9zY3JpcHRzL2pzb25Qb3N0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0VBLElBQUksWUFBWSxHQUFJLElBQUQsSUFBVTtBQUMzQixNQUFJLEtBQUssR0FBSSxFQUFiO0FBQ0EsRUFBQSxJQUFJLENBQUMsT0FBTCxDQUFhLEtBQUssSUFBSTtBQUNwQixJQUFBLEtBQUssSUFBSzs7Y0FFQSxLQUFLLENBQUMsSUFBSzthQUNaLEtBQUssQ0FBQyxNQUFPO2FBQ2IsS0FBSyxDQUFDLE9BQVE7YUFKdkI7QUFNRCxHQVBEO0FBUUEsU0FBTyxLQUFQO0FBQ0QsQ0FYRDs7ZUFZZSxZOzs7Ozs7Ozs7OztBQ2JmLElBQUksV0FBVyxHQUFHLE1BQU07QUFDdEIsU0FBTyxLQUFLLENBQUUsK0JBQUYsQ0FBTCxDQUNOLElBRE0sQ0FDRCxJQUFJLElBQUksSUFBSSxDQUFDLElBQUwsRUFEUCxDQUFQO0FBRUQsQ0FIRDs7ZUFLZSxXOzs7Ozs7Ozs7OztBQ0pmLElBQUksUUFBUSxHQUFJLElBQUQsSUFBVTtBQUN2QixTQUFPLEtBQUssQ0FBRSwrQkFBRixFQUFrQztBQUM1QyxJQUFBLE1BQU0sRUFBRSxNQURvQztBQUU1QyxJQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRm1DO0FBSzVDLElBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZjtBQUxzQyxHQUFsQyxDQUFaO0FBT0QsQ0FSRDs7ZUFVZSxROzs7Ozs7QUNaZjs7QUFDQTs7QUFDQTs7OztBQUVBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsS0FBbkIsQ0FBeUIsTUFBTTtBQUM3QixNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEdBQWpCLEVBQWY7QUFDQSxNQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLEdBQW5CLEVBQWpCO0FBQ0EsTUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsR0FBcEIsRUFBbEI7QUFFQSxNQUFJLE9BQU8sR0FBRztBQUNaLElBQUEsSUFBSSxFQUFFLFFBRE07QUFFWixJQUFBLE1BQU0sRUFBRSxVQUZJO0FBR1osSUFBQSxPQUFPLEVBQUU7QUFIRyxHQUFkO0FBS0EseUJBQVMsT0FBVCxFQUFrQixJQUFsQixDQUNBLHdCQUFVLElBQVYsQ0FBZSxJQUFJLElBQUk7QUFDckIsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFDQSxJQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLElBQXhCLENBQTZCLElBQTdCO0FBQ0EsSUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QixJQUF4QixDQUE2QiwrQkFBTSxJQUFOLENBQTdCO0FBQ0QsR0FKRCxDQURBO0FBTUQsQ0FoQkQ7QUFrQkEsd0JBQVUsSUFBVixDQUFlLElBQUksSUFBSTtBQUNyQixFQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLElBQXhCLENBQTZCLElBQTdCO0FBQ0EsRUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QixJQUF4QixDQUE2QiwrQkFBTSxJQUFOLENBQTdCO0FBQ0QsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5cclxubGV0IGVsZW1lbnRCdWlsZCA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IGJ1aWxkID0gYGA7XHJcbiAgZGF0YS5mb3JFYWNoKGFycmF5ID0+IHtcclxuICAgIGJ1aWxkICs9IGBcclxuICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGFjdHNcIj5cclxuICAgICAgICA8aDM+JHthcnJheS5uYW1lfTwvaDM+XHJcbiAgICAgICAgPHA+JHthcnJheS5udW1iZXJ9PC9wPlxyXG4gICAgICAgIDxwPiR7YXJyYXkuYWRkcmVzc308L3A+XHJcbiAgICAgIDwvZGl2PmBcclxuICB9KVxyXG4gIHJldHVybiBidWlsZDtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50QnVpbGQiLCJcclxubGV0IGdldGZldGNoaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RgKVxyXG4gIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldGZldGNoaW5nIiwiXHJcblxyXG5sZXQgZmV0Y2hpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoaW5nIiwiaW1wb3J0IGpzb25Qb3N0IGZyb20gXCIuL2pzb25Qb3N0LmpzXCJcclxuaW1wb3J0IGpzb25HZXQgZnJvbSBcIi4vanNvbkdldC5qc1wiXHJcbmltcG9ydCBidWlsZCBmcm9tIFwiLi9jb21wb25lbnRCdWlsZGVyLmpzXCJcclxuXHJcbiQoXCIjZm9ydW1fYnV0dG9uXCIpLmNsaWNrKCgpID0+IHtcclxuICBsZXQgZm9ybU5hbWUgPSAkKFwiI2ZvcnVtX25hbWVcIikudmFsKClcclxuICBsZXQgZm9ybU51bWJlciA9ICQoXCIjZm9ydW1fbnVtYmVyXCIpLnZhbCgpXHJcbiAgbGV0IGZvcm1BZGRyZXNzID0gJChcIiNmb3J1bV9hZGRyZXNzXCIpLnZhbCgpXHJcblxyXG4gIGxldCBmb3JtT2JqID0ge1xyXG4gICAgbmFtZTogZm9ybU5hbWUsXHJcbiAgICBudW1iZXI6IGZvcm1OdW1iZXIsXHJcbiAgICBhZGRyZXNzOiBmb3JtQWRkcmVzc1xyXG4gIH1cclxuICBqc29uUG9zdChmb3JtT2JqKS50aGVuKFxyXG4gIGpzb25HZXQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAkKFwiI3NlY3Rpb25fcG9zdFRvRG9tXCIpLmh0bWwobnVsbCk7XHJcbiAgICAkKFwiI3NlY3Rpb25fcG9zdFRvRG9tXCIpLmh0bWwoYnVpbGQoZGF0YSkpXHJcbiAgfSkpXHJcbn0pXHJcblxyXG5qc29uR2V0KCkudGhlbihkYXRhID0+IHtcclxuICAkKFwiI3NlY3Rpb25fcG9zdFRvRG9tXCIpLmh0bWwobnVsbCk7XHJcbiAgJChcIiNzZWN0aW9uX3Bvc3RUb0RvbVwiKS5odG1sKGJ1aWxkKGRhdGEpKVxyXG59KVxyXG5cclxuIl19
