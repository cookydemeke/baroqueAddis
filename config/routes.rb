Rails.application.routes.draw do
  get "/" => "users#home"
  get "/home" => "users#home"
  get "/portfolio" => "users#portfolio"
  get "/events_portfolio" => "users#events_portfolio"
  get "/services" => "users#services"
  get "/about" => "users#about"
  get "/access" => "users#access"
  get "/vip" => "users#vip"
  get "/residential" => "users#residential"
  get "/capital" => "users#capital"
  get "/nexus" => "users#nexus"

end
