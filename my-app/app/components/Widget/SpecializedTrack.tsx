"use client";

import React, { useState } from "react";
import Wrapper from "../Shared/Wrapper";
import Button from "../Shared/Button";
import { FaArrowRight } from "react-icons/fa";
import Quarter from "../Shared/Quarter";
import Metaverse from "@/app/components/Images/metaverse.webp";
import Ai from "@/app/components/Images/ai.webp";
import Cloud from "@/app/components/Images/cloud.webp";
import Ambient from "@/app/components/Images/ambient.webp";
import Genomics from "@/app/components/Images/genomics.webp";
import Network from "@/app/components/Images/network.webp";
import Image from "next/image";
export const programmingData = [
  {
    slug: "web",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: Metaverse,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: Ai,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cloud",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: Cloud,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ambient",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: Ambient,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "genomics",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: Genomics,
    quarter: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "network",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: Network,
    quarter: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];
const SpecializedTrack = () => {
  const [seletedItem, setSelectedItem] = useState("web");
  const seletedItemData = programmingData.find(
    (item) => item.slug === seletedItem
  );
  console.log(seletedItemData);

  return (
    <section>
      <Wrapper>
        <div>
          <h2 className=" text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl max-w-screen-sm text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8 flex-1">
          {/* Content left */}
          <div className="shadow-xl sticky top-28 self-start basis-8/12 rounded-xl border  border-slate-200 py-8 px-6">
            <h4 className="text-primary text-lg font-medium">
              Specialized Track
            </h4>
            <h3 className="text-2xl font-bold">{seletedItemData?.header}</h3>
            <p className="text-lg text-slate-600 mt-2">
              {seletedItemData?.description}
            </p>
            <button className="text-teal-700  items-end gap-1 flex  text-xl mt-4 underline">
              Learn More <FaArrowRight size={20} />
            </button>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {seletedItemData?.quarter.map((item, index) => (
                <Quarter
                  key={item.number}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          {/* Content right */}
          <div className="px-4 space-y-4 py-6 basis-4/12 bg-slate-100 flex-1">
            {programmingData.map((item, i) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="flex gap-x-4 items-center cursor-pointer "
              >
                <div className="flex-shrink-0 h-24 w-36">
                  {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                  <Image
                    src={item.image}
                    alt={item.header}
                    className={"h-24 w-48 object-cover rounded-md"}
                  />
                  {/* object cover se image cover hoti hain */}
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Track
                  </h4>
                  <h3 className="text-xl font-semibold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default SpecializedTrack;
