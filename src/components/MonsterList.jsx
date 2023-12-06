import * as React from "react";
import { useGetMonstersByNameQuery } from "../feature/api/RTK-query";

const MonsterList = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetMonstersByNameQuery("aboleth");

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.name}</h3>
          <h4> {data.speed.walk} </h4>
        </>
      ) : null}
    </div>
  );
};

export default MonsterList;
