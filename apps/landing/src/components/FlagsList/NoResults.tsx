const NoResults = ({ q }: { q: string }) => {
  return (
    <h2 className="text-2xl text-center py-20">
      No results for &quot;{q}&quot;
    </h2>
  );
};

export default NoResults;
