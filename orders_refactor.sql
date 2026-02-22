-- Orders schema refactor:
-- guestName/guestEmail/guestPhone -> name/email/phone
-- add orderNumber (5-char uppercase alphanumeric)

begin;

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'orders'
      and column_name = 'guestName'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'orders'
      and column_name = 'name'
  ) then
    execute 'alter table public.orders rename column "guestName" to name';
  end if;

  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'orders'
      and column_name = 'guestEmail'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'orders'
      and column_name = 'email'
  ) then
    execute 'alter table public.orders rename column "guestEmail" to email';
  end if;

  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'orders'
      and column_name = 'guestPhone'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'orders'
      and column_name = 'phone'
  ) then
    execute 'alter table public.orders rename column "guestPhone" to phone';
  end if;
end $$;

alter table public.orders
  add column if not exists name text,
  add column if not exists email text,
  add column if not exists phone text,
  add column if not exists "orderNumber" text;

create or replace function public.generate_order_number()
returns text
language plpgsql
as $$
declare
  candidate text;
begin
  loop
    candidate := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 5));
    exit when not exists (
      select 1 from public.orders where "orderNumber" = candidate
    );
  end loop;
  return candidate;
end;
$$;

update public.orders
set
  name = coalesce(name, 'Guest'),
  email = lower(email),
  "orderNumber" = coalesce("orderNumber", public.generate_order_number())
where
  name is null
  or "orderNumber" is null
  or email is distinct from lower(email);

alter table public.orders
  alter column "orderNumber" set default public.generate_order_number();

create unique index if not exists orders_order_number_unique_idx
  on public.orders ("orderNumber");

create index if not exists orders_email_idx
  on public.orders (email);

commit;
