cube(`transactions`, {
  sql_table: `public.transactions`,

  data_source: `default`,

  joins: {
    invoices: {
      sql: `${CUBE}.invoice_id = ${invoices}.id`,
      relationship: `many_to_one`,
    },

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

    show_in_app: {
      sql: `show_in_app`,
      type: `string`,
    },

    meta_data: {
      sql: `meta_data`,
      type: `string`,
    },

    txn_subtype: {
      sql: `txn_subtype`,
      type: `string`,
    },

    product_name: {
      sql: `product_name`,
      type: `string`,
    },

    platform: {
      sql: `platform`,
      type: `string`,
    },

    version: {
      sql: `version`,
      type: `string`,
    },

    attached_coupon_code: {
      sql: `attached_coupon_code`,
      type: `string`,
    },

    payment_mode: {
      sql: `payment_mode`,
      type: `string`,
    },

    external_txn_id: {
      sql: `external_txn_id`,
      type: `string`,
    },

    uuid: {
      sql: `uuid`,
      type: `string`,
    },

    txn_status: {
      sql: `txn_status`,
      type: `string`,
    },

    txn_type: {
      sql: `txn_type`,
      type: `string`,
    },

    created_at: {
      sql: `created_at`,
      type: `time`,
    },

    updated_at: {
      sql: `updated_at`,
      type: `time`,
    },
    amount: {
      sql: `total_value_rs`,
      type: `number`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
    amountSum: {
      sql: `total_value_rs`,
      type: `sum`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
