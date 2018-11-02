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
  $("#section_postToDom").html((0, _componentBuilder.default)(data));
});

},{"./componentBuilder.js":1,"./jsonGet.js":2,"./jsonPost.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbXBvbmVudEJ1aWxkZXIuanMiLCIuLi9zY3JpcHRzL2pzb25HZXQuanMiLCIuLi9zY3JpcHRzL2pzb25Qb3N0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0VBLElBQUksWUFBWSxHQUFJLElBQUQsSUFBVTtBQUMzQixNQUFJLEtBQUssR0FBSSxFQUFiO0FBQ0EsRUFBQSxJQUFJLENBQUMsT0FBTCxDQUFhLEtBQUssSUFBSTtBQUNwQixJQUFBLEtBQUssSUFBSzs7Y0FFQSxLQUFLLENBQUMsSUFBSzthQUNaLEtBQUssQ0FBQyxNQUFPO2FBQ2IsS0FBSyxDQUFDLE9BQVE7YUFKdkI7QUFNRCxHQVBEO0FBUUEsU0FBTyxLQUFQO0FBQ0QsQ0FYRDs7ZUFZZSxZOzs7Ozs7Ozs7OztBQ2JmLElBQUksV0FBVyxHQUFHLE1BQU07QUFDdEIsU0FBTyxLQUFLLENBQUUsK0JBQUYsQ0FBTCxDQUNOLElBRE0sQ0FDRCxJQUFJLElBQUksSUFBSSxDQUFDLElBQUwsRUFEUCxDQUFQO0FBRUQsQ0FIRDs7ZUFLZSxXOzs7Ozs7Ozs7OztBQ0pmLElBQUksUUFBUSxHQUFJLElBQUQsSUFBVTtBQUN2QixTQUFPLEtBQUssQ0FBRSwrQkFBRixFQUFrQztBQUM1QyxJQUFBLE1BQU0sRUFBRSxNQURvQztBQUU1QyxJQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRm1DO0FBSzVDLElBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZjtBQUxzQyxHQUFsQyxDQUFaO0FBT0QsQ0FSRDs7ZUFVZSxROzs7Ozs7QUNaZjs7QUFDQTs7QUFDQTs7OztBQUVBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsS0FBbkIsQ0FBeUIsTUFBTTtBQUM3QixNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEdBQWpCLEVBQWY7QUFDQSxNQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLEdBQW5CLEVBQWpCO0FBQ0EsTUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsR0FBcEIsRUFBbEI7QUFFQSxNQUFJLE9BQU8sR0FBRztBQUNaLElBQUEsSUFBSSxFQUFFLFFBRE07QUFFWixJQUFBLE1BQU0sRUFBRSxVQUZJO0FBR1osSUFBQSxPQUFPLEVBQUU7QUFIRyxHQUFkO0FBS0UseUJBQVMsT0FBVDtBQUNILENBWEQ7QUFhQSx3QkFBVSxJQUFWLENBQWUsSUFBSSxJQUFJO0FBQ3JCLEVBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IsSUFBeEIsQ0FBNkIsK0JBQU0sSUFBTixDQUE3QjtBQUVELENBSEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuXHJcbmxldCBlbGVtZW50QnVpbGQgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBidWlsZCA9IGBgO1xyXG4gIGRhdGEuZm9yRWFjaChhcnJheSA9PiB7XHJcbiAgICBidWlsZCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3RzXCI+XHJcbiAgICAgICAgPGgzPiR7YXJyYXkubmFtZX08L2gzPlxyXG4gICAgICAgIDxwPiR7YXJyYXkubnVtYmVyfTwvcD5cclxuICAgICAgICA8cD4ke2FycmF5LmFkZHJlc3N9PC9wPlxyXG4gICAgICA8L2Rpdj5gXHJcbiAgfSlcclxuICByZXR1cm4gYnVpbGQ7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudEJ1aWxkIiwiXHJcbmxldCBnZXRmZXRjaGluZyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0YClcclxuICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRmZXRjaGluZyIsIlxyXG5cclxubGV0IGZldGNoaW5nID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0YCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGluZyIsImltcG9ydCBqc29uUG9zdCBmcm9tIFwiLi9qc29uUG9zdC5qc1wiXHJcbmltcG9ydCBqc29uR2V0IGZyb20gXCIuL2pzb25HZXQuanNcIlxyXG5pbXBvcnQgYnVpbGQgZnJvbSBcIi4vY29tcG9uZW50QnVpbGRlci5qc1wiXHJcblxyXG4kKFwiI2ZvcnVtX2J1dHRvblwiKS5jbGljaygoKSA9PiB7XHJcbiAgbGV0IGZvcm1OYW1lID0gJChcIiNmb3J1bV9uYW1lXCIpLnZhbCgpXHJcbiAgbGV0IGZvcm1OdW1iZXIgPSAkKFwiI2ZvcnVtX251bWJlclwiKS52YWwoKVxyXG4gIGxldCBmb3JtQWRkcmVzcyA9ICQoXCIjZm9ydW1fYWRkcmVzc1wiKS52YWwoKVxyXG5cclxuICBsZXQgZm9ybU9iaiA9IHtcclxuICAgIG5hbWU6IGZvcm1OYW1lLFxyXG4gICAgbnVtYmVyOiBmb3JtTnVtYmVyLFxyXG4gICAgYWRkcmVzczogZm9ybUFkZHJlc3NcclxuICB9XHJcbiAgICBqc29uUG9zdChmb3JtT2JqKTtcclxufSlcclxuXHJcbmpzb25HZXQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICQoXCIjc2VjdGlvbl9wb3N0VG9Eb21cIikuaHRtbChidWlsZChkYXRhKSlcclxuXHJcbn0pXHJcblxyXG4iXX0=
