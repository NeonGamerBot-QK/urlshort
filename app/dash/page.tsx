import prisma from "@/lib/prisma"

export default async function Home() {
    const items = await prisma.url.findMany()
    return <>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
        <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Dash </h1>
            <p className="py-3">
              {items.length > 0 ? 
            <ul className="menu bg-base-300 rounded-box p-2">
            {  items.map((item, index) => {
                return   <li className=" mt-5  indicator" key={index}>
            <a className="btn btn-ghost btn-small indicator-item badge"  href={`/dash/delete?id=${item.id}`}>X</a>
                   <br /> 
                    <a href={`/${item.id}`} className="text-blue-600 hover:text-blue-400">
                {item.url} ({item.id})
            </a> 
          
            </li>
              })}
            </ul>
              
              : <p className="p-5 border bg-base-300 rounded-lg"> Upload some things! </p>}
            </p>
            <a className="btn btn-primary m-2" href="/dash/create">Create a short URL</a>

        </div>
    </div>
</div>
    </>
}