import React from "react";
import { QueryRenderer } from "@cubejs-client/react";
import { Line } from "react-chartjs-2";
import { COLORS_SERIES } from "../shared/colors";
import { useDrilldownCallback } from "../shared/utils";
import { commonOptions } from "../shared/chartOptions";
import { useDeepCompareMemo } from "use-deep-compare";

// import Chart from "chart.js/auto";

const LineChart = ({ cubejsApi, query, value }) => {
  const LineChartRenderer = ({
    resultSet,
    pivotConfig,
    onDrilldownRequested,
  }) => {
    const datasets = useDeepCompareMemo(
      () =>
        resultSet.series(pivotConfig).map((s, index) => ({
          label: s.title,
          data: s.series.map((r) => r.value),
          yValues: [s.key],
          borderColor: COLORS_SERIES[index],
          pointRadius: 1,
          tension: 0.1,
          pointHoverRadius: 1,
          borderWidth: 2,
          tickWidth: 1,
          fill: false,
        })),
      [resultSet, pivotConfig]
    );
    const data = {
      labels: resultSet.categories(pivotConfig).map((c) => c.x),
      datasets,
    };
    const getElementAtEvent = useDrilldownCallback({
      datasets: data.datasets,
      labels: data.labels,
      pivotConfig,
      onDrilldownRequested,
    });
    return (
      <Line
        type="line"
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
      <LineChartRenderer
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
            x: [value],
            y: ["measures"],
            fillMissingDates: true,
            joinDateRange: false,
            // limit: 1000,
          },
        })
      }
    />
  );
};

export default LineChart;
