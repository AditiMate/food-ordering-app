import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div style={{textAlign:'center', marginTop:'60px'}}>
            <h1>Oops!!!</h1>
            <h2>Something when wrong!!</h2>
            <h3 style={{color: 'red'}}>{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;