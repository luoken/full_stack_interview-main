import React from "react";

import { Badge, Box, Strong, Text } from "@radix-ui/themes";

// In the future we may be able to have a function to add currency
const currency = {
  USD: "$",
  EUR: "€",
};

const handlePaymentCurrency = (payment_amount, payment_currency) => {
  return currency[payment_currency].concat(`${payment_amount}`);
};

const handleRecurring = (recurring) => {
  if (recurring === true) {
    return (
      <Badge size="1" color="green">
        {recurring.toString()}
      </Badge>
    );
  } else {
    return (
      <Badge size="1" color="yellow">
        {recurring.toString()}
      </Badge>
    );
  }
};

const Payment = (props) => {
  const { payment_amount, payment_currency, payment_due_at, recurring } = props;

  return (
    <Box>
      <Text as="div">
        <Strong>Due</Strong>: {payment_due_at}
      </Text>
      <Text as="div">
        <Strong>Amount</Strong>:{" "}
        {handlePaymentCurrency(payment_amount, payment_currency)}
      </Text>
      <Text as="div">
        <Strong>Recurring</Strong>:{handleRecurring(recurring)}
      </Text>
    </Box>
  );
};

export default Payment;
