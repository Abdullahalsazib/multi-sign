import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function App() {
  const formArray = [1, 2, 3, 4];
  const [fromNo, setFormno] = useState(formArray[0]);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    varsity: "",
    session: "",
    address: "",
    district: "",
    thana: "",
    post: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (fromNo === 1 && state.name && state.email && state.phone) {
      setFormno(fromNo + 1);
    } else if (
      fromNo === 2 &&
      state.varsity &&
      state.session &&
      state.address
    ) {
      setFormno(fromNo + 1);
    } else if (fromNo === 3 && state.district && state.thana && state.post) {
      setFormno(fromNo + 1);
    } else {
      toast.error("Please Enter Your Data ❗❗❗");
    }
  };
  const pre = () => {
    setFormno(fromNo - 1);
  };

  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success("Your Data Is Submited 🌺");
      console.log(state);
    } else {
      toast.error("Please Enter your Data ❗❗❗");
    }
  };
  return (
    <>
      <div className=" capitalize font-semibold w-screen h-screen bg-slate-500 flex items-center justify-center">
        <ToastContainer />
        <div className="card w-[670px] rounded-md shadow-md bg-white p-5">
          <div className="flex items-center justify-center">
            <h1 className=" text-[30px] uppercase text-black font-semibold">
              Sign up Form
            </h1>
          </div>
          <div className=" flex items-center justify-center">
            {formArray.map((v, i) => (
              <>
                <div
                  className={` w-[35px] ${
                    fromNo - 1 === i ||
                    fromNo - 1 === i + 1 ||
                    fromNo - 1 === i + 2 ||
                    fromNo === formArray.length
                      ? " bg-purple-500"
                      : " bg-slate-400"
                  } my-3 text-white rounded-full h-[35px] flex items-center justify-center `}
                >
                  {v}
                </div>
                {i !== formArray.length - 1 && (
                  <div
                    className={`w-[85px] h-[2px]  ${
                      fromNo === i + 2 ||
                      fromNo === i + 3 ||
                      fromNo == formArray.length
                        ? " bg-purple-500"
                        : "bg-slate-400"
                    }`}
                  ></div>
                )}
              </>
            ))}
          </div>
          {fromNo === 1 && (
            <div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="name">Name</label>
                <input
                  value={state.name}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="text"
                  name="name"
                  placeholder="name:"
                  id="name"
                />
              </div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="name">email</label>
                <input
                  value={state.email}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="email"
                  name="email"
                  placeholder="email:"
                  id="email"
                />
              </div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="phone">phone</label>
                <input
                  value={state.phone}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="number"
                  name="phone"
                  placeholder="+8801XXXXXXXXX"
                  id="phone"
                />
              </div>
              <div className=" mt-4 flex items-center justify-center">
                <button
                  onClick={next}
                  className=" font-semibold px-3 py-2 text-lg rounded-md w-full  bg-purple-600 hover:bg-purple-500 duration-200 text-white capitalize"
                >
                  Next🔜
                </button>
              </div>
            </div>
          )}
          {fromNo === 2 && (
            <div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="varsity">Collage / varsity</label>
                <input
                  value={state.varsity}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="text"
                  name="varsity"
                  placeholder="Collage / varsity:"
                  id="varsity"
                />
              </div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="session">session</label>
                <input
                  value={state.session}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="text"
                  name="session"
                  placeholder="session:"
                  id="session"
                />
              </div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="address">address</label>
                <textarea
                  value={state.address}
                  onChange={inputHandle}
                  row="6"
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="text"
                  name="address"
                  placeholder="address:"
                  id="address"
                ></textarea>
              </div>
              <div className=" mt-4 flex items-center gap-3 justify-center">
                <button
                  onClick={pre}
                  className=" px-3 py-2 text-lg rounded-md w-full bg-slate-500 opacity-50 hover:opacity-100 duration-200  text-white capitalize"
                >
                  🔙Back
                </button>
                <button
                  onClick={next}
                  className=" px-3 py-2 text-lg rounded-md w-full  bg-purple-600 hover:bg-purple-500 duration-200 text-white capitalize"
                >
                  Next🔜
                </button>
              </div>
            </div>
          )}
          {fromNo === 3 && (
            <div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="district">District</label>
                <input
                  value={state.district}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="text"
                  name="district"
                  placeholder="district:"
                  id="district"
                />
              </div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="thana">Thana</label>
                <input
                  value={state.thana}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="text"
                  name="thana"
                  placeholder="thana:"
                  id="thana"
                />
              </div>
              <div className=" flex flex-col mb-2">
                <label htmlFor="post">post</label>
                <input
                  value={state.post}
                  onChange={inputHandle}
                  className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-purple-500 rounded-md"
                  type="text"
                  name="post"
                  placeholder="post:"
                  id="post"
                />
              </div>
              <div className=" mt-4 flex items-center gap-3 justify-center">
                <button
                  onClick={pre}
                  className=" px-3 py-2 text-lg rounded-md w-full bg-slate-500 opacity-50 hover:opacity-100 duration-200  text-white capitalize"
                >
                  🔙Back
                </button>
                <button
                  onClick={next}
                  className=" px-3 py-2 text-lg rounded-md w-full bg-purple-600 hover:bg-purple-500 duration-200 text-white capitalize"
                >
                  Next🔜
                </button>
              </div>
            </div>
          )}
          {fromNo === 4 && (
            <div className=" rounded-md p-5  bg-white">
              <ul className=" space-y-1 capitalize text-black font-serif font-semibold">
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your name : {state.name}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between space-x-2 rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                 <div className=" flex items-center">
                 <h1>Your Email : </h1>
                  <h1 className=" lowercase">
                    {state.email}
                  </h1>
                 </div>
                    <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your phone no : {state.phone}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your Collage / Varsity : {state.varsity}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your Session : {state.session}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your Address : {state.address}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your District : {state.district}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your Thana : {state.thana}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
                <li className=" flex items-center justify-between rounded-md bg-slate-300 hover:text-white py-3 px-3 hover:bg-slate-500 duration-200 ">
                  Your Post : {state.post}
                  <MdOutlineVerifiedUser className=" text-[23px] text-green-600" />
                </li>
              </ul>

              <div className=" mt-4 flex items-center gap-3 justify-center">
                <button
                  onClick={pre}
                  className=" px-3 py-2 text-lg rounded-md w-full bg-slate-500 opacity-50 hover:opacity-100 duration-200  text-white capitalize"
                >
                  🔙Back
                </button>
                <button
                  onClick={finalSubmit}
                  className=" px-3 py-2 text-lg rounded-md w-full  bg-green-600 hover:bg-green-500 duration-200 text-white capitalize"
                >
                  Submit 🥇
                </button>
              </div>
              <small className=" lowercase">@abdullah_al_sazib🥰</small>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
