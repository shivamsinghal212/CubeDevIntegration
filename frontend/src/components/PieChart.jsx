import React from "react";
import { QueryRenderer } from "@cubejs-client/react";
import { Pie } from "react-chartjs-2";
import { COLORS_SERIES } from "../shared/colors";
import { useDrilldownCallback } from "../shared/utils";
import { commonOptions } from "../shared/chartOptions";
import Chart from "chart.js/auto";

const PieChart = ({ cubejsApi, query, value }) => {
  const PieChartRenderer = ({
    resultSet,
    pivotConfig,
    onDrilldownRequested,
  }) => {
    const data = {
      labels: resultSet.categories(pivotConfig).map((c) => c.x),
      datasets: resultSet.series(pivotConfig).map((s) => ({
        label: s.title,
        data: s.series.map((r) => r.value),
        yValues: [s.key],
        backgroundColor: COLORS_SERIES,
        hoverBackgroundColor: COLORS_SERIES,
      })),
    };
    const getElementAtEvent = useDrilldownCallback({
      datasets: data.datasets,
      labels: data.labels,
      pivotConfig,
      onDrilldownRequested,
    });
    return (
      <Pie
        type="pie"
        data={data}
        options={commonOptions}
        getElementAtEvent={getElementAtEvent}
      />
    );
  };
  const renderChart = ({
    resultSet,
    error,
    pivotConfig,
    onDrilldownRequested,
  }) => {
    if (error) {
      return <div>{error.toString()}</div>;
    }

    if (!resultSet) {
      return <div className="loader"></div>;
    }
    console.log(resultSet);
    return (
      <PieChartRenderer
        resultSet={resultSet}
        pivotConfig={pivotConfig}
        onDrilldownRequested={onDrilldownRequested}
      />
    );
  };

  return (
    <QueryRenderer
      query={query}
      cubejsApi={cubejsApi}
      resetResultSetOnChange={false}
      render={(props) =>
        renderChart({
          ...props,
          chartType: "pie",
          pivotConfig: {
            x: [value], //"user_banks.bank_name"
            y: ["measures"],
            fillMissingDates: true,
            joinDateRange: false,
            // limit: 1000,
          },
        })
      }
      //   render={(props) => console.log(props)}
    />
  );
};

export default PieChart;
