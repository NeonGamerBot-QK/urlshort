"use server";
import prisma from "../../lib/prisma";
import { redirect } from 'next/navigation';
import Page404 from "./404"
export default async function Page({
    params    
  }: {
    params: { id: string }
  }) {
    // HOW AM I SUPPOSED TO SEE IF ITS A NOT A NUMBER IF I HAVE TO MAKE A NUMBER
    // @ts-expect-error
    if(isNaN(params.id)) return <Page404 params={params} />
    return prisma.url.findUnique({
        where: {
            id: parseInt(params.id),
        },
     }).then((obj) => {
        if(obj) {
            // console.log(obj)
        return prisma.url.update({
            where: {
                id: parseInt(params.id),
            },
            data: {
                visits: obj.visits + 1,
            },
        }).then(() => {
            // console.log(obj, 'obj')
          
            // console.log(Children, 'children')
            // WE LOVE TYPESCRIPT :D
    redirect(obj.url)
        })
    
    } else {
        return <Page404 params={params} />
    }
     })
}