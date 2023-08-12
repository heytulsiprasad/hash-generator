import * as React from "react";
import "./App.css";
import {
  Input,
  Text,
  Button,
  Stack,
  Textarea,
  Box,
  Flex,
} from "@chakra-ui/react";
import md5 from "md5-hash";
import sha1 from "js-sha1";

// Create a hash generator
function App() {
  const [value, setValue] = React.useState("");
  const [md5Result, setMd5Result] = React.useState("");
  const [sha1Result, setSha1Result] = React.useState("");

  const updateHash = (e) => {
    // Prevent the form from submitting
    e.preventDefault();

    const md5Hash = md5(value);
    // Update the MD5 hash
    setMd5Result(md5Hash);

    // Update the SHA-1 hash
    setSha1Result(sha1(value));
  };

  return (
    <Flex
      direction="column"
      className="App"
      style={{ padding: "2rem", justifyContent: "space-between" }}
    >
      <Stack>
        <Text fontSize="6xl">Hashing Algorithms</Text>
        <form onSubmit={updateHash}>
          <Textarea value={value} onChange={(e) => setValue(e.target.value)} />
          <Button type="submit" mt={4} colorScheme="blue">
            Generate Hash
          </Button>
        </form>
      </Stack>
      <Flex
        direction="column"
        gap={4}
        sx={{
          marginTop: "2rem",
          padding: "2rem",
          border: "2px solid #eee",
          borderRadius: "10px",
        }}
      >
        <Stack>
          <Text fontSize="xl" as="b">
            MD5
          </Text>
          <Input value={md5Result} />
        </Stack>
        <Stack>
          <Text fontSize="xl" as="b">
            SHA-1
          </Text>
          <Input value={sha1Result} />
        </Stack>
      </Flex>
      <Box>
        <Text>Made with 💖 at CTEA, Madh Campus</Text>
      </Box>
    </Flex>
  );
}

export default App;
