import iconPlus from "../assets/images/icon-plus.svg";
import iconLess from "../assets/images/icon-less.svg";

const FAQItem = (props) => {
    const { item, mark, func } = props;
    
    return (
        <label className="border-b-2 border-pin-970 py-5 grid grid-cols-5 items-start last:border-b-0 last:pb-0" htmlFor={item.id}>
            <input className="absolute hidden peer" 
                id={item.id}
                type="radio"
                name="radio"
                onChange={() => func(item.id)}
                checked={item.id === mark}
            />
            <button onClick={() => func(item.id)}
                className="justify-self-end">
                <img 
                    src={ item.id === mark ? iconLess : iconPlus } 
                    alt={ item.id === mark ? "less" : "plus" }
                />
            </button>
            <div className="text-pur-140 text-md leading-5 font-semibold row-start-1 col-start-1 col-end-5 hover:text-pin-150">
                {item.question}
            </div>
            <div className="text-pur-490 text-sm leading-5 col-span-full mt-3.5 hidden peer-[:checked]:block">
                {item.response}
            </div>
        </label>
    );
}

export default FAQItem;