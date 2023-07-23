// Menu Click Sound
const [playClick] = useSound('/sounds/Click.mp3')
const handleContactClickSound = () => {
  playClick()
}
// ************
useEffect(() => {
  handleContactClickSound()
}, [playClick])
