import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQList = [
    { 
        id: "9S8d7F5g4H2j1K1m2N3p4Oa",
        question: "What is Frontend Mentor, and how will it help me?",
        response: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    }, 
    { 
        id: "M2N3p4O9S8d7F5g4H2j1K3b",
        question: "Is Frontend Mentor free?",
        response: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    { 
        id: "a1b2C9d8E7f5g4H2j1K2l9M",
        question: "Can I use Frontend Mentor projects in my portfolio?",
        response: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        id: "b2C9d8E7f5g4H2j1K1m2N3pO",
        question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        response: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }];

const FAQBody = () => {
    const [state, setState] = useState({
        id: "9S8d7F5g4H2j1K1m2N3p4Oa"
    });
    const onToggle = (self) => {
        if (self === state.id) {
            return;
        }
        setState({ id: self });
    }
    
    return (
        <div className="">
            {FAQList.map((item, indx) => (
                <FAQItem key={indx} 
                    item={item} 
                    mark={state.id}
                    func={onToggle}
                />
            ))}
        </div>
    );
}

export default FAQBody;