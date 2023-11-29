import React, { useState } from "react";
import { QueryRenderer } from "@cubejs-client/react";
import numeral from "numeral";

const NumberChart = ({ cubejsApi, query, value }) => {
  const [showRaw, setShowRaw] = useState(false);
  const handleClick = () => {
    setShowRaw(!showRaw);
  };

  const numberFormatter = (item, showFormat) =>
    numeral(item).format(showFormat);

  const renderSingleValue = (resultSet, key) => {
    return (
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#1862f4",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {showRaw
          ? numberFormatter(resultSet.chartPivot()[0][key], "0,0.0000")
          : numberFormatter(resultSet.chartPivot()[0][key], "0,0")}
      </p>
    );
  };
  return (
    <QueryRenderer
      query={query}
      cubejsApi={cubejsApi}
      render={({ resultSet }) => {
        if (!resultSet) {
          return <div className="loader" />;
        }

        return renderSingleValue(resultSet, value);
      }}
    />
  );
};

export default NumberChart;
