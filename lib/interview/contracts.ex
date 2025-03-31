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

  @doc """
  Adds a Contract
  """
  def add_contract(contract) do
    Repo.insert(contract)
    |> case do
      {:ok, contract} -> IO.puts("Successfully inserted: #{inspect(contract)}")
      {:error, changeset} -> IO.puts("Error inserting: #{inspect(changeset)}")
    end
  end
end
