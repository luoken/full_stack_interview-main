defmodule InterviewWeb.ContractsLive do
  use InterviewWeb, :live_view

  alias Interview.Contracts

  @impl true
  def mount(_params, %{"ip" => ip} = _session, socket) do
    socket =
      socket
      |> assign_contracts()
      |> assign_new(:ip_address, fn -> ip end)

    {:ok, assign_contracts(socket)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <.back navigate={~p"/"}>Back</.back>
    <h1 class="mt-1 text-2xl">Contracts</h1>

    <div
      class="mt-12"
      id="live-react-container"
      data-react-view="ContractsView"
      data-assigns-contracts={Jason.encode!(@contracts)}
      data-assigns-ip-address={Jason.encode!(@ip_address)}
      phx-hook="LiveReact"
      phx-update="ignore"
    >
    </div>
    """
  end

  defp assign_contracts(socket) do
    assign(socket, :contracts, Contracts.list_contracts())
  end
end
