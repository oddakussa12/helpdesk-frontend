import { Editor } from "@tinymce/tinymce-react"
import { useRef } from "react";
import { useForm } from "react-hook-form";

const CreateTicket = () => {
    const editorRef = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <h1 className="text-2xl mt-10">Create ticket and get support</h1>
            <div className="form-control py-10 ">
                <label className="label">
                    <span className="label-text">What is your issue?</span>
                </label>
                <input type="text" placeholder="Type here"
                    style={{ width: '100%' }}
                    className="input input-bordered sm:w-full" />
            </div>
            <label className="label">
                <span className="label-text">Issue description</span>
            </label>
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
            <div className="text-center mt-10" >
                <button className="btn btn-warning"
                style={{width:'200px', borderRadius:'2px' }}
                >Submit
                </button>
            </div>
        </div>
    )
}

export default CreateTicket