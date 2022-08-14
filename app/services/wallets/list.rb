require_relative '../base'
require_relative '../../queries/wallets/list'


module Services
  module Wallets
    class List < ::Services::Base
      def initialize(user_id, time)
        @user_id = user_id
        @time = time
      end

      def call
        ::Queries::Wallets::ListForTheTime.new(@user_id, @time).call
      end
    end
  end
end
