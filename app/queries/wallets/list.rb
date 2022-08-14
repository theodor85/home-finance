module Queries
  module Wallets
    class ListForTheTime
      def initialize(user_id, time)
        @user_id = user_id
        @time = time
      end

      def call
        transform_result(execute_query)
      end

      private

      def transform_result(query_result)
        query_result
        .to_a
        .map { |el| el.symbolize_keys() }
      end

      def execute_query
        ActiveRecord::Base.connection.execute(
          ApplicationRecord.sanitize_sql_array(sql_array)
        )
      end

      def sql_array
        [sql_command, user_id: @user_id, dt: @time]
      end

      def sql_command
        <<-SQL
          SELECT w.id, w.name, COALESCE(wm.sum, 0) sum
          FROM   wallet_moneys  wm
          INNER JOIN (
            SELECT wallet_id, max(w_datetime) as w_dt
            FROM   wallet_moneys
            WHERE  user_id = :user_id
            AND    w_datetime <= :dt
            GROUP BY wallet_id
          )  wm_selected
            ON wm.wallet_id = wm_selected.wallet_id
            AND wm.w_datetime = wm_selected.w_dt
          RIGHT OUTER JOIN wallets  w
            ON wm.wallet_id = w.id;
        SQL
      end
    end
  end
end
