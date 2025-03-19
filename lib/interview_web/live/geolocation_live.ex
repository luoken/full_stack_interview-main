defmodule InterviewWeb.GeolocationLive do
  use InterviewWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign_new(:ip_address, fn -> "1.1.1.1" end)
      |> assign_new(:country, fn -> "US" end)

    {:ok, socket}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <.back navigate={~p"/"}>Back</.back>
    <h1 class="mt-1 text-2xl">Geolocation</h1>

    <div class="mt-12 flex gap-8 items-center">
      <img width="150" src={"/images/countries/#{String.downcase(@country)}.svg"} alt={@country} />
      <span class="text-8xl"><%= @ip_address %></span>
    </div>
    """
  end
end
