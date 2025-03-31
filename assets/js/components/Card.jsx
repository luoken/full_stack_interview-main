import React from "react";
import { Badge, Box, Card, DataList } from "@radix-ui/themes";

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
      <Badge size="1" color="green" variant="soft" radius="large">
        {recurring.toString()}
      </Badge>
    );
  } else {
    return (
      <Badge size="1" color="yellow" variant="soft" radius="large">
        {recurring.toString()}
      </Badge>
    );
  }
};

const setContractStatus = (status) => {
  const capitalized_status = status.charAt(0).toUpperCase() + status.slice(1);
  if (capitalized_status === "Executed") {
    return (
      <Badge color="blue" variant="soft" radius="large">
        {capitalized_status}
      </Badge>
    );
  } else if (capitalized_status === "Signed") {
    return (
      <Badge color="green" variant="soft" radius="large">
        {capitalized_status}
      </Badge>
    );
  } else if (capitalized_status === "Pending") {
    return (
      <Badge color="yellow" variant="soft" radius="large">
        {capitalized_status}
      </Badge>
    );
  } else {
    return (
      <Badge color="red" variant="soft" radius="large">
        {capitalized_status}
      </Badge>
    );
  }
};

// filter by status, filter by company, filter bydue date, filter by currency, filter by recurring,
const Cards = (props) => {
  const { contract } = props;

  return (
    <Box mt="10px" width="580px">
      <Card>
        <DataList.Root>
          <DataList.Item align="center">
            <DataList.Label>Contract Name</DataList.Label>
            <DataList.Value>{contract.name}</DataList.Value>

            <DataList.Label>Company</DataList.Label>
            <DataList.Value>{contract.company_name}</DataList.Value>

            <DataList.Label>Status</DataList.Label>
            <DataList.Value>
              {setContractStatus(contract.status)}
            </DataList.Value>

            <DataList.Label>Payment Due At</DataList.Label>
            <DataList.Value>{contract.payment_due_at}</DataList.Value>

            <DataList.Label>Payment Amount</DataList.Label>
            <DataList.Value>
              {handlePaymentCurrency(
                contract.payment_amount,
                contract.payment_currency,
              )}
            </DataList.Value>

            <DataList.Label>Recipient Name</DataList.Label>
            <DataList.Value>{contract.recipient_name}</DataList.Value>

            <DataList.Label>Recipient Email</DataList.Label>
            <DataList.Value>{contract.recipient_email}</DataList.Value>

            <DataList.Label>Recurring</DataList.Label>
            <DataList.Value>
              {handleRecurring(contract.recurring)}
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>
    </Box>
  );
};

export default Cards;
