json.array! @new_messages.each do |new_message|
  json.name           new_message.user.name
  json.created_at     new_message.created_at.to_s
  json.content        new_message.content
  json.image_url      new_message.image.url
  json.id             new_message.id
end
