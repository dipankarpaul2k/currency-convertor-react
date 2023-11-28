import { useEffect, useState } from "react";

export default function useCurrencyInfo(fromCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data[fromCurrency]);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [fromCurrency]);

  return data;
}
