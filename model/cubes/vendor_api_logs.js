cube(`vendor_api_logs`, {
  sql_table: `public.vendor_api_logs`,
  
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
    
    encrypted_request_data: {
      sql: `encrypted_request_data`,
      type: `string`
    },
    
    request_data: {
      sql: `request_data`,
      type: `string`
    },
    
    response_data: {
      sql: `response_data`,
      type: `string`
    },
    
    encrypted_response_data: {
      sql: `encrypted_response_data`,
      type: `string`
    },
    
    url: {
      sql: `url`,
      type: `string`
    },
    
    vendor: {
      sql: `vendor`,
      type: `string`
    },
    
    headers: {
      sql: `headers`,
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
