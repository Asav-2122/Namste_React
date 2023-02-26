import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err = useRouteError();  // useRouterError() hook returns object 
    // console.log(err)
    // const {status,statusText} = useRouteError();  we can do destructuring also 
    return(
        <>
        <h1>Oops!!</h1>
        <h2>Something Went Wrong.</h2>
        <h2>{err.data}</h2>
        <h2>{err.status+" : "+err.statusText}</h2>
        </>
    )
}

export default Error;