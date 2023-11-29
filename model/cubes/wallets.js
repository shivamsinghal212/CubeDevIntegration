cube(`wallets`, {
  sql_table: `public.wallets`,

  data_source: `default`,

  joins: {
    users: {
      sql: `${CUBE}.user_id = ${users}.id`,
      relationship: `many_to_one`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    product_name: {
      sql: `product_name`,
      type: `string`,
    },
    qty_g: {
      sql: `qty_g`,
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
    sumQtyG: {
      sql: `qty_g`,
      type: `sum`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
