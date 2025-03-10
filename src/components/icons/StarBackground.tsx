import * as React from "react"
const StarBackground = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={96}
        height={91}
        fill="none"
        {...props}
    >
        <title>Star Background</title>
        <path
            fill="#B8D1FE"
            fillOpacity={0.7}
            d="m48 0 11.226 34.55h36.327l-29.39 21.352L77.39 90.45 48 69.098 18.61 90.451 29.837 55.9.447 34.55h36.327L48 0Z"
        />
    </svg>
)
export default StarBackground
