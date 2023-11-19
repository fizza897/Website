import Hero from './components/Widget/Hero'
import { CoreTrackers } from './components/Widget/CoreTrackers'
import SpecializedTrack from './components/Widget/SpecializedTrack'
import OutCome from './components/Widget/OutCome'


export default function Home() {
  return (
    <>
    {/* hero */}
    <Hero/>
    <CoreTrackers/>
    <SpecializedTrack/>
    <OutCome/>
    </>
  )
}
