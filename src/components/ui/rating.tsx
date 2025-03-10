const FullStar = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={13}
        height={11}
        fill="none"
        {...props}
    >
        <title>FullStar</title>
        <path
            fill="#0953E9"
            d="M6.645 9.226 9.412 10.9a.665.665 0 0 0 .993-.72l-.733-3.147 2.447-2.12a.665.665 0 0 0-.38-1.167l-3.22-.273L7.259.5a.667.667 0 0 0-1.227 0l-1.26 2.966-3.22.274a.665.665 0 0 0-.38 1.167l2.447 2.12-.734 3.146a.665.665 0 0 0 .994.72l2.766-1.667Z"
        />
    </svg>
)

const EmptyStar = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={11}
        fill="none"
        {...props}
    >
        <title>EmptyStar</title>
        <path
            fill="#0953E9"
            d="M5.823 9.226 8.59 10.9a.665.665 0 0 0 .993-.72L8.85 7.033l2.446-2.12a.665.665 0 0 0-.38-1.167l-3.22-.273L6.436.5A.667.667 0 0 0 5.21.5L3.95 3.466.73 3.74a.665.665 0 0 0-.38 1.167l2.446 2.12-.733 3.146a.665.665 0 0 0 .993.72l2.767-1.667Z"
        />
        <path
            fill="#fff"
            d="M5.823 7.887v-6.2l1.14 2.693 2.92.253-2.213 1.92.666 2.854-2.513-1.52Z"
        />
        <path
            fill="#fff"
            d="M5.823 7.887v-6.2L4.683 4.38l-2.92.253 2.213 1.92-.666 2.854 2.513-1.52Z"
        />
    </svg>
)
const HalfStar = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={11}
        fill="none"
        {...props}
    >
        <title>Half Star</title>
        <path
            fill="#0953E9"
            fillRule="evenodd"
            d="m7.872 3.46 3.227.28c.587.046.82.78.373 1.167l-2.446 2.12.733 3.153a.665.665 0 0 1-.993.72L5.999 9.226l-2.767 1.667a.665.665 0 0 1-.993-.72l.733-3.146-2.446-2.12a.665.665 0 0 1 .38-1.167l3.22-.274L5.386.494c.226-.54 1-.54 1.226 0l1.26 2.967ZM6 1.78v6.2L8.512 9.5l-.666-2.854 2.213-1.92-2.92-.253L6 1.78Z"
            clipRule="evenodd"
        />
    </svg>
)

const RatingStar = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex gap-1">
            {[...Array(fullStars)].map((_, index) => (
                <FullStar key={`fullstar${index + 1}`} />
            ))}
            {hasHalfStar && <HalfStar />}
            {[...Array(emptyStars)].map((_, index) => (
                <EmptyStar key={`emptyStar${index + 1}`} />
            ))}
        </div>
    );
};
export default RatingStar