import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import { dataContext } from "./Home";

function Login(){
    const [pwd1,setPwd1]=useState("");
    const [pwd2,setPwd2]=useState("");
    const [same,setSame]=useState(true);

    function handlePwd1Change(event){
        setPwd1(event.target.value);
        console.log(event.target.value);
    }

    function handlePwd2Change(event){
        setPwd2(event.target.value);
        console.log(pwd1,pwd2);
        if(pwd1 == event.target.value){
            console.log("Same")
            setSame(true);
        }
        else {
            console.log("Not Same")
            setSame(false);
        }
    }

    const data = useContext(dataContext)
    
    return(
        <>
            <h2>{data}</h2>
            <Counter />
            <Link to ='/'>Home</Link>
            <form className="my-5"style={{width:"50%", margin:"auto"}}>                
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Re-enter Password</label>
                    <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">I Agree</label>
                </div>
                {!same && <p>Passwords don't match</p>}
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </>
    );
}

export default Login;