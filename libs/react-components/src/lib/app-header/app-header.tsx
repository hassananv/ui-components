import React, { FC } from "react";

interface WCProps {
  heading?: string;
  url?: string;
  maxcontentwidth?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-app-header": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

interface Props {
  heading?: string;
  url?: string;
  maxContentWidth?: string;
  children?: React.ReactNode;
  testId?: string;
}

export const GoAAppHeader: FC<Props> = ({
  heading,
  url,
  maxContentWidth,
  testId,
  children,
}) => {
  return (
    <goa-app-header
      heading={heading}
      url={url}
      maxcontentwidth={maxContentWidth}
      data-testid={testId}
    >
      {children}
    </goa-app-header>
  );
};

export default GoAAppHeader;
