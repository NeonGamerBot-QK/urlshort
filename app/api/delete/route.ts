// import prisma 
import prisma from "../../../lib/prisma";
function getJSON(body: string) {
 try {

    let json = JSON.parse(body);
    return json;
} catch (e) {
    return null;
}
}
export async function DELETE(request: Request) {
    const auth = request.headers.get("Authorization")
if(auth !== process.env.PASSWORD) return new Response(JSON.stringify({ message: "error: Invalid Auth!" }), {
    status: 401,
})
    // get body in json
  const queries = new URL(request.url).searchParams;
    if(!queries.get("id")) return new Response(JSON.stringify({ message: "error: no id!" }), {
        status: 400,
    })
    // @ts-expect-error
    if(isNaN(queries.get("id"))) return new Response(JSON.stringify({ message: "error:  query:id is not an int!!" }), {
        status: 400,
    })
  return await  prisma.url.delete({
        where: {
            id: parseInt(queries.get("id") ?? "")
        }
    }).then((res) => {
        // console.log(res, `json: ${JSON.stringify(res)}`)
    return new Response("", { status: 204 })
    })
}