export default function MetaTags() {
  return (
    <>
      {/* ///////////////////////////////// Beginning - Social Media Sharing configuration ///////////////////////// */}
      {/* Microsoft Meta Tags */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      {/* Facebook and Whatsapp Metatags */}
      {/* facebook required an app_id to work, but it is not necessary for Whatsapp */}
      <meta property="fb:app_id" content="130336143268909" />
      {/* DIsplay site name, title and description */}
      <meta property="og:title" content="Seu website por BAIXO CUSTO" />
      <meta
        property="og:description"
        content="Sua ideia + meu portfolio = preço baixo"
      />
      {/* Image to display in the thumbnails */}
      <meta
        property="og:image"
        itemProp="image"
        content="https://fullstacker.com.br/imgs/thumbImg.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/png" />
      {/* Any size bigger than 300px will not work on Whatsapp */}
      {/* <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" /> */}
      {/* URL to visit when clicking on the thumbnail */}
      <meta property="og:url" content="https://fullstacker.com.br" />
      <meta
        name="description"
        content="Site criado para portfolio de Victor Koiti Kajiyama"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* ///////////////////////////////// Ending - Social Media Sharing configuration ///////////////////////// */}

      <meta charSet="utf-8" />
    </>
  );
}
