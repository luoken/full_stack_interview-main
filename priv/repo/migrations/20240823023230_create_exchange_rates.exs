defmodule Interview.Repo.Migrations.CreateExchangeRates do
  use Ecto.Migration

  def change do
    create table(:exchange_rates, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :to, :string
      add :from, :string
      add :rate, :float

      timestamps(type: :utc_datetime)
    end
  end
end
