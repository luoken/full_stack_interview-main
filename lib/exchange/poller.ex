defmodule Exchange.Poller do
  use GenServer

  alias Interview.Currency

  def start_link(arg) do
    GenServer.start_link(__MODULE__, arg, name: __MODULE__)
  end

  @impl true
  def init(rate) do
    {:ok, rate}
  end

  @impl true
  def handle_cast({from, to}, _rate) do
    {:noreply, Currency.update_exchange_rate(from, to)}
  end
end
