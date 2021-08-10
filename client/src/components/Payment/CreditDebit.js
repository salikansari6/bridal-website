import React from 'react'
import '../../styles/CreditDebit.scss'


const CreditDebit = () => {

    const date = new Date()

    return (
        <div className="credit-debit">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <label htmlFor="card-no">Card Number</label>
                                <input type="text" placeholder="Enter Card Number" name="card-no" id="card-no"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="expiry-date">Expiry Date</label>
                                <input type="month" required  min={`${date.getFullYear()}-${date.getMonth()+1}`}  name="expiry-date" id="expiry-date" placeholder="MM/YY"/>
                            </td>
                            <td>
                                <label htmlFor="cvv">CVC/CVV</label>
                                <input type="password" placeholder="Enter CVV" name="cvv" id="cvv"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    )
}

export default CreditDebit
