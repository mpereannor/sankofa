import * as React from "react";

export const Search = (
    { size = 21, color = "#ffffff",strokeWidth=1, ...props }
    ) => (
<svg
width={size}

height={size}
fill={color}
strokeWidth={1}
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
{...props}
>
<path
fillRule="evenodd"
d="M9.6 4.8a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6ZM2.4 9.6a7.2 7.2 0 1 1 13.068 4.171l5.78 5.78a1.2 1.2 0 0 1-1.696 1.697l-5.78-5.779A7.2 7.2 0 0 1 2.4 9.6Z"
clipRule="evenodd"
/>
</svg>
);


export const Instagram = ({ size = 21, strokeWidth = 2, color = "#ffffff", ...props }) => (
<svg
width={size}
height={size}
fill="none"
stroke={color}
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={strokeWidth}
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
{...props}
>
<rect width={size} height={size} x={2} y={2} rx={5} ry={5} />
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
<path d="M17.5 6.5h.01" />
</svg>
);

