"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var css = require("dom-css");

var ReactStyleStreamedElem = function (_React$Component) {
    _inherits(ReactStyleStreamedElem, _React$Component);

    function ReactStyleStreamedElem(props) {
        _classCallCheck(this, ReactStyleStreamedElem);

        return _possibleConstructorReturn(this, (ReactStyleStreamedElem.__proto__ || Object.getPrototypeOf(ReactStyleStreamedElem)).call(this, props));
    }

    _createClass(ReactStyleStreamedElem, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.styleSubscription = this.props.styleStream.subscribe(function (style) {
                _this2.__style = style;
                css(_this2.targetElem, style);
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.styleSubscription.unsubscribe();
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var props = _.assign({}, this.props, {
                tagName: null, styleStream: null,
                style: this.__style
            });
            return React.createElement(this.props.tagName, Object.assign({}, props, {
                ref: function ref(targetElem) {
                    _this3.targetElem = targetElem;
                }
            }), this.props.children);
        }
    }]);

    return ReactStyleStreamedElem;
}(React.Component);

exports.default = ReactStyleStreamedElem;