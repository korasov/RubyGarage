json.array!(@tasks) do |task|
  json.extract! task, :id, :todo_id, :done, :deadline, :title, :priority
  json.url task_url(task, format: :json)
end
