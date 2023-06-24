import { cookies } from "next/headers";

export async function DELETE(request: Request) {
    console.log("DELETE COOKIE", cookies())
   const cookie = cookies();
   cookie.delete('password')
    return new Response(JSON.stringify({ message: "deleted" }), { status: 200 })
  }