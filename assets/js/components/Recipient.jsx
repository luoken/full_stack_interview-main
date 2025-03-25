import React from "react";

import { Box, Strong, Text } from "@radix-ui/themes";

const Recipients = (props) => {
  const { recipient_name, recipient_email } = props;
  return (
    <Box>
      <Text as="div">
        <Strong>Name</Strong>: {recipient_name}
      </Text>
      <Text as="div">
        <Strong>Email</Strong>: {recipient_email}
      </Text>
    </Box>
  );
};

export default Recipients;
