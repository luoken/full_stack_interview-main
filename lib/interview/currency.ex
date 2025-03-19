defmodule Interview.Currency do
  @moduledoc false

  import Ecto.Query

  alias Interview.Currency.ExchangeRate
  alias Interview.Repo

  @doc """
  Returns the current exchange rate between two currencies.

  For the sake of this interview, and the lack of free, real-time
  currency exchange APIs, this is randomized every time you call it.
  """
  @spec current_exchange_rate(atom, atom) :: float
  def current_exchange_rate(:USD, :EUR), do: Float.round(:rand.uniform() * 0.2 + 0.8, 4)
  def current_exchange_rate(:EUR, :USD), do: Float.round(:rand.uniform() * 0.2 + 1, 4)

  @doc """
  Gets an exchange rate given two currencies.
  """
  def get_exchange_rate!(from, to) when is_atom(from) and is_atom(to) do
    get_exchange_rate!(Atom.to_string(from), Atom.to_string(to))
  end

  def get_exchange_rate!(from, to) do
    from(e in ExchangeRate, where: e.from == ^from and e.to == ^to, select: e.rate)
    |> Repo.one!()
  end
end
