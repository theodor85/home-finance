json.array! @wallets do |wallet|
  json.id wallet[:id]
  json.name wallet[:name]
  json.sum wallet[:sum]
end
