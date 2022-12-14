import React, { ReactNode } from 'react';
import { positionValues, Scrollbars } from 'react-custom-scrollbars-2';

export interface ScrollbarProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  onStop?(values: positionValues): void;
  children?: ReactNode;
}

interface ScrollbarComponent extends React.FunctionComponent<ScrollbarProps> {}

const Scrollbar: ScrollbarComponent = (props) => {
  const { children, className, width = '100%', height = '100%', style = {}, onStop } = props;
  const scrollRef = React.useRef<Scrollbars>(null);

  const _scrollStop = () => {
    scrollRef.current && onStop && onStop(scrollRef.current.getValues());
  };

  return (
    <Scrollbars
      ref={scrollRef}
      style={{ ...style, width, height, minHeight: height }}
      className={className}
      onScrollStop={_scrollStop}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
