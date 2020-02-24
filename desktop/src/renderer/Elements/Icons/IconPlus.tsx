import * as React from 'react';

export const IconPlus: React.FunctionComponent<{}> = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="20px"
      width="20px"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};
