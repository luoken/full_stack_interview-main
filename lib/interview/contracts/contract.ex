defmodule Interview.Contracts.Contract do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  @fields ~w(name company_name status payment_due_at payment_amount payment_currency recipient_name recipient_email recurring)a
  @derive {Jason.Encoder, only: @fields}
  schema "contracts" do
    field :name, :string
    field :status, Ecto.Enum, values: [:pending, :signed, :executed]
    field :company_name, :string
    field :payment_due_at, :utc_datetime
    field :payment_amount, :integer
    field :payment_currency, :string
    field :recipient_name, :string
    field :recipient_email, :string
    field :recurring, :boolean, default: false

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(contract, attrs) do
    contract
    |> cast(attrs, @fields)
    |> validate_required(@fields)
  end
end
