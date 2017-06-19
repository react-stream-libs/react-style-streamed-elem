import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Observable,
  Scheduler,
} from 'rxjs';
import getCSS2DTransform from './getCSS2DTransform';
import ReactStyleStreamedElem from '../../src/ReactStyleStreamedElem';

const intervalStream = Observable
  .interval(0, Scheduler.animationFrame);
storiesOf('ReactStyleStreamedElem', module)
  .add('testWithInterval', () => {
    intervalStream.subscribe(() => console.log('!'));
    return (
      <ReactStyleStreamedElem
        styleStream={intervalStream.map(
          interval => ({
            transform: getCSS2DTransform({
              translateX: (interval % 1000),
            }),
            x: 10,
            y: 20,
            width: 100, height: 100,
            backgroundColor: 'purple',
            fill: 'purple',
          })
        )}
        tagName="div"
      />
    )
  })
  ;