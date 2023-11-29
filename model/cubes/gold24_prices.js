cube(`gold24_prices`, {
  sql_table: `public.gold24_prices`,

  data_source: `default`,

  joins: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    product_id: {
      sql: `product_id`,
      type: `string`,
    },

    product_name: {
      sql: `product_name`,
      type: `string`,
    },

    source: {
      sql: `source`,
      type: `string`,
    },

    price_wo_gst: {
      sql: `price_wo_gst`,
      type: `number`,
    },

    created_at: {
      sql: `created_at`,
      type: `time`,
    },

    updated_at: {
      sql: `updated_at`,
      type: `time`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },

    aura_buy_price: {
      sql: `aura_buy_price`,
      type: `avg`,
    },

    aura_sell_price: {
      sql: `aura_sell_price`,
      type: `sum`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
