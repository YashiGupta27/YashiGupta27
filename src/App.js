import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';




function App() {

  const onToken = (token)=>{
    console.log(token)
  }
  return (
    <div className="App">
     <StripeCheckout
     currency="USD"
     name="Three Comma Co."
     description="Big Data Stuff"
     panelLabel="Give Money"
        token={onToken}
        stripeKey="pk_test_51KY19QSBDSZANSrJeRuEJ1scUBNFSr0blHPjuIk3Z2rguZpsz5onWnPqoxPXiit6PrKgs6Kr2Aao3vX9ZJfsgIst002xyG3rjw"
      />
      
    </div>
  );
}

export default App;
