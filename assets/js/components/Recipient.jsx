import React from "react";

import { Box, Text } from "@radix-ui/themes";

const Recipients = (props) => {
  const { recipient_name, recipient_email } = props;
  return (
    <Box>
      <Text as="div">
        <strong>Name</strong>: {recipient_name}
      </Text>
      <Text as="div">
        <strong>Email</strong>: {recipient_email}
      </Text>
    </Box>
  );
};

export default Recipients;
