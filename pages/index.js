import Nav from '../components/nav';

export default function IndexPage({ products }) {
  return (
    <div>
      <Nav />
      <div className='hero'>
        <h1 className='title'>Coffee club</h1>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.TABLE_KEY}/menu`,
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
      },
    }
  );
  const data = await res.json();

  const products = data.records.map(product => product.fields);

  console.log(products);

  return {
    props: {
      products,
    },
  };
}
