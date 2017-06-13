"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const css = require("dom-css");
class ReactStyleStreamedElem extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.styleSubscription = this.props.styleStream
            .subscribe((style) => {
            this.__style = style;
            css(this.targetElem, style);
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
            ref: (targetElem) => {
                this.targetElem = targetElem;
            },
        }), this.props.children);
    }
}
exports.default = ReactStyleStreamedElem;
