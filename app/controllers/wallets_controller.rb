require_relative '../services/wallets/list'

class WalletsController < ApplicationController
  before_action :authenticate_user!

  def index
    @wallets = ::Services::Wallets::List.()
  end
end
