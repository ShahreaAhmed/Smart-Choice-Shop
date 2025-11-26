import Link from 'next/link'
import React from 'react'

export default function loginPage() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-base-200">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-2xl text-center font-bold">Login now</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

          {/* divider */}
              <div className="flex items-center justify-center gap-2 my-2">
  <div className="h-px w-16 bg-gray-300"></div>
  <span className="text-sm text-gray-500">or</span>
  <div className="h-px w-16 bg-gray-300"></div>
</div>

              {/* Google login */}
              <button
                type="button"
                // onClick={handleGoogleLogin}
                className="btn w-full bg-white text-black border-[#e5e5e5] hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  className="w-4 h-4"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                />
                Continue with Google
              </button>

              <div className="text-center mt-3">
                <p className="text-sm ">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="hover:text-[#ed0585] font-medium underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
        </fieldset>
      </div>
    </div>
    </div>
 
  )
}



// import React, { useContext, useRef, useState } from "react";
// import flower from "../assets/palm-tree-pot-isolated.png";
// import MyContainer from "./MyContainer";
// import { Link, useLocation, useNavigate } from "react-router";
// import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
// import { toast } from "react-toastify";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const [show, setShow] = useState(false);

//   const {
//     signInWithEmailAndPasswordFunc,
//     signInWithEmailFunc,
//     signOutUserFunc,
//     sendPasswordResetEmailFunc,
//     user,
//     setUser,
//     setLoading,
//   } = useContext(AuthContext);

//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";
//   const navigate = useNavigate()
//   const emailRef = useRef(null);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email?.value;
//     const password = e.target.password?.value;
//     console.log({ email, password });
//     signInWithEmailAndPasswordFunc(email, password)
//       .then((res) => {
//         setLoading(false);
//         setUser(res.user);
//         toast.success("login successful");
//         navigate(from, { replace: true });
//       })
//       .catch((e) => {
//         console.log(e);
//         toast.error(e.message);
//       });
//   };

//   const handleGoogleLogin = () => {
//     console.log("google login");
//     signInWithEmailFunc()
//       .then((res) => {
//         setLoading(false);
//         setUser(res.user);
//         toast.success("login successful");
//         navigate(from);
//       })
//       .catch((e) => {
//         console.log(e);
//         toast.error(e.message);
//       });
//   };

//   const handleForgetPassword = () => {
//     const email = emailRef.current.value;
//     sendPasswordResetEmailFunc(email)
//       .then((res) => {
//         setLoading(false);
//         toast.success("Check your email to reset password");
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

// //   console.log(user);

//   return (
//     <div className=" flex items-center justify-center relative overflow-hidden bg-linear-to-r from-[#4b7644] to-[#132A22]  py-10">
//       <MyContainer>
//         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10">
//           <div className="left_div">
//             <h2 className="md:absolute text-center md:text-5xl text-4xl font-extrabold text-white md:left-69 md:top-7">
//               Login Your Account
//             </h2>
//             <p className=" md:absolute md:text-4xl text-3xl font-extrabold md:left-113 md:top-20 text-yellow-500 text-center">
//               And Take Care Of <br />
//               Your Tree.
//             </p>
//             <img
//               className="shadow-white max-w-[450px] h-[700px] mx-auto"
//               src={flower}
//               alt=""
//             />
//           </div>

//           <div className="right_div max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
//             <h2 className="text-3xl font-bold mb-6 text-center text-amber-400">
//               Login
//             </h2>

//             <form onSubmit={handleLogin} className="space-y-4 w-[350px]">
//               <div className="relative">
//                 <label className="block text-sm font-medium mb-1 text-white">
//                   Email
//                 </label>
//                 <input
//                   className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//                   type="email"
//                   name="email"
//                   ref={emailRef}
//                   placeholder="example@gmail.com"
//                 />
//               </div>

//               <div className="relative">
//                 <label className="block text-sm font-medium mb-1 text-white">
//                   Password
//                 </label>
//                 <input
//                   className="input input-bordered w-full  focus:outline-none focus:ring-2 focus:ring-green-500"
//                   type={show ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter your password"
//                 />
//                 <span
//                   onClick={() => setShow(!show)}
//                   className="absolute right-[8px] top-[36px] cursor-pointer z-50"
//                 >
//                   {show ? <IoEyeSharp /> : <IoEyeOffSharp />}
//                 </span>
//               </div>

//               <button
//                 type="button"
//                 className="hover:underline cursor-pointer"
//                 onClick={handleForgetPassword}
//               >
//                 Forget Password?
//               </button>

//               <button type="submit" className="my-btn ">
//                 Login
//               </button>

//               {/* divider */}
//               <div className="flex items-center justify-center gap-2 my-2">
//                 <div className="h-px w-16 bg-white/30"></div>
//                 <span className="text-sm text-white/70">or</span>
//                 <div className="h-px w-16 bg-white/30"></div>
//               </div>

//               {/* Google login */}
//               <button
//                 type="button"
//                 onClick={handleGoogleLogin}
//                 className="btn w-full bg-white text-black border-[#e5e5e5] hover:bg-gray-100 transition-colors cursor-pointer"
//               >
//                 <img
//                   className="w-4 h-4"
//                   src="https://www.svgrepo.com/show/475656/google-color.svg"
//                   alt="google"
//                 />
//                 Continue with Google
//               </button>

//               <div className="text-center mt-3">
//                 <p className="text-sm text-white/80">
//                   Don't have an account?{" "}
//                   <Link
//                     to="/signup"
//                     className="text-amber-300 hover:text-white font-medium underline"
//                   >
//                     Sign up
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </MyContainer>
//     </div>
//   );
// };

// export default Login;

