import * as React from "react"
const PolygonBackground = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={79}
        height={87}
        fill="none"
        {...props}
    >
        <title>Polygon Background</title>
        <path
            fill="#B9D1FE"
            fillOpacity={0.6}
            d="M.02 49.877 71.296.687l6.962 86.322L.02 49.877Z"
        />
    </svg>
)
export default PolygonBackground