defmodule InterviewWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :interview

  # The session will be stored in the cookie and signed,
  # this means its contents can be read but not tampered with.
  # Set :encryption_salt if you would also like to encrypt it.
  @session_options [
    store: :cookie,
    key: "_interview_key",
    signing_salt: "xYLUM/Rm",
    same_site: "Lax"
  ]

  socket "/live", Phoenix.LiveView.Socket,
    websocket: [connect_info: [session: @session_options]],
    longpoll: [connect_info: [session: @session_options]]

  # Serve at "/" the static files from "priv/static" directory.
  #
  # You should set gzip to true if you are running phx.digest
  # when deploying your static files in production.
  plug Plug.Static,
    at: "/",
    from: :interview,
    gzip: false,
    only: InterviewWeb.static_paths()

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
    plug Phoenix.Ecto.CheckRepoStatus, otp_app: :interview
  end

  # Randomly generate geolocation headers that would simulate a user's location
  # from an upstream proxy service, like Cloudflare or Fly.io
  plug :geolocation_headers

  @geolocation_data [
    {"192.0.2.1", "US"},
    {"81.2.69.160", "GB"},
    {"24.48.0.12", "CA"},
    {"200.160.0.56", "BR"},
    {"198.51.100.23", "US"},
    {"203.0.113.42", "GB"},
    {"198.51.100.45", "CA"},
    {"203.0.113.89", "BR"},
    {"192.0.2.78", "US"},
    {"178.62.254.16", "GB"},
    {"142.250.72.14", "CA"},
    {"189.44.25.17", "BR"},
    {"2001:0db8:85a3:0000:0000:8a2e:0370:7334", "US"},
    {"2001:0db8:0000:0042:0000:8a2e:0370:7334", "GB"},
    {"2607:f0d0:1002:51::4", "CA"},
    {"2801:82:80::1", "BR"}
  ]

  defp geolocation_headers(conn, _opts) do
    {ip_address, country_code} = Enum.random(@geolocation_data)

    conn
    |> put_req_header("x-forwarded-for", "#{ip_address}, 66.241.124.216, 172.71.147.28")
    |> put_req_header("fly-client-ip", ip_address)
    |> put_req_header("cf-connecting-ip", ip_address)
    |> put_req_header("cf-ipcountry", country_code)
  end

  plug Phoenix.LiveDashboard.RequestLogger,
    param_key: "request_logger",
    cookie_key: "request_logger"

  plug Plug.RequestId
  plug Plug.Telemetry, event_prefix: [:phoenix, :endpoint]

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Phoenix.json_library()

  plug Plug.MethodOverride
  plug Plug.Head
  plug Plug.Session, @session_options
  plug InterviewWeb.Router
end
