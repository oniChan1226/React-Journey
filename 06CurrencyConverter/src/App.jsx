import { useEffect, useState } from "react";
import useCurrencyConverter from "./hooks/useCurrencyConverter";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(1); 
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyConverter("usd");

  useEffect(() => {
    if (currencyInfo[from] && currencyInfo[to]) {
      const rateFrom = currencyInfo[from];
      const rateTo = currencyInfo[to];
      setConvertedAmount((amount * rateTo) / rateFrom);
    } else {
      setConvertedAmount(0);
    }
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  const reset = () => {
    setFrom("usd");
    setTo("pkr");
    setAmount(1);
  }

  const options = Object.keys(currencyInfo);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('')` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                currencyOptions={options}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={() => {}} // No need to handle amount change in "To" box
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                currencyOptions={options}
                amountDisabled={true}
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={reset}
            >
              reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
