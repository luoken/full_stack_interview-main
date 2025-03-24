import React from "react";

import { Badge, Box, Text } from "@radix-ui/themes";

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
        <strong>Due</strong>: {payment_due_at}
      </Text>
      <Text as="div">
        <strong>Amount</strong>:{" "}
        {handlePaymentCurrency(payment_amount, payment_currency)}
      </Text>
      <Text as="div">
        <strong>Recurring</strong>:{handleRecurring(recurring)}
      </Text>
    </Box>
  );
};

export default Payment;
