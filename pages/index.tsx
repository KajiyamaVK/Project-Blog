import Head from 'next/head'
import SearchBanner from '../public/components/SearchBanner'

export default function Home() {

  const websiteTitle: String = "Fullstacker | Home"!;
  const websiteDescription: String = 'Com artigos sobre as melhores novidades para desenvolvimento de aplicações, o Fullstacker traz'!;

  return (
    <>

      <Head>
        <title>{websiteTitle}</title>
        <meta charSet='UTF-8'/>
        <meta name="description" content={`${websiteDescription}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href= "../images/favicon.ico" />
      </Head>
      <SearchBanner />
      
    </>
  )
}
