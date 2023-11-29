cube(`mandates`, {
  sql_table: `public.mandates`,

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

    meta_data: {
      sql: `meta_data`,
      type: `string`,
    },

    recurrence: {
      sql: `recurrence`,
      type: `string`,
    },

    recur_day: {
      sql: `recur_day`,
      type: `string`,
    },

    attached_vpa_id: {
      sql: `attached_vpa_id`,
      type: `string`,
    },

    mandate_ref: {
      sql: `mandate_ref`,
      type: `string`,
    },

    start_date: {
      sql: `start_date`,
      type: `string`,
    },

    end_date: {
      sql: `end_date`,
      type: `string`,
    },

    status: {
      sql: `status`,
      type: `string`,
    },

    pattern: {
      sql: `pattern`,
      type: `string`,
    },

    txn_no: {
      sql: `txn_no`,
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
      sql: `amount`,
      type: `number`,
    },
    last_success_notify_date: {
      sql: `last_success_notify_date`,
      type: `time`,
    },

    last_success_execution_date: {
      sql: `last_success_execution_date`,
      type: `time`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },

    // amount: {
    //   sql: `amount`,
    //   type: `sum`,
    // },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
