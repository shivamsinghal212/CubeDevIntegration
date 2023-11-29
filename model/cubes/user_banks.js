cube(`user_banks`, {
  sql_table: `public.user_banks`,
  
  data_source: `default`,
  
  joins: {
    users: {
      sql: `${CUBE}.user_id = ${users}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    account_number: {
      sql: `account_number`,
      type: `string`
    },
    
    ifsc_code: {
      sql: `ifsc_code`,
      type: `string`
    },
    
    account_type: {
      sql: `account_type`,
      type: `string`
    },
    
    account_holder_name: {
      sql: `account_holder_name`,
      type: `string`
    },
    
    vpa: {
      sql: `vpa`,
      type: `string`
    },
    
    bank_name: {
      sql: `bank_name`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
