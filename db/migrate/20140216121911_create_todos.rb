class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :header

      t.timestamps
    end
  end
end
