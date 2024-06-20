import { useState } from "react";
import {Link , useNavigate} from "react-router-dom"

const SignUp = () => {
const [formData,setFormData] = useState({});
const [error,setError] =useState(null);
const [loading,setLoading] =useState(false);
const navigate = useNavigate();
const handlechange =(e)=>{
setFormData({
  ...formData, 
  [e.target.id]:e.target.value,
});
}

const handleSubmit =async (e) =>{
  e.preventDefault();
  try {
    
    setLoading(true);
    const res=await fetch ('/api/auth/Signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
  
    });
    const data  =await res.json();
    console.log(data);
    if (data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }

    setLoading(false)
    setError(null)
    navigate('/signin')
  } catch (error) {
    setLoading(false);
    setError(error.message)
  }
}

  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center font-semibold text-3xl my-7">SignUp</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="border p-3 rounded-lg " id="username" onChange={handlechange} />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg " id="email"  onChange={handlechange}/>
          <input type="password" placeholder="Password" className="border p-3 rounded-lg " id="password" onChange={handlechange} />
          <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{ loading? 'loading...' : "Sign up"}</button>
          <div className="flex gap-2 mt-5">
            <p>have an account </p>
            <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in</span></Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}

        </form>

      </div>
    </div>
  )
}

export default SignUp;