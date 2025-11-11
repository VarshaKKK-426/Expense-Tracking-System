import { useEffect, useState } from "react";
import "../styles/GetQuote.css";

function GetQuote({ isOpen, onClose }) {
    const [quote, setQuote] = useState('')
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://quotes-api-self.vercel.app/quote');
            const data = await response.json();
            console.log(data);
            setQuote(data.quote)

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isOpen) {
            fetchQuote();
        }
    }, [isOpen])

    return (
        <>
            {

                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>{quote}</p>
                        <button className="close-btn" onClick={onClose}>Close</button>
                    </div>
                </div>

            }
        </>
    )
}
export default GetQuote;