class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :subject
      t.text :contents
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
