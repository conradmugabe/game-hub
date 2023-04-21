import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  text: string;
  isExpanded?: boolean;
  limit?: number;
}

export default function ExpandableText({
  isExpanded = false,
  limit = 300,
  text,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  if (!text) return null;

  if (text.length <= limit) return <Text>{text}</Text>;

  const summary = expanded ? text : text.substring(0, limit) + "...";

  return (
    <Text textAlign="justify">
      {summary}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}
