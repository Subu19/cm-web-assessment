import * as React from "react"
const TestimonialsIcon = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={51}
        height={36}
        fill="none"
        {...props}
    >
        <title>Testimonial</title>
        <g fill="#0953E9" filter="url(#a)">
            <path d="M21.207 5.475c1.071-.328 1.52-1.262 1.037-2.018L20.55.859c-.483-.732-1.658-1.06-2.695-.732-2.937.908-5.459 2.094-7.463 3.532C7.94 5.349 6.28 7.29 5.382 9.435 4.484 11.605 4 14.555 4 18.314v7.743c0 .833.933 1.514 2.073 1.514h13.58c1.14 0 2.072-.681 2.072-1.514v-9.913c0-.832-.933-1.513-2.073-1.513h-6.496c.07-2.548.899-4.59 2.419-6.13 1.244-1.235 3.11-2.244 5.632-3.026ZM45.601 5.475c1.071-.328 1.52-1.261 1.037-2.018L44.944.885c-.483-.732-1.658-1.06-2.695-.732-2.902.908-5.39 2.094-7.428 3.506-2.454 1.715-4.146 3.658-5.045 5.802-.899 2.118-1.347 5.07-1.347 8.853v7.744c0 .832.933 1.514 2.073 1.514H44.08c1.14 0 2.073-.681 2.073-1.514v-9.913c0-.833-.933-1.513-2.073-1.513h-6.53c.069-2.548.898-4.591 2.418-6.13 1.244-1.236 3.11-2.245 5.632-3.027Z" />
        </g>
        <defs>
            <filter
                id="a"
                width={50.831}
                height={35.571}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_114_2682"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_114_2682"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
export default TestimonialsIcon
