import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <div className="text-center">
            <h1 className="text-danger">Unauthorized</h1>
            <div className="link-container">
                <button onClick={goBack}
                    className="btn btn-primary">
                    Go back
                </button>
            </div>
        </div>
    )
}
