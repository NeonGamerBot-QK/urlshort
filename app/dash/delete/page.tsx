"use client";
import Cookies from "js-cookie"
import { SyntheticEvent, useRef, useState } from "react";

/**
 * 
 * Types for search params
 * @tutorial https://stackoverflow.com/questions/74889841/how-to-get-query-params-using-server-component-next-13
 */
export default function Delete({ searchParams }: { searchParams?: { [key: string]: string  | undefined }; }) {
    const my_modal_2 = useRef (null)
// types
// @ts-ignore
const sid = searchParams ? searchParams.id && !isNaN(searchParams.id) ?  searchParams.id : null : null
const [id ,setID ] = useState (sid ?? 0);
const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
      
    console.log("#form")
     
    // const data = JSON.stringify({ id })
// console.log(data)
    fetch("/api/delete?id="+id, {
        method: "DELETE",
        // body: data,
        //  headers
        headers: {
            "Content-Type": "application/json",
            "Authorization": Cookies.get("password") ?? ""
        }

    }).then((data) => {
      console.log(data)
if(data.status !== 204) {
    data.text().then(console.error)
}
      //  show model using REF
     if(my_modal_2.current)  {
      // @ts-expect-error
      my_modal_2.current.showModal()
     } else {
      alert(`File Deleted!`)
     }
    })
}
// console.log("ID", id, searchParams)
return <>
<div className="items-stretch min-h-screen p-5 rounded-lg bg-base-200 hover:items-baseline sm:pl-96 ">
   <h1 className="text-2xl font-bold ">Delete Link</h1>
   <form id="deleteForm" onSubmit={onSubmit}>
<label className="label"> ID </label>
<input type="number" className="input w-full max-w-xs" onChange={(e) => setID(e.target.value)} value={id} />
      <input className="m-5 ml-10 btn btn-neutral" type="submit"  />
   </form>
</div>

<dialog id="my_modal_2" ref={my_modal_2}  className="modal">
    <form method="dialog" className="modal-box" action="/e+5">
      <h3 className="font-bold text-lg">URL Deleted!</h3>
    </form>
    <form method="dialog" className="modal-backdrop"   action="/e+5">
        <button>close</button>
    </form>
  </dialog>
</>
}