export default function Sitemap() {
  // This component will never be rendered
  return null;
}

export async function getServerSideProps({ res }) {
  // Redirect to the API route that generates the sitemap
  res.writeHead(301, {
    Location: "/api/sitemap.xml",
  });
  res.end();

  return {
    props: {},
  };
}
