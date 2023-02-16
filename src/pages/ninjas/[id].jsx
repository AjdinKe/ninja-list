export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { ninjas: data },
  };
};

const Details = ({ ninjas }) => {
  return (
    <div>
      <h1>{ninjas.name}</h1>
      <p>{ninjas.username}</p>
      <p>{ninjas.email}</p>
      <p>{ninjas.website}</p>
    </div>
  );
};

export default Details;
