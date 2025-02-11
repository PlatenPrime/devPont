import { trpc } from "../../lib/trpc";

export const AllFosPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getFos.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1>All foundouts</h1>
      {data.fos.map((fo) => (
        <div key={fo.id}>
          <h2>{fo.title}</h2>
          <p>{fo.description}</p>
        </div>
      ))}
    </>
  );
};
