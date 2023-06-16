import { useEffect, useState } from "react";
import useWorldFaqService from "./Api/faq.service";
import parse from "html-react-parser";

const Faq = () => {
    const { getAllFaqs } = useWorldFaqService();
    const [faqs, setFaqs] = useState([]);

    const fetchFaqs = async () => {
        try {
            const response = await getAllFaqs();
            setFaqs(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchFaqs();
    }, [])
    return (
        <div className='mt-10'>
            <h1 className='text-3xl ml-3 mb-4'>Frequently asked questions</h1>
            {
                faqs?.length ? (

                    faqs.map((faq) => (
                        <div>
                            <hr />
                            <div tabIndex={0} className="collapse collapse-plus bg-base-100 rounded-box">
                                <div className="collapse-title text-xl">
                                    {faq.question}
                                </div>
                                <div className="collapse-content">
                                    <p>{parse(faq?.answer?.toString())}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <p>No faqs found.</p>
                    </div>
                )
            }
        </div>
    )
}
export default Faq
