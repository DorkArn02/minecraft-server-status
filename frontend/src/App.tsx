import { Box, Button, Flex, FormControl, Heading, HStack, Image, Input, InputGroup, Text } from '@chakra-ui/react'
import axios from "axios"
import { useState } from 'react'
import ReactHtmlParser from "react-html-parser"
import Logo from "./assets/icon.png"
import { MinecraftServerStatus } from './interfaces'

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND as string

  const [host, setHost] = useState<string>("")
  const [port, setPort] = useState<number>(25565)
  const [data, setData] = useState<MinecraftServerStatus>()
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleCheck = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setData(undefined)
    try {
      setLoading(true)
      const response = await axios.get('/', {
        params: {
          host,
          port
        }
      })
      console.log(response)
      setData(response.data as MinecraftServerStatus)
      setError("")
    } catch (err) {
      setError("Wrong hostname or port.")
    }
    setLoading(false)
  }


  return (
    <Flex minH={"100vh"} align={"center"} flexDir={"column"}>
      <Flex p={2} align={"center"} flexDir={"column"}>
        <Image src={Logo} maxW={["80px", "150px"]} />
        <Heading mb={5} textAlign={"center"} size={["md", "xl"]} fontWeight={"light"}>Minecraft server status checker</Heading>
        <form onSubmit={handleCheck}>
          <InputGroup gap={2} flexDir={["column", "row"]}>
            <FormControl isRequired>
              <Input size={["sm", "md"]} onChange={(e) => { setHost(e.target.value); setError("") }} type="text" placeholder='mc.examplecraft.com' />
            </FormControl>
            <FormControl>
              <Input size={["sm", "md"]} onChange={(e) => { setPort(parseInt(e.target.value)); setError("") }} type="number" placeholder='Default value: 25565' />
            </FormControl>
            <Button size={["sm", "md"]} type="submit" isLoading={loading} w={"200px"}>Check</Button>
          </InputGroup>
        </form>
      </Flex>
      {error ? <Text>{error}</Text> : ""}
      <Flex flexDir={"column"} p={2}>
        {data ?
          <Box>
            <Heading size={"md"} mb={3}>Server information:</Heading>
            <HStack mb={3}>
              <Box>
                <Image maxH={"50px"} maxW={"50px"} src={data.favicon}></Image>
              </Box>
              <Box p={2} bgColor={"black"}>
                {ReactHtmlParser(data.motd.html)}
              </Box>
            </HStack>
            <Text mb={2}>Players: {data.players.online} / {data.players.max}</Text>
            <Text mb={2}>Version: {data.version.name}</Text>
            <Text>Protocol: {data.version.protocol}</Text>
          </Box>
          : ""}
      </Flex>
    </Flex>
  )
}

export default App
