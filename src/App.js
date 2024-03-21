import './stylesheets/app.scss';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SubscriptionCard } from './components/SubscriptionCard';
import { isLowestNumber } from './utils/isLowestNumber';
import subscriptionOptions from './data/subscriptionOptions.json'

function App() {
  const [subscriptionChoice, setSubscriptionChoice] = useState(subscriptionOptions[0].id)
  const subscriptionPrices = subscriptionOptions.map((option) => option.monthlyPrice)
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Treatment plan</h1>
        <h2>Subscribe to a plan and <strong>save up to 15%</strong> on your prescription</h2>
        
        <div className="subscription-options">
          {subscriptionOptions.map((option) => {
            return(
              <SubscriptionCard 
                key={option.id}
                checked={option.id === subscriptionChoice} 
                termMonths={option.termMonths}
                monthlyPrice={option.monthlyPrice}
                saving={option.saving}
                ribbonText={isLowestNumber(option.monthlyPrice, subscriptionPrices) && "Best value"}
                onClick={() => setSubscriptionChoice(option.id)}
              />
            )
            })}
        </div>

        <div className="footer">
          <button className="btn-primary">Start regrowing</button>
        </div>
      </div>
    </div>
  );
}

export default App;
