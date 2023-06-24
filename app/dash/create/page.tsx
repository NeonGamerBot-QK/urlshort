"use client";
import { useState, SyntheticEvent, useRef } from "react";
import Cookies from "js-cookie"; 
export default function Create() {
const [url ,setUrl ] = useState("");
const [result ,setResult ] = useState("#");
const my_modal_2 = useRef(null)
// types
  const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
      
    console.log("#form")
     
    const data = JSON.stringify({ url: url.toString() })
console.log(data)
    fetch("/api/create", {
        method: "POST",
        body: data,
        //  headers
        headers: {
            "Content-Type": "application/json",
            "Authorization": Cookies.get("password") ?? ""
        }

    }).then(r => r.json()).then((data) => {
      console.log(data)
            const { id } = data
            let url = "/" + id;
setResult(window.location.protocol + "//"+window.location.host+url)
// my_modal_2.showModal(); 
      //  show model using REF
     if(my_modal_2.current)  {
      // @ts-expect-error
      my_modal_2.current.showModal()
     } else {
      alert("URL: " + result)
     }
    })
}
return <>
<div className="items-stretch min-h-screen p-5 rounded-lg bg-base-200 hover:items-baseline sm:pl-96 ">
   <h1 className="text-2xl font-bold ">Create Short URL</h1>
   <form id="createForm" onSubmit={onSubmit}>

      <div className="w-full max-w-xs form-control">
        <label className="label" >
          <span className="label-text">URL</span>
        </label>
        <input type="url" placeholder="https://saahild.com"  name="url" className="w-full max-w-xs input input-bordered"  required onChange={(e) => setUrl(e.target.value)} value={url} />
      </div>
      <input className="m-5 ml-10 btn btn-neutral" type="submit" />
   </form>
</div>

<dialog id="my_modal_2" className="modal" ref={my_modal_2}>
    <form method="dialog" className="modal-box" >
      <h3 className="text-lg font-bold">File uploaded</h3>
      <p className="py-4">You can find your file at <a href={result} className="text-blue-500 hover:text-blue-400">this link </a> ( {result} ) .</p>
    </form>
    <form method="dialog" className="modal-backdrop" >
        <button>close</button>
    </form>
  </dialog>
</>
}