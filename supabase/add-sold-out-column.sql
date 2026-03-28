-- Add sold_out status to existing products table
alter table if exists public.products
add column if not exists sold_out boolean not null default false;
