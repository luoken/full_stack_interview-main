defmodule InterviewWeb.ExchangeLive do
  use InterviewWeb, :live_view

  alias Exchange.Poller
  alias Interview.Currency

  @impl true
  def mount(_params, _session, socket) do
    socket = assign(socket, from: :USD, to: :EUR, rate: nil)

    if connected?(socket) do
      Process.send_after(self(), :get_current_rate, 800)
      Process.send_after(self(), :update_rate, Enum.random(1_000..5_000))
    end

    {:ok, socket}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <.back navigate={~p"/"}>Back</.back>
    <h1 class="mt-1 text-2xl">Exchange Rates</h1>

    <div class="mt-12 flex gap-8 items-center">
      <span class="text-4xl text-rose-600"><%= @from %></span>
      <span :if={@rate} class="text-8xl text-green-700 bg-green-100 rounded-lg px-2 inline-block">
        €<%= @rate %>
      </span>
      <span
        :if={is_nil(@rate)}
        class="text-8xl text-gray-300 bg-gray-100 rounded-lg px-2 inline-block"
      >
        €0.0000
      </span>
      <span class="text-4xl text-sky-700"><%= @to %></span>
    </div>
    """
  end

  @impl true
  def handle_info(:get_current_rate, socket) do
    Process.send_after(self(), :get_current_rate, 1_500)
    {:noreply, assign(socket, rate: assign_rate(socket.assigns))}
  end

  @impl true
  def handle_info(:update_rate, socket) do
    Process.send_after(self(), :update_rate, Enum.random(1000..5000))
    GenServer.cast(Poller, {socket.assigns.from, socket.assigns.to})

    {:noreply, socket}
  end

  defp assign_rate(attrs) do
    rate = Currency.get_exchange_rate!(attrs[:from], attrs[:to])
    :erlang.float_to_binary(rate, decimals: 4)
  end
end
