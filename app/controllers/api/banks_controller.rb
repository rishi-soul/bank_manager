class Api::BanksController < ApplicationController
  respond_to :json

  def index
    respond_with Bank.order(account_number: :DESC)
  end

  def show
    respond_with Bank.find(params[:account_number])
  end

  def create
    respond_with :api, Bank.create(bank_params)
  end

  def destroy
    respond_with Bank.destroy(params[:account_number])
  end

  def update
    bank = Bank.find(params['account_number'])
    bank.update(bank_params)
    respond_with Bank, json: bank
  end

  private

  def bank_params
    params.require(:bank).permit(
      :account_number,
      :routing_number,
      :bank_address,
      :bank_nickname
    )
  end
end