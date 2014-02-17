class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :todo_id
      t.boolean :done
      t.integer :deadline
      t.string :title
      t.integer :priority

      t.timestamps
    end
  end
end
