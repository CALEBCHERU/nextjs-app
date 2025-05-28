export default async function Id(
    {params}: {params: Promise<{ slug: string[] }>;}
){
    const { slug } = await params;
    return(
        <div>
            <h1 className="text-red-600 text-3xl">This is the id page</h1>
           <h2>the id is : {slug}</h2> 
        </div>
    )
}