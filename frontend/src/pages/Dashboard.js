import React from "react";

import { Container, Row, Col } from "reactstrap";

import NumberChart from "../components/NumberChart";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import cubejs from "@cubejs-client/core";

import {
  totalNoOfUsers,
  totalSumQty,
  revenueGeneratedAllTime,
  top10Banks,
  getBuyGoldTrendByTime,
  mandatesGroupedByAmount,
  getGoldPricesByDateRange,
} from "../queries";
import ChartContainer from "../components/ChartContainer";
import axios from "axios";

const DashboardPage = () => {
  const fetchToken = () => {
    try {
      const response = axios.get("http://127.0.0.1:8000/auth/token");
      const token = response.data.token;
      console.log(token);
    } catch (error) {
      console.error(`Error fetching token: ${error}`);
    }
  };
  const cubejsApi = cubejs(fetchToken(), {
    apiUrl: "http://localhost:4000/cubejs-api/v1",
  });
  const [buyGoldTrendData, setBuyGoldTrendData] = React.useState(
    getBuyGoldTrendByTime()
  );

  let goldPriceStartDate = undefined;
  let goldPriceEndDate = undefined;

  const [goldPriceQuery, setGoldPriceQuery] = React.useState(
    getGoldPricesByDateRange()
  );

  const convertDateFmt = (rawDate) => {
    const date = new Date(rawDate);
    const formattedDate = date.toISOString().split("T")[0];
    console.log(formattedDate);
    return formattedDate;
  };
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "7vh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
      }}
    >
      <Row>
        <Col sm="4">
          <ChartContainer
            title={"Total Users"}
            component={
              <NumberChart
                cubejsApi={cubejsApi}
                query={totalNoOfUsers}
                value={"users.count"}
              />
            }
          />
        </Col>
        <Col sm="4">
          <ChartContainer
            title={"Total Gold AUM (g)"}
            component={
              <NumberChart
                cubejsApi={cubejsApi}
                query={totalSumQty}
                value={"wallets.sumQtyG"}
              />
            }
          />
        </Col>
        <Col sm="4">
          <ChartContainer
            title={"Total Revenue (INR)"}
            component={
              <NumberChart
                cubejsApi={cubejsApi}
                query={revenueGeneratedAllTime}
                value={"transactions.amountSum"}
              />
            }
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm="4">
          <ChartContainer
            title={"Top 10 Banks"}
            component={
              <PieChart
                cubejsApi={cubejsApi}
                query={top10Banks}
                value={top10Banks.dimensions[0]}
              />
            }
          />
        </Col>
        <Col sm="8">
          <ChartContainer
            title={"Buy Gold Transactions Trend"}
            component={
              <LineChart
                cubejsApi={cubejsApi}
                query={buyGoldTrendData}
                value={buyGoldTrendData?.timeDimensions[0]?.dimension}
              />
            }
            buttonConfig={[
              {
                title: "All Time",
                callback: () => {
                  setBuyGoldTrendData(getBuyGoldTrendByTime());
                },
              },
              {
                title: "Last Month",
                callback: () => {
                  setBuyGoldTrendData(getBuyGoldTrendByTime("Last month"));
                },
              },
              {
                title: "Last Week",
                callback: () => {
                  setBuyGoldTrendData(getBuyGoldTrendByTime("Last week"));
                },
              },
            ]}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm="8">
          <ChartContainer
            title={"Gold Price Trend"}
            component={
              <LineChart
                cubejsApi={cubejsApi}
                query={goldPriceQuery}
                value={goldPriceQuery?.measures[0]}
              />
            }
            datePickerConfig={[
              {
                id: "gold_price_start_date",
                value: goldPriceStartDate,
                callback: (date) => {
                  goldPriceStartDate = convertDateFmt(date);
                },
              },
              {
                id: "gold_price_end_date",
                value: goldPriceEndDate,
                callback: (date) => {
                  goldPriceEndDate = convertDateFmt(date);
                },
              },
            ]}
            buttonConfig={[
              {
                title: "Filter",
                callback: () => {
                  const goldPriceQuery = getGoldPricesByDateRange(
                    goldPriceStartDate,
                    goldPriceEndDate
                  );
                  setGoldPriceQuery(goldPriceQuery);
                },
              },
            ]}
          />
        </Col>
        <Col sm="4">
          <ChartContainer
            title={"AutoPay Distribution"}
            component={
              <PieChart
                cubejsApi={cubejsApi}
                query={mandatesGroupedByAmount}
                value={mandatesGroupedByAmount?.dimensions[0]}
              />
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
