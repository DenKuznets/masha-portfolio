import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>404 Page NotFound</div>
            <button onClick={()=>navigate('/')}>Home</button>
        </>
    );
};

export default NotFound;
