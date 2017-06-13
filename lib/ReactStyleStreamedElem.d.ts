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
export default class ReactStyleStreamedElem extends React.Component<PropsType, void> {
    targetElem: HTMLElement;
    __style?: React.CSSProperties;
    styleSubscription: Subscription;
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
        ref: (targetElem: HTMLElement) => void;
    }, Element>;
}
