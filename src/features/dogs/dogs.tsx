import { useState } from "react";

import { useFetchBreedsQuery } from "./dogsApiSlice";
import LoadingIndicator from "../../common/components/loadingIndicator/loadingIndicator";

const Dogs = () => {
  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  if (isFetching) return <LoadingIndicator />;

  console.log("data", data);

  return (
    <>
      <div>
        <p>Dogs to fetch:</p>
        <select
          value={numDogs}
          onChange={({ target: { value } }) => setNumDogs(Number(value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id} data-testid="dog-breed">
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height="250" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dogs;
