-- Drop the table if it exists (optional, use with caution)
DROP TABLE IF EXISTS contact_form;

-- Create the contact_form table
CREATE TABLE contact_form (
    id SERIAL PRIMARY KEY,
    group_selection_method TEXT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
