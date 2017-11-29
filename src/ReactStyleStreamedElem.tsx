import * as React from 'react';
import * as _ from 'lodash';
import {
  Observable,
  Subscription,
} from 'rxjs';

import { HTMLAllElementsType } from './HTMLAllElementType';
import css = require('dom-css');

export type StyleStreamType = Observable<React.CSSProperties>;

export type PropsType = React.HTMLProps<HTMLAllElementsType> &
{
  tagName: string,
  styleStream: StyleStreamType,
  style?: null,
};

export default class ReactStyleStreamedElem
    extends React.Component<PropsType> {
  targetElem: HTMLElement;
  __style?: React.CSSProperties;
  styleSubscription: Subscription;
  constructor(props: PropsType) {
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
    this.styleSubscription && this.styleSubscription.unsubscribe();
  }
  render() {
    const props = _.assign({}, this.props, {
      tagName: null, styleStream: null,
      style: this.__style,
    });
    return React.createElement(
      this.props.tagName, Object.assign({}, props, {
        ref: (targetElem: HTMLElement) => {
          this.targetElem = targetElem;
        },
      }), this.props.children
    );
  }
}
