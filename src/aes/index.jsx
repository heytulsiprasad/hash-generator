import React from "react";
import {
  Input,
  Text,
  Button,
  Stack,
  Textarea,
  Box,
  Flex,
} from "@chakra-ui/react";
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";

const key = "password";

const AESHashing = () => {
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const encrypt = (e) => {
    e.preventDefault();

    const encrypted = AES.encrypt(value, key).toString();
    setResult(encrypted);
  };

  const decrypt = (e) => {
    e.preventDefault();

    const decrypted = AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
    setResult(decrypted);
  };

  return (
    <Flex
      direction="column"
      className="App"
      style={{ padding: "2rem", justifyContent: "space-between" }}
    >
      <Stack>
        <Text fontSize="6xl">Advanced Encryption Standard</Text>
        <form onSubmit={() => {}}>
          <Textarea value={value} onChange={(e) => setValue(e.target.value)} />
          <Flex gap={4}>
            <Button type="submit" mt={4} colorScheme="teal" onClick={encrypt}>
              Encrypt
            </Button>
            <Button type="submit" mt={4} colorScheme="yellow" onClick={decrypt}>
              Decrypt
            </Button>
          </Flex>
        </form>
      </Stack>
      <Box
        sx={{
          marginTop: "2rem",
          padding: "2rem",
          border: "2px solid #eee",
          borderRadius: "10px",
        }}
      >
        <Stack mt={4}>
          <Input value={result} />
        </Stack>
      </Box>
      <Box>
        <Text>Made with 💖 at CTEA, Madh Campus</Text>
      </Box>
    </Flex>
  );
};

export default AESHashing;
