defmodule InterviewWeb.Plugs.GetLocation do
  import Plug.Conn

  def init(_default), do: ""

  def call(%Plug.Conn{req_headers: req_headers} = conn, _default) do
    Enum.reduce(req_headers, conn, fn header, acc ->
      case header do
        {"cf-connecting-ip", ip} ->
          acc = put_session(acc, :ip, ip)
          acc

        {"cf-ipcountry", country} ->
          acc = put_session(acc, :country, country)
          acc

        _ ->
          acc
      end
    end)
  end
end
