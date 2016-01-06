class EntriesController < ApplicationController

	before_action :authenticate_user!

	def index
		@entries = current_user.entries
		#@entries = Entry.all 
	end

	def show
  	@entry = Entry.find(params["id"])
	end

	def new
		@entry = Entry.new
	end

end