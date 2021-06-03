import React from 'react'

const LoanDetails = () => {
    return (
        <div className="form-container">
            <div className="loan-details grid">
                <form>
                    <div className="form-control-container">
                        <label htmlFor="loan-amount">Loan amount</label>
                        <input className="form-control" type="text" id="loan-amount"></input> 
                    </div>
                    <div className="form-control-container">
                        <label htmlFor="loan-term">Loan term in years</label>
                        <input className="form-control" type="text" id="loan-term"></input> 
                    </div>
                    <div className="form-control-container">
                        <label htmlFor="annual-rate">Annual interest rate</label>
                        <input className="form-control" type="text" id="annual-rate"></input> 
                    </div>
                    <div className="form-control-container">
                        <button className="btn">Calculate</button>
                    </div>
                </form>
            </div>
            <div className="loan-summary-container">
                <div className="loan-summary-header grid">
                    <h2>Monthly Payments</h2>
                    <div>
                        
                    </div>
                </div>
                <div className="loan-summary-items grid">
                    <h3>Loan Amount</h3>
                    <div className="loan-summary-output"></div>
                    <h3>Annual Interest Rate</h3>
                    <div className="loan-summary-output"></div>
                    <h3>Loan Term in Years</h3>
                    <div className="loan-summary-output"></div>
                </div>
            </div>
        </div>
    )
}

export default LoanDetails
