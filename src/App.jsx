import ClockHeading from './components/ClockHeading';
import ClockTagLine from './components/ClockTag';
import CurrentTime from './components/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
   <center>
    <ClockHeading></ClockHeading>
    <ClockTagLine></ClockTagLine>
    <CurrentTime></CurrentTime>
   </center>
  )
}

export default App
