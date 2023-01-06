import './App.css';
import { Flex, Text, Link } from 'rebass'
 
function App() {
  return (
    <Flex
      sx={{
        height: '100vh', 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Text
        sx={{
          width: '100%',
          maxWidth: '800px',
          fontSize: '22px',
          textAlign: 'left',
          margin: '20px'
        }}
      >
        Hi! My name is Carl. I'm the CEO and founder of <Link href="https://coherent.sh">Coherent</Link>, a platform for providing human readable blockchain data to developers. 
      </Text>
        
      <Text
        sx={{
          width: '100%',
          maxWidth: '800px',
          fontSize: '22px',
          textAlign: 'left',
          margin: '20px'
        }}
      >
        Prior to Coherent I was an early engineer and ventures team member at <Link href="https://coinbase.com">Coinbase</Link>. 
      
      </Text>

      <Text
        sx={{
          width: '100%',
          maxWidth: '800px',
          fontSize: '22px',
          textAlign: 'left',
          margin: '20px'
        }}
      >
        
        If you wanna get in touch, find me on <Link href="https://twitter.com/carlcortright">Twitter</Link> or <Link href="https://telegram.me/carlcortright">Telegram</Link>.
      </Text>
    </Flex>

  );
}

export default App;