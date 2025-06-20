export default async function Docs({
    params,
  }: {
    params: Promise<{ slug: string[] }>;
  }) {
    const { slug } = await params;
  
    if (slug?.length === 2) {
      return (
        <h1>
          Viewing docs for feature {slug[0]}  and concept {slug[1]}
        </h1>
      );
    } else if (slug?.length === 1) {
      return <h1>Viewing docs for feature {slug[0]}</h1>;
    } else if (slug?.length >= 3) {
      return (
        <h1>
          Viewing docs for feature {slug[0]} and concept {slug[1]} <br />
          Additional URLs: {slug.slice(2).join(", ")}
        </h1>
      );
    }
  
    return <h1>Docs home page <br/> add anything after the ure like : <br/> http://localhost:3000/docs/caleb/cheru/maja OR <br/> http://localhost:3000/docs/KYLIE </h1>;
  }
  