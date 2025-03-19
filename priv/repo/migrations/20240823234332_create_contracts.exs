defmodule Interview.Repo.Migrations.CreateContracts do
  use Ecto.Migration

  def change do
    create table(:contracts, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :string
      add :company_name, :string
      add :status, :string
      add :payment_due_at, :utc_datetime
      add :payment_amount, :integer
      add :payment_currency, :string
      add :recipient_name, :string
      add :recipient_email, :string
      add :recurring, :boolean, default: false, null: false

      timestamps(type: :utc_datetime)
    end
  end
end
