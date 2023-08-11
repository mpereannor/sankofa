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



export const Menu = ({ size = 21, color = "#ffffff", ...props }) => (
<svg
width={size}
height={size}
fill={color}
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
{...props}
>
<path
fillRule="evenodd"
d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm7.2 6a1.2 1.2 0 0 1 1.2-1.2h7.2a1.2 1.2 0 1 1 0 2.4H12a1.2 1.2 0 0 1-1.2-1.2Z"
clipRule="evenodd"
/>
</svg>
);


export const Close = ({ size = 21, color = "#ffffff", ...props }) => (
<svg
width={size}
height={size}
fill={color}
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
{...props}
>
<path
fillRule="evenodd"
d="M5.152 5.152a1.2 1.2 0 0 1 1.696 0L12 10.303l5.152-5.151a1.2 1.2 0 1 1 1.696 1.696L13.697 12l5.151 5.152a1.2 1.2 0 0 1-1.696 1.696L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.696L10.303 12 5.152 6.848a1.2 1.2 0 0 1 0-1.696Z"
clipRule="evenodd"
/>
</svg>
);


export const Cart = ({ size = 21, strokeWidth = 1, color = "#ffffff", ...props }) => (
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
<path d="M15.586 17.586a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828Z" />
<path d="M8.414 20.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828Z" />
<path d="m7 13-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
<path d="M5.4 5H21l-4 8H7L5.4 5Z" />
<path d="M3 3h2l.4 2" />
</svg>
);

