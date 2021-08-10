import React,{useState} from 'react'
import CreditDebit from './CreditDebit'
import PayPal from './PayPal'
import UPI from './UPI'
import '../../styles/PaymentPage.scss'

const PaymentPage = () => {

    const [radio , setRadio] = useState(null)

    return (
        <div className='payment-wrapper'>
            <h2 className="title">Please select your payment method</h2>
            <div className="payment">            
            <div className="paypal-radio">
                <input type="radio" 
                name="payment-method" 
                value="paypal" 
                id="paypal" 
                checked={radio === 'paypal'}
                onChange={e=>{setRadio(e.target.value)}}/>
                <label htmlFor="paypal">Paypal</label>
                {
                    radio === 'paypal' && <PayPal/>
                }
                
            </div>
            <div className="credit-debit-radio">
                <input type="radio" 
                name="payment-method" 
                value="credit-debit" 
                id="credit-debit" 
                checked={radio === 'credit-debit'}
                onChange={e=>{setRadio(e.target.value)}}/>
                <label htmlFor="credit-debit">Credit Card / Debit Card</label>
                {
                    radio ==='credit-debit' && <CreditDebit/>
                }
            </div>
            <div className="cod-radio">
                <input type="radio"
                name="payment-method" 
                value="cod" 
                id="cod" 
                checked={radio === 'cod'}
                onChange={e=>{setRadio(e.target.value)}}/>
                <label htmlFor="cod">Cash-On-Delivery</label>
                
            </div>
            <div className="upi-radio">
                <input type="radio" 
                name="payment-method" 
                value="upi" 
                id="upi" 
                checked={radio === 'upi'}
                onChange={e=>{setRadio(e.target.value)}}/>
                <label htmlFor="upi">UPI</label>
                {
                    radio === 'upi' && <UPI/>
                }                
            </div>
            </div>
        </div>
    )
}

export default PaymentPage
