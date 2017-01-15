import * as React from 'react';
import * as _ from 'lodash';
import { findDOMNode } from 'react-dom';
import {
  Observable,
  Subscription,
} from 'rxjs';

import { HTMLAllElementsType } from './HTMLAllElementType';
import css = require('dom-css');

export type StyleStreamType = Observable<React.CSSProperties>;

export type PropsType = {
  tagName: string,
  styleStream: StyleStreamType,
  style: null,
} & React.HTMLProps<HTMLAllElementsType>;

export type StateType = {
  style?: React.CSSProperties,
};

export default class ReactStreamedText
    extends React.Component<PropsType, StateType> {
  styleSubscription: Subscription;
  refs: {
    [key: string]: HTMLElement;
    targetDOM: HTMLHeadingElement;
  };
  constructor(props: PropsType) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const targetDOM = findDOMNode<HTMLElement>(this.refs.targetDOM);
    this.styleSubscription = this.props.styleStream
      .subscribe((style) => {
        this.state.style = style;
        css(targetDOM, style);
      });
  }
  componentWillUnmount() {
    this.styleSubscription.unsubscribe();
  }
  render() {
    const {
      style,
    } = this.state;

    const props = _.omit(this.props, ['tagName', 'styleStream']);
    return React.createElement(
      this.props.tagName, Object.assign({}, props, {
        ref: 'targetDOM',
      }), style
    );
  }
}