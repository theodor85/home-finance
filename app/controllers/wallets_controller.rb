require_relative '../services/wallets/list'

class WalletsController < ApplicationController
  before_action :authenticate_user!

  def index
    @wallets = ::Services::Wallets::List.(current_user.id, Time.now)
  end
end
