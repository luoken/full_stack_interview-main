defmodule Exchange.Supervisor do
  use Supervisor

  alias Exchange.Poller

  def start_link(opts) do
    Supervisor.start_link(__MODULE__, :ok, opts)
  end

  @impl true
  def init(:ok) do
    children = [
      Poller
    ]

    Supervisor.init(children, strategy: :one_for_one)
  end
end
