import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal(props: { onApprove: any; }) {
  const { onApprove } = props;
  
  return (
      <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            onApprove={(data, actions): any => onApprove(data, actions)}
          />
      </PayPalScriptProvider>
  );
}