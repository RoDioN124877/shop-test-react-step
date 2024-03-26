import { useParams } from "react-router-dom";
export const Catalog = () => {
  const { type } = useParams();

  return (
    <>
      <p>Cotalog {type}</p>
    </>
  );
};
