export const SubscriptionCard = (props) => {
  const {checked, termMonths, monthlyPrice, saving, ribbonText, onClick} = props

  return (
    <div 
      className={checked ? "checked subscription-card" : "subscription-card"}
      onClick={onClick}
    >
      {ribbonText && 
        <div className="ribbon">
          <p>{ribbonText}</p>
        </div>
      }
      <h3>{termMonths} Month{termMonths > 1 && 's'}</h3>
      <div className="monthly-price">
        <p className="price-symbol">£</p>
        <p className="price-figure">{monthlyPrice}</p>
        <p className="price-term">a month</p>
      </div>
      <ul>
        <li>£{(monthlyPrice * 12).toFixed(2)} per year</li>
        <li>Pause and restart at anytime</li>
        {saving > 0 && 
          <li className="saving">Save {saving * 100}%</li>
        }
      </ul>
    </div>
  )
}