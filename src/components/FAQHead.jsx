import iconStar from "../assets/images/icon-star.svg";

const FAQHead = () => {
    return (
        <div className="flex items-center gap-x-3 text-3xl font-bold text-pur-140 mb-2">
            <img src={iconStar} alt="star" />
            FAQs
        </div>
    );
}

export default FAQHead;