"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./reactcombo.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReactSelectDropDown = function ReactSelectDropDown(props) {
  var data = props.data,
      label = props.label,
      multi = props.multi,
      name = props.name,
      required = props.required,
      width = props.width,
      onChange = props.onChange;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      allData = _useState2[0],
      setAllData = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      showComboBox = _useState6[0],
      setShowComboBox = _useState6[1];

  (0, _react.useEffect)(function () {
    if (allData.length == 0) {
      var tempStorage = [];
      data.map(function (v) {
        tempStorage.push({
          "value": v.value ? v.value : v,
          "label": v.label ? v.label : v,
          "show": false
        });
      });
      setAllData(tempStorage);
    }
  }, [data]);

  var columnsdata = _toConsumableArray(allData);

  var onColumnCheck = function onColumnCheck(e, column) {
    column.show = e.target.checked;
    var temp = [];

    if (multi) {
      columnsdata.map(function (v) {
        if (v.show == true) {
          temp.push(v.value);
        }
      });
    } else {
      var checkboxes = document.getElementsByName('check');
      checkboxes.forEach(function (item) {
        if (item.defaultValue !== column.value) item.checked = false;
      });
      temp.push(column.value);
      setValue(temp);
    }

    if (onChange) {
      onChange(temp);
    }
  };

  var comboboxButtonStyle = {
    width: width ? width : "180px",
    height: "36px",
    borderRadius: ".25rem",
    fontSize: "16px"
  };
  var comboboxSize = {
    width: width ? width : "180px"
  };
  return _react["default"].createElement("div", {
    className: "combobox-container"
  }, _react["default"].createElement("div", {
    className: "combobox"
  }, _react["default"].createElement("button", {
    type: "button",
    style: comboboxButtonStyle,
    onClick: function onClick() {
      return setShowComboBox(!showComboBox);
    }
  }, value.length && multi ? "".concat(value.length, " options selected") : value.length ? "".concat(value[0]) : "Select ".concat(label)), _react["default"].createElement("div", {
    style: comboboxSize,
    className: "combobox-over",
    hidden: showComboBox
  }, _react["default"].createElement("div", {
    className: "arrow"
  }), _react["default"].createElement("div", {
    className: "combobox-body"
  }, _react["default"].createElement("ul", {
    style: comboboxSize,
    className: "combobox-column-list"
  }, allData.map(function (v) {
    return _react["default"].createElement("li", {
      key: v.value
    }, _react["default"].createElement("input", {
      className: "checkbox-style",
      type: "checkbox",
      value: v.value,
      name: "check",
      defaultChecked: v.show,
      onChange: function onChange(e) {
        onColumnCheck(e, v);
      }
    }), _react["default"].createElement("span", null, v.label));
  }))))), _react["default"].createElement("input", {
    type: "hidden",
    value: value,
    name: name,
    required: required || false
  }));
};

var _default = ReactSelectDropDown;
exports["default"] = _default;
