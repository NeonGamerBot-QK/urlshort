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
export async function POST(request: Request) {
    const auth = request.headers.get("Authorization")
if(auth !== process.env.PASSWORD) return new Response(JSON.stringify({ message: "error: Invalid Auth!" }), {
    status: 401,
})
    // get body in json
    const body = await request.text()
    // get name from body
    let json = getJSON(body);
    if(!json) return new Response(JSON.stringify({ message: "error: no json body!" }), {
        status: 400,
    })
    if(!json.url) return new Response(JSON.stringify({ message: "error: no json:url!" }), {
        status: 400,
    })
    console.log(json)
  return await  prisma.url.create({
        data: {
            url: json.url,
        }
    }).then((res) => {
        // console.log(res, `json: ${JSON.stringify(res)}`)
    return new Response(JSON.stringify(res), { status: 201 })
    })
}