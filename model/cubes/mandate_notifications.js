cube(`mandate_notifications`, {
  sql_table: `public.mandate_notifications`,
  
  data_source: `default`,
  
  joins: {
    mandates: {
      sql: `${CUBE}.mandate_id = ${mandates}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    meta_data: {
      sql: `meta_data`,
      type: `string`
    },
    
    seq_no: {
      sql: `seq_no`,
      type: `string`
    },
    
    status: {
      sql: `status`,
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
    
    expected_execution_date: {
      sql: `expected_execution_date`,
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
