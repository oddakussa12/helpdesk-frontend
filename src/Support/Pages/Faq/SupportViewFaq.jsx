import { useNavigate, useParams } from "react-router-dom";
import { useShowFaqQuery } from "./Api/supportFaqApi";

const SupportViewFaq = () => {
  let navigate = useNavigate();
  const { faqId } = useParams();

  const { data: faq } = useShowFaqQuery(faqId);

  return (
    <div className="px-3 mt-10">
      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
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
                    <small className="mt-5">Status</small>
                    <b>({faq.approved ? "Approved" : "Pending"})</b>
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
  )
}

export default SupportViewFaq
