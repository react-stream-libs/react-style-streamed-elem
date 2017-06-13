/// <reference types="react" />
import * as React from 'react';
import { Observable, Subscription } from 'rxjs';
import { HTMLAllElementsType } from './HTMLAllElementType';
export declare type StyleStreamType = Observable<React.CSSProperties>;
export declare type PropsType = React.HTMLProps<HTMLAllElementsType> & {
    tagName: string;
    styleStream: StyleStreamType;
    style?: null;
};
export default class ReactStreamedText extends React.Component<PropsType, void> {
    __style?: React.CSSProperties;
    styleSubscription: Subscription;
    refs: {
        [key: string]: HTMLElement;
        targetDOM: HTMLHeadingElement;
    };
    constructor(props: PropsType);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.DOMElement<Readonly<{
        children?: React.ReactNode;
    }> & Readonly<PropsType> & {
        tagName: any;
        styleStream: any;
        style: React.CSSProperties;
    } & {
        ref: string;
    }, Element>;
}
