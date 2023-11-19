import React from 'react'
import Wrapper from '../Shared/Wrapper'
import Image from 'next/image'
import Panaverse from "../Images/Logo-horizontal-fullcolor.png"


 const Footer = () => {
  return (
    <>
    <section className='mt-20 '>
    <Wrapper>
    <div className="flex flex-col md:flex-row items-center gap-x-5">
          <div className="flex-1">
          {/* left side */}
          <Image src={Panaverse} width={100} height={100} alt='Panaverse'/>
          <p>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
          <h1>Certified Web 3.0 and Metaverse Developer</h1>
           
          {/* right side  */}
        </div>
        <div className="flex-1">
          {/* left side */}
          <p>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</p>
          <h1>Certified Web 3.0 and Metaverse Developer</h1>
          <p>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the internet 
           </p>
            <p>

          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
          {/* right side  */}
        </div>
        <div className="flex-1">
          {/* left side */}
          <p className="mt-6 text-xl text-slate-600">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</p>
          <h1>Certified Web 3.0 and Metaverse Developer</h1>
          <p>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the internet 
           </p>
            <p>

          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
          {/* right side  */}
        </div>
        <div className="flex-1">
        <p>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</p>
          <h1>Certified Web 3.0 and Metaverse Developer</h1>
          <p>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the internet 
           </p>
            <p>

          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
        </div>
          </div>
    </Wrapper>
    </section>
    </>
  )
}
export default Footer