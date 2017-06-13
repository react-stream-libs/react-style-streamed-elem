"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const react_dom_1 = require("react-dom");
const css = require("dom-css");
class ReactStreamedText extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const targetDOM = react_dom_1.findDOMNode(this.refs.targetDOM);
        this.styleSubscription = this.props.styleStream
            .subscribe((style) => {
            this.__style = style;
            css(targetDOM, style);
        });
    }
    componentWillUnmount() {
        this.styleSubscription.unsubscribe();
    }
    render() {
        const props = _.assign({}, this.props, {
            tagName: null, styleStream: null,
            style: this.__style,
        });
        return React.createElement(this.props.tagName, Object.assign({}, props, {
            ref: 'targetDOM',
        }), this.props.children);
    }
}
exports.default = ReactStreamedText;
