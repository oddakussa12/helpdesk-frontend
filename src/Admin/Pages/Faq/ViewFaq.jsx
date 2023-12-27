import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminFaqService from "./Api/faq.service";

const ViewFaq = () => {

  let navigate = useNavigate();
  const { faqId } = useParams();

  const { showFaq, changeStatus } = useAdminFaqService();
  const [faq, setFaq] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const fetchFaq = async () => {
    try {
      const response = await showFaq(faqId);
      setFaq(response.data);
      setIsLoading(false);
      setIsBtnLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  const updateStatus = async (id) => {
    try {
      setIsBtnLoading(true);
      await changeStatus(id);
      fetchFaq();
     
    } catch (err) {
      setIsBtnLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <>
      {
        !isLoading ? (
          <div className="px-3 mt-10">
            <div className="card bg-base-100" style={{ minHeight: '600px', borderRadius: '5px' }}>
              <div className="card-body">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid-cols-1">
                    <h2 className="card-title">View FAQ</h2>
                  </div>
                  <div className="grid grid-cols-1 place-items-end">
                    <label
                      className="btn btn-warning btn-sm"
                      onClick={() => navigate(-1)}>Back
                    </label>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  {faq ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                      <div className="card bg-base-200 col-span-2" style={{ minHeight: '450px' }} >
                        <div className="card-body">
                          <b>Question</b>
                          <div className="bg-slate-100" style={{ padding: '10px', borderRadius: '10px' }}>
                            {
                              faq.question
                            }
                          </div>
                          <b>Answer</b>
                          <div className="bg-slate-200" style={{ padding: '10px', borderRadius: '10px' }}>
                            {
                              faq.question
                            }
                          </div>
                        </div>
                      </div>
                      <div className="card bg-base-200 col-span-1">
                        <div className="card-body">
                          <small>Writer</small>
                          <b>{faq.created_by?.name}</b>
                          <small>Created On</small>
                          <b>{faq.createdAt}</b>
                          <small className="mt-5">
                            Status ({faq.approved ? "Approved" : "Pending"})
                          </small>
                          {faq.approved ? (
                            <button className="btn btn-sm btn-error"
                              onClick={() => updateStatus(faq._id)}
                            >
                              {isBtnLoading? ( <span className="loading loading-spinner"></span>): "Decline"}
                            </button>
                          ) : (
                            <button className="btn btn-sm btn-success"
                              onClick={() => updateStatus(faq._id)}
                            >
                              {isBtnLoading? ( <span className="loading loading-spinner"></span>): "Approve"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>No record</p>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-60">
            <span className="loading loading-spinner"></span>
          </div>
        )
      }
    </>
  )
}

export default ViewFaq
