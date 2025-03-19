defmodule Interview.Contracts do
  @moduledoc false

  alias Interview.Contracts.Contract
  alias Interview.Repo

  @doc """
  Lists all Contracts.
  """
  def list_contracts() do
    Repo.all(Contract)
  end
end
