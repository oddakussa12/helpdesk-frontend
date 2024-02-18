import { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmModal from "../../../common/ConfirmModal";
import useSupportFaqService from "./Api/faq.service"
import { PencilIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import parse from "html-react-parser";
import { useGetAllFaqsQuery } from "./Api/supportFaqApi";

const SupportFaq = () => {

  const {
    deleteFaq
  } = useSupportFaqService();

  const { data:faqs, isLoading} = useGetAllFaqsQuery();

  const [selectedItem, setSelectedItem] = useState({});

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleShowConfirmModal = (faq) => {
    setSelectedItem(faq);
    setShowConfirmModal(true);
  }
  const handleCloseConfirmModal = () => setShowConfirmModal(false);

  return (
    <div className="px-3 mt-10">
      <ConfirmModal
        showConfirmModal={showConfirmModal}
        handleCloseConfirmModal={handleCloseConfirmModal}
        selectedItem={selectedItem}
        deleteAction={deleteFaq}
        // fetchAction={fetchFaqs}
      />
      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid-cols-1">
              <h2 className="card-title">FAQs</h2>
            </div>
            <div className="grid grid-cols-1 place-items-end">
              <label
                className="btn btn-warning btn-sm"
              >
                <Link to="/support/create-faq">Create New</Link>
              </label>
            </div>
          </div>
          <div className="overflow-x-auto">
            {/* cards */}
            {faqs?.length ? (
              faqs.map((faq, index) => (
                <div className="card bg-base-200 mt-4" key={index} style={{ borderRadius: '8px' }}>
                  <div className="card-body p-1">
                    <div className="flex flex-nowrap">
                      <div className="basis-3/4">
                        <b>{parse(faq.question?.toString().substring(0, 130))}</b>
                        <p className='ml-5'>{parse(faq.answer?.toString().substring(0, 170))}</p>
                      </div>
                      <div className="basis-1/4 flex items-center justify-end">
                        {
                          faq.approved ? (
                            <div className="badge badge-success gap-2" style={{ width: '110px' }}>Approved</div>
                          ) : (
                            <div className="badge badge-info gap-2" style={{ width: '110px' }}>Not approved</div>
                          )
                        }
                        <div className="btn-group ml-10">
                          <Link to={`/support/edit-faq/${faq._id}`} className="btn btn-sm">
                            <PencilIcon className="h-4 w-4 text-warning" />
                          </Link>
                          <Link to={`/support/view-faq/${faq._id}`} className="btn btn-sm">
                            <EyeIcon className="h-4 w-4 text-success" />
                          </Link>

                          <button className="btn btn-sm">
                            <TrashIcon
                              className="h-4 w-4 text-error"
                              onClick={() => handleShowConfirmModal(faq)}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))

            ) : (
              <div className="text-center">
                {!isLoading ? (
                  <p>No records found.</p>
                ) : (
                  <span className="loading loading-spinner"></span>
                )
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default SupportFaq
