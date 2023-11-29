cube(`users`, {
  sql_table: `public.users`,
  
  data_source: `default`,
  
  joins: {
    partners: {
      sql: `${CUBE}.partner_id = ${partners}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    is_active: {
      sql: `is_active`,
      type: `string`
    },
    
    email_verified: {
      sql: `email_verified`,
      type: `string`
    },
    
    kyc_verified: {
      sql: `kyc_verified`,
      type: `string`
    },
    
    current_app_version: {
      sql: `current_app_version`,
      type: `string`
    },
    
    dob: {
      sql: `dob`,
      type: `string`
    },
    
    first_name: {
      sql: `first_name`,
      type: `string`
    },
    
    middle_name: {
      sql: `middle_name`,
      type: `string`
    },
    
    last_name: {
      sql: `last_name`,
      type: `string`
    },
    
    country_code: {
      sql: `country_code`,
      type: `string`
    },
    
    phone_number: {
      sql: `phone_number`,
      type: `string`
    },
    
    display_name: {
      sql: `display_name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    jwt_token: {
      sql: `jwt_token`,
      type: `string`
    },
    
    last_platform: {
      sql: `last_platform`,
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
    
    last_login: {
      sql: `last_login`,
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
