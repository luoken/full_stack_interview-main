import React from "react";
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
// import { Switch } from "@radix-ui";

const AddContract = (props) => {
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
            <TextField.Root placeholder="Enter Contract Name" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Company Name
            </Text>
            <TextField.Root placeholder="Enter Company Name" />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Recipient Name
            </Text>
            <TextField.Root placeholder="Enter Recipient's Name " />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Recipient Email
            </Text>
            <TextField.Root placeholder="Enter Recipient's Email" />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Payment Amount
            </Text>
            <div style={{ display: "inline-flex", width: "100%" }}>
              <Select.Root defaultValue="USD">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="USD">USD</Select.Item>
                  <Select.Item value="EUR">EUR</Select.Item>
                </Select.Content>
              </Select.Root>
              <TextField.Root
                placeholder="Enter Payment Amount"
                style={{ flexGrow: "1" }}
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
            <Switch />
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

            <Select.Root defaultValue="pending">
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
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddContract;
