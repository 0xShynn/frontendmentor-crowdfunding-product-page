import * as React from 'react';

function IconBookmark(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      width={props.size}
      height={props.size}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle fill={props.bgcolor} cx={28} cy={28} r={28} />
        <path fill={props.color} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}

export default IconBookmark;
