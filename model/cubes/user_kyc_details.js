cube(`user_kyc_details`, {
  sql_table: `public.user_kyc_details`,
  
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
    
    kyc_data: {
      sql: `kyc_data`,
      type: `string`
    },
    
    kyc_verified_by: {
      sql: `kyc_verified_by`,
      type: `string`
    },
    
    kyc_number: {
      sql: `kyc_number`,
      type: `string`
    },
    
    kyc_request_id: {
      sql: `kyc_request_id`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    
    kyc_verified_on: {
      sql: `kyc_verified_on`,
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
