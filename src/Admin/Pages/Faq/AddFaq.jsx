import { useForm } from "react-hook-form";
import useAdminFaqService from "./Api/faq.service";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddFaq = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  const editorRef = useRef();

  const { createFaq } = useAdminFaqService();

  const storeFaq = async (data) => {
    try {
      const finalData = {...data, answer: editorRef.current.getContent()}
      await createFaq(finalData);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="px-3 mt-10">
      <div className="card bg-base-100" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <div className="overflow-x-auto">
            <div className="card bg-base-100 col-span-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="card-body">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid-cols-1">
                    <h2 className="card-title">Create Faq</h2>
                  </div>
                  <div className="grid grid-cols-1 place-items-end">
                    <label
                      className="btn btn-warning btn-sm"
                      onClick={() => navigate(-1)}>Back
                    </label>
                  </div>
                </div>
                <form onSubmit={handleSubmit(storeFaq)} className="mt-2">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Question</span>
                    </label>
                    <textarea
                      className="textarea textarea-primary w-full"
                      placeholder="Question..."
                      {...register("question", {
                        required: {
                          value: true,
                          message: "Question is required",
                        },
                        minLength: {
                          value: 3,
                          message: "The minimum character allowed is 10",
                        },
                        maxLength: {
                          value: 300,
                          message: "The maximum character allowed is 300",
                        },
                      })}
                    >
                    </textarea>
                    {errors.question && (
                      <small className="text-error mt-1">{errors.question?.message}</small>
                    )}
                  </div>
                  <div className="form-control w-full mt-10">
                    <Editor
                      onInit={(event, editor) => editorRef.current = editor}
                      init={{
                        menubar: false
                      }}
                      apiKey={process.env.REACT_APP_TINY_API_KEY}
                      {...register("answer", {
                        required: {
                          value: false,
                          message: "Answer field is required",
                        }
                      })}
                    />
                    {errors.answer && (
                      <small className="text-error mt-1">{errors.answer?.message}</small>
                    )}
                  </div>
                  <div className="text-center mt-10">
                    <button className="btn btn-warning" style={{width:'150px', borderRadius:'2px'}} type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default AddFaq
