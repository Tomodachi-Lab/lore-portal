import Head from 'next/head';

const TITLE = 'Tomodachi Hub';
const DESCRIPTION =
  'Un portale in cui trovare tutti i progetti della community di DarioMocciaTwitch';

const Meta = ({ title = '', description = DESCRIPTION, image, canonical }) => {
  const completeTitle = (() => {
    if (title) return `${TITLE} | ${title}`;

    return TITLE;
  })();

  return (
    <Head>
      <title>{completeTitle}</title>
      <meta name="description" content={completeTitle} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={completeTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={completeTitle}
      />
      <meta property="og:site_name" content="Tomodachi Hub" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={completeTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
      {image ? (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      ) : (
        <></>
      )}
    </Head>
  );
};
export default Meta;
