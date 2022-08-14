require_relative '../base'


module Services
  module Wallets
    class List < ::Services::Base
      def call
        [
          {
            id: 1,
            name: "sdfsdf",
            sum: 30000
          },
          {
            id: 2,
            name: "Кsdfaанка",
            sum: 150352.3,
          },
          {
            id: 3,
            name: "Крd  пта",
            sum: 125362,
          },
          {
            id: 4,
            name: "sdfsdf",
            sum: 30000
          },
          {
            id: 5,
            name: "Кsdfaанка",
            sum: 150352.3,
          },
          {
            id: 6,
            name: "Крd  пта",
            sum: 125362,
          },
        ]
      end
    end
  end
end
