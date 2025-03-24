import React from "react";

import { Box, Card, Text, Tabs } from "@radix-ui/themes";

import Company from "../components/Company";
import Payment from "../components/Payment";
import Recipients from "../components/Recipient";

// filter by status, filter by company, filter bydue date, filter by currency, filter by recurring,
const Cards = (props) => {
  const { contract } = props;
  return (
    <Box mt="10px">
      <Card>
        <Tabs.Root defaultValue="company">
          <Tabs.List>
            <Tabs.Trigger value="company">Company</Tabs.Trigger>
            <Tabs.Trigger value="payment">Payment</Tabs.Trigger>
            <Tabs.Trigger value="recipient">Recipient</Tabs.Trigger>
          </Tabs.List>
          <Box mt="7px">
            <Tabs.Content value="company">
              <Company
                name={contract.name}
                company_name={contract.company_name}
                status={contract.status}
              />
            </Tabs.Content>

            <Tabs.Content value="payment">
              <Payment
                payment_due_at={contract.payment_due_at}
                payment_amount={contract.payment_amount}
                payment_currency={contract.payment_currency}
                recurring={contract.recurring}
              />
            </Tabs.Content>

            <Tabs.Content value="recipient">
              <Recipients
                recipient_name={contract.recipient_name}
                recipient_email={contract.recipient_email}
              />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Card>
    </Box>
  );
};

export default Cards;
