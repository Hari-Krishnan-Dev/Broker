import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center font-semibold text-3xl my-7">SignUp</h1>
        <form action="" className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="border p-3 rounded-lg " id="username" />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg " id="username" />
          <input type="password" placeholder="Password" className="border p-3 rounded-lg " id="username" />
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign up</button>
          <div className="">
            <p>have an account </p>
            <Link to={"/sign-in"}>
            <span>Sign in</span></Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Signup;