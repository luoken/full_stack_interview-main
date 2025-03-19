# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Interview.Repo.insert!(%Interview.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Interview.Contracts.Contract
alias Interview.Currency.ExchangeRate
alias Interview.Repo

# Exchange rates

Repo.delete_all(ExchangeRate)
Repo.insert(%ExchangeRate{from: "EUR", to: "USD", rate: 1.0})
Repo.insert(%ExchangeRate{from: "USD", to: "EUR", rate: 1.0})

# Contracts

Repo.delete_all(Contract)

inserted_at = DateTime.utc_now() |> DateTime.truncate(:second)
updated_at = DateTime.utc_now() |> DateTime.truncate(:second)

Repo.insert_all(Contract, [
  %{
    name: "Master Services Agreement",
    status: :pending,
    company_name: "Acme Corp",
    payment_due_at: ~U[2024-10-12 14:23:12Z],
    payment_amount: 4500,
    payment_currency: "USD",
    recipient_name: "John Doe",
    recipient_email: "john.doe@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Investment Agreement",
    status: :signed,
    company_name: "Globex Corporation",
    payment_due_at: ~U[2024-11-25 09:45:30Z],
    payment_amount: 7500,
    payment_currency: "EUR",
    recipient_name: "Jane Smith",
    recipient_email: "jane.smith@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Non-Disclosure Agreement",
    status: :executed,
    company_name: "Stark Industries",
    payment_due_at: ~U[2024-09-17 18:15:00Z],
    payment_amount: 12000,
    payment_currency: "USD",
    recipient_name: "Alice Johnson",
    recipient_email: "alice.johnson@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Consulting Agreement",
    status: :pending,
    company_name: "Wayne Enterprises",
    payment_due_at: ~U[2024-12-03 10:20:45Z],
    payment_amount: 3000,
    payment_currency: "EUR",
    recipient_name: "Bob Brown",
    recipient_email: "bob.brown@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Employment Agreement",
    status: :signed,
    company_name: "Umbrella Corporation",
    payment_due_at: ~U[2024-08-30 16:50:00Z],
    payment_amount: 8500,
    payment_currency: "USD",
    recipient_name: "Eve White",
    recipient_email: "eve.white@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Partnership Agreement",
    status: :executed,
    company_name: "Acme Corp",
    payment_due_at: ~U[2024-10-19 12:34:56Z],
    payment_amount: 10000,
    payment_currency: "EUR",
    recipient_name: "John Doe",
    recipient_email: "john.doe@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Service Level Agreement",
    status: :pending,
    company_name: "Globex Corporation",
    payment_due_at: ~U[2024-11-01 08:00:00Z],
    payment_amount: 2500,
    payment_currency: "USD",
    recipient_name: "Jane Smith",
    recipient_email: "jane.smith@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Lease Agreement",
    status: :signed,
    company_name: "Stark Industries",
    payment_due_at: ~U[2024-09-05 14:15:30Z],
    payment_amount: 6500,
    payment_currency: "EUR",
    recipient_name: "Alice Johnson",
    recipient_email: "alice.johnson@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Memorandum of Understanding",
    status: :executed,
    company_name: "Wayne Enterprises",
    payment_due_at: ~U[2024-12-14 11:10:00Z],
    payment_amount: 14000,
    payment_currency: "USD",
    recipient_name: "Bob Brown",
    recipient_email: "bob.brown@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Supplier Agreement",
    status: :pending,
    company_name: "Umbrella Corporation",
    payment_due_at: ~U[2024-08-27 17:45:12Z],
    payment_amount: 5000,
    payment_currency: "EUR",
    recipient_name: "Eve White",
    recipient_email: "eve.white@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Joint Venture Agreement",
    status: :signed,
    company_name: "Acme Corp",
    payment_due_at: ~U[2024-10-23 15:30:45Z],
    payment_amount: 9500,
    payment_currency: "USD",
    recipient_name: "John Doe",
    recipient_email: "john.doe@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Asset Purchase Agreement",
    status: :executed,
    company_name: "Globex Corporation",
    payment_due_at: ~U[2024-11-10 13:00:00Z],
    payment_amount: 13500,
    payment_currency: "EUR",
    recipient_name: "Jane Smith",
    recipient_email: "jane.smith@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Sales Agreement",
    status: :pending,
    company_name: "Stark Industries",
    payment_due_at: ~U[2024-09-30 09:45:00Z],
    payment_amount: 4000,
    payment_currency: "USD",
    recipient_name: "Alice Johnson",
    recipient_email: "alice.johnson@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Licensing Agreement",
    status: :signed,
    company_name: "Wayne Enterprises",
    payment_due_at: ~U[2024-12-20 16:00:00Z],
    payment_amount: 14500,
    payment_currency: "EUR",
    recipient_name: "Bob Brown",
    recipient_email: "bob.brown@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Manufacturing Agreement",
    status: :executed,
    company_name: "Umbrella Corporation",
    payment_due_at: ~U[2024-08-29 18:15:00Z],
    payment_amount: 2000,
    payment_currency: "USD",
    recipient_name: "Eve White",
    recipient_email: "eve.white@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Franchise Agreement",
    status: :pending,
    company_name: "Acme Corp",
    payment_due_at: ~U[2024-10-30 07:50:00Z],
    payment_amount: 6000,
    payment_currency: "EUR",
    recipient_name: "John Doe",
    recipient_email: "john.doe@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Distributorship Agreement",
    status: :signed,
    company_name: "Globex Corporation",
    payment_due_at: ~U[2024-11-14 12:40:00Z],
    payment_amount: 11000,
    payment_currency: "USD",
    recipient_name: "Jane Smith",
    recipient_email: "jane.smith@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Research and Development Agreement",
    status: :executed,
    company_name: "Stark Industries",
    payment_due_at: ~U[2024-09-07 10:25:30Z],
    payment_amount: 14500,
    payment_currency: "EUR",
    recipient_name: "Alice Johnson",
    recipient_email: "alice.johnson@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Outsourcing Agreement",
    status: :pending,
    company_name: "Wayne Enterprises",
    payment_due_at: ~U[2024-12-15 14:55:00Z],
    payment_amount: 8500,
    payment_currency: "USD",
    recipient_name: "Bob Brown",
    recipient_email: "bob.brown@example.com",
    recurring: false,
    inserted_at: inserted_at,
    updated_at: updated_at
  },
  %{
    name: "Consulting Services Agreement",
    status: :signed,
    company_name: "Umbrella Corporation",
    payment_due_at: ~U[2024-08-26 08:30:00Z],
    payment_amount: 7000,
    payment_currency: "EUR",
    recipient_name: "Eve White",
    recipient_email: "eve.white@example.com",
    recurring: true,
    inserted_at: inserted_at,
    updated_at: updated_at
  }
])
