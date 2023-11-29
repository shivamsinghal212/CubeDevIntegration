export const totalSumQty = {
  order: {},
  measures: ["wallets.sumQtyG"],
  timeDimensions: [],
}; // number

export const totalNoOfUsers = {
  measures: ["users.count"],
  order: {
    "users.created_at": "asc",
  },
}; // number

export const revenueGeneratedAllTime = {
  limit: 1000,
  measures: ["transactions.amountSum"],
  order: {
    "transactions.created_at": "asc",
  },
  timeDimensions: [
    {
      dimension: "transactions.created_at",
    },
  ],
  filters: [
    {
      member: "transactions.txn_status",
      operator: "equals",
      values: ["SUCCESS"],
    },
    {
      member: "transactions.txn_type",
      operator: "equals",
      values: ["BUY"],
    },
  ],
};

export const top10Banks = {
  measures: ["user_banks.count"],
  order: {
    "user_banks.count": "desc",
  },
  dimensions: ["user_banks.bank_name"],
  limit: 10,
}; // pie chart

// export const goldPriceChart = {
//   limit: 10,
//   measures: ["gold24_prices.aura_buy_price"],
//   dimensions: ["gold24_prices.price_wo_gst"],
//   timeDimensions: [
//     {
//       dimension: "gold24_prices.created_at",
//       granularity: "minute",
//       dateRange: "This month",
//     },
//   ],
// }; // line chart

export const goldPriceChart = {
  limit: 10000,
  dimensions: ["gold24_prices.price_wo_gst"],
  order: {
    "gold24_prices.created_at": "asc",
  },
  timeDimensions: [
    {
      dimension: "gold24_prices.created_at",
      granularity: "month",
      // dateRange: "This month",
      dateRange: ["2023-11-15", "2023-11-29"],
    },
  ],
  // measures: ["gold24_prices.aura_buy_price"],
};

export const noofMandatesCreatedThisMonth = {
  limit: 5000,
  measures: ["mandates.count"],
  timeDimensions: [
    {
      dimension: "mandates.created_at",
      granularity: "day",
      dateRange: "This month",
    },
  ],
}; // line chart

export const mandatesGroupedByAmount = {
  limit: 10,
  measures: ["mandates.count"],
  order: {
    "mandates.count": "desc",
  },
  dimensions: ["mandates.amount"],
  filters: [
    {
      member: "mandates.status",
      operator: "equals",
      values: ["ACTIVE"],
    },
  ],
}; //piechart

export const getBuyGoldTrendByTime = (time) => {
  // time = "This month" | "This week" | "This quarter | "Last month" | "Last week" | "Last quarter" | "All Time"
  let data = {
    limit: 1000,
    order: {
      "transactions.created_at": "asc",
    },
    timeDimensions: [
      {
        dimension: "transactions.created_at",
        granularity: "day",
        dateRange: time,
      },
    ],
    filters: [
      {
        member: "transactions.txn_status",
        operator: "equals",
        values: ["SUCCESS"],
      },
      {
        member: "transactions.txn_type",
        operator: "equals",
        values: ["BUY"],
      },
    ],
    measures: ["transactions.amountSum"],
  };
  if (time === "All Time" || time === undefined || time === null) {
    data.timeDimensions[0].granularity = "month";
    delete data.timeDimensions[0].dateRange;
  }
  return data;
};

export const getGoldPricesByDateRange = (startDate, endDate) => {
  let query = {
    timeDimensions: [
      {
        dimension: "gold24_prices.created_at",
        granularity: "day",
        dateRange: ["2023-11-01", "2023-11-29"],
      },
    ],
    limit: 10000,
    measures: ["gold24_prices.aura_buy_price"],
    filters: [
      {
        member: "gold24_prices.aura_buy_price",
        operator: "gt",
        values: ["0"],
      },
    ],
  };
  if (startDate && endDate) {
    query.timeDimensions[0].dateRange = [startDate, endDate];
  } else {
    delete query.timeDimensions[0].dateRange;
  }
  return query;
};
