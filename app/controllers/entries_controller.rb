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
		@entry.user = current_user
		#needed for hidden to work in form
	end

	def create
	  entry_params = params["entry"].permit("subject", "contents", "user_id")
	  entry = Entry.create(entry_params)
	  redirect_to(entries_path(entry))
	end	

end