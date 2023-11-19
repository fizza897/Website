import React from "react";
import Wrapper from "@/app/components/Shared/Wrapper";
import Button from "@/app/components/Shared/Button";
import Quarter from "../Shared/Quarter";

export const CoreTrackers = () => {
  const CoreTrackerData = [
    {
      header: "Quarter I",
      description: "CS-101: Object-Oriented Programming using TypeScript",
      number: 1,
    },
    {
      header: "Quarter II",
      description:
        "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      number: 2,
    },
    {
      header: "Quarter III",
      description:
        "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      number: 3,
    },
    {
      header: "Quarter IV",
      description:
        "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
      number: 4,
    },
  ];
  const header1 = "Core Courses \n (Common in All Specializations):";
  return (
    <>
      <section className=" mt-16  lg:mt-28">
        <Wrapper>
          {/* Content */}
          <div className="max-w-screen-md">
            <h4 className="text-teal-700 font-semi-bold text-lg mt-4">
              Program of Studies
            </h4>
            <h2 className=" text-5xl font-bold whitespace-pre-line">
              {header1}
            </h2>
            <p className="mt-3 text-xl text-slate-600">
              Every participant of the program will start by completing the
              following three core courses.
            </p>
            <div className="mt-4 ">
              <Button text="Enroll Now" />
            </div>
          </div>
          {/* Boxes */}
          <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
  {CoreTrackerData.map((item, i) => {
    return (
      <>
        <Quarter
          key={item.number}
          header={item.header}
          description={item.description}
          number={i + 1}
        />
      </>
    );
  })}
</div>

        </Wrapper>
      </section>
    </>
  );
};
