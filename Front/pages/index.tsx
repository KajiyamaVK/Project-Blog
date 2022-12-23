import Head from 'next/head'



export default function Home() {

  const websiteTitle = "Fullstacker | Home"! as String;
  const websiteDescription = 'Com artigos sobre as melhores novidades para desenvolvimento de aplicações, o Fullstacker traz'! as String;

  return (
    <>
      

      <Head>
        <title>{websiteTitle}</title>
        <meta charSet='UTF-8'/>
        <meta name="description" content={`${websiteDescription}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  )
}
