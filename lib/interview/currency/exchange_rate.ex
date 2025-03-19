defmodule Interview.Currency.ExchangeRate do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "exchange_rates" do
    field :to, :string
    field :from, :string
    field :rate, :float

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(exchange_rate, attrs) do
    exchange_rate
    |> cast(attrs, [:to, :from, :rate])
    |> validate_required([:to, :from, :rate])
  end
end
