import React, { useState } from "react";
import {
  Button,
  Box,
  Dialog,
  Flex,
  Switch,
  TextField,
  Text,
  Select,
} from "@radix-ui/themes";

const AddContract = (props) => {
  const { pushEvent } = props;
  const [contract, setContract] = useState({
    recipient_name: "",
    status: "pending",
    name: "",
    company_name: "",
    payment_due_date: new Date().toISOString().substring(0, 10),
    payment_due_time: "00:00",
    payment_due_at: new Date().toISOString(),
    payment_amount: "",
    payment_currency: "USD",
    recipient_email: "",
    recurring: false,
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContract({ ...contract, [name]: value });
  };

  const handlePaymentCurrency = (currency) => {
    setContract({ ...contract, ["payment_currency"]: currency });
  };

  const handleStatusSelect = (status) => {
    setContract({ ...contract, ["status"]: status });
  };

  const handleRecurringSwitch = (recurringSwitch) => {
    setContract({ ...contract, ["recurring"]: recurringSwitch });
  };

  const handleDate = (event) => {
    event.preventDefault();
    setContract({
      ...contract,
      ["payment_due_at"]: new Date(
        `${event.target.value} ${contract["payment_due_time"]} UTC`,
      ).toISOString(),
      ["payment_due_date"]: event.target.value,
    });
  };

  const handleTime = (event) => {
    event.preventDefault();
    setContract({
      ...contract,
      ["payment_due_at"]: new Date(
        `${contract["payment_due_date"]} ${event.target.value} UTC`,
      ).toISOString(),
      ["payment_due_time"]: event.target.value,
    });
  };

  const handleSubmit = () => {
    pushEvent("update_contract", contract);
  };

  return (
    <Dialog.Root style={{ float: "right" }}>
      <Dialog.Trigger asChild>
        <Button>Add Contract</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Contract</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Fill in information about the contract.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Contract Name
            </Text>
            <TextField.Root
              placeholder="Enter Contract Name"
              name="name"
              value={contract.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Company Name
            </Text>
            <TextField.Root
              placeholder="Enter Company Name"
              name="company_name"
              value={contract.company_name}
              onChange={handleChange}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Recipient Name
            </Text>
            <TextField.Root
              placeholder="Enter Recipient's Name "
              name="recipient_name"
              value={contract.recipient_name}
              onChange={handleChange}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Recipient Email
            </Text>
            <TextField.Root
              placeholder="Enter Recipient's Email"
              name="recipient_email"
              value={contract.recipient_email}
              onChange={handleChange}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Payment Due Date
            </Text>

            <input
              type="date"
              name="payment_due_date"
              value={contract.payment_due_date}
              onChange={handleDate}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Payment Due Time
            </Text>

            <input
              type="time"
              name="payment_due_time"
              value={contract.payment_due_time}
              onChange={handleTime}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Payment Amount
            </Text>
            <div style={{ display: "inline-flex", width: "100%", gap: "5px" }}>
              <Select.Root
                value={contract.payment_currency}
                onValueChange={handlePaymentCurrency}
              >
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="USD">USD</Select.Item>
                  <Select.Item value="EUR">EUR</Select.Item>
                </Select.Content>
              </Select.Root>
              <TextField.Root
                placeholder="Enter Payment Amount"
                style={{ flexGrow: "1" }}
                name="payment_amount"
                value={contract.payment_amount}
                onChange={handleChange}
              />
            </div>
          </label>

          <label style={{ display: "inline-flex" }}>
            <Text
              as="div"
              size="2"
              mb="1"
              weight="bold"
              style={{ paddingRight: "10px" }}
            >
              Recurring
            </Text>
            <Switch
              name="recurring"
              value={contract.recurring}
              onCheckedChange={handleRecurringSwitch}
            />
          </label>

          <label style={{ display: "inline-flex" }}>
            <Text
              as="div"
              size="2"
              mb="1"
              weight="bold"
              style={{ paddingRight: "10px" }}
            >
              Status
            </Text>

            <Select.Root
              name="status"
              value={contract.status}
              onValueChange={handleStatusSelect}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="pending">Pending</Select.Item>
                <Select.Item value="signed">Signed</Select.Item>
                <Select.Item value="executed">Executed</Select.Item>
              </Select.Content>
            </Select.Root>
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleSubmit} phx-click="update_contract">
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddContract;
