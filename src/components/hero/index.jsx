import StatItem from "../StatItem";
import CardComponent from "../card";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Challenges from "../challenges.index";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Hero = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <div className=" bg-customBlue w-full h-[565px] flex gap-24 items-center justify-center">
        <div className="max-w-[705px] flex items-start justify-center max-h-80 font-poppins gap-14">
          <div className="bg-customeYellow w-2.5 h-28" />
          <div className="flex flex-col gap-9 text-background">
            <h1 className="text-5xl font-semibold leading-[56px]">
              Accelerate Innovation with Global AI Challenges
            </h1>
            <p className="max-w-[531px] text-[18px] leading-6 font-medium">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <Button className="bg-white h-12 text-black w-fit font-semibold text-[18px]">
              Create Challenge
            </Button>
          </div>
        </div>
        <div>
          <img src="/PicsArt_04-14-04.42 1.svg" alt="img" />
        </div>
      </div>
      <div className="bg-customDarkBlue text-background h-[200px] flex justify-center gap-16 max-w-screen-2xl items-center space-x-8">
        <StatItem
          icon="/Group 1000002515.svg"
          data="100k+"
          description="AI model submissions"
        />
        <Separator orientation="vertical" className="h-10 w-[1px]" />
        <StatItem
          icon="/Group 1000002516.svg"
          data="50k+"
          description="Data Scientists"
        />
        <Separator orientation="vertical" className="h-10 w-[1px" />
        <StatItem
          icon="/Group 1000002518.svg"
          data="100k+"
          description="AI Challenges hosted"
        />
      </div>
      <div className="h-screen max-w-screen-2xl mx-auto">
        <h1 className="font-poppins my-[90px] text-[32px] leading-5 text-center font-semibold">
          Why Participate in{" "}
          <span className="text-customGreen">AI Challenges?</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-9 max-w-screen-2xl mx-auto">
          <CardComponent
            icon="/public/carbon_notebook-reference.svg"
            title="Prove your skills"
            description="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
          />
          <CardComponent
            icon="/public/Vector.svg"
            title="Learn from community"
            description="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
          />
          <CardComponent
            icon="/public/Robot.svg"
            title="Challenge yourself"
            description="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
          />
          <CardComponent
            icon="/public/IdentificationCard.svg"
            title="Earn recognition"
            description="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
          />
        </div>
      </div>
      <div className="h-screen max-w-screen-2xl m-auto">
        <div className="bg-customDarkBlue text-white p-[72px] flex flex-col gap-16 items-center justify-center">
          <h1 className="text-[28px] leading-10 font-poppin font-semibold">
            Explore Challenges
          </h1>
          <div className="flex gap-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="md:min-w-[300px] pl-16 lg:min-w-[829px] h-[50px] rounded-xl shadow-sm bg-white text-black"
              />
              <Search className="absolute left-9 top-[17px] w-4 h-4 text-black" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-foreground h-[50px] rounded-xl font-normal font-inter text-[18px] leading-6"
                >
                  Filter <ChevronDown className="ml-3 text-black" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex w-full justify-between font-normal font-inter text-[18px] leading-7">
                  Filter
                  <ChevronUp />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal font-inter text-base text-customGrayLight">
                    Status
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                    className="text-customGrayDark font-normal font-inter text-sm"
                  >
                    All
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                    className="text-customGrayDark font-normal font-inter text-sm"
                  >
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                    className="text-customGrayDark font-normal font-inter text-sm"
                  >
                    Upcoming
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                    className="text-customGrayDark font-normal font-inter text-sm"
                  >
                    Past
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal font-inter text-base text-customGrayLight">
                    Level
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                    className="text-customGrayDark font-normal font-inter text-sm"
                  >
                    Easy
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                    className="text-customGrayDark font-normal font-inter text-sm"
                  >
                    Medium
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                    className="text-customGrayDark font-normal font-inter text-sm"
                  >
                    Hard
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full h-full bg-customBlue flex justify-center ">
          <Challenges />
        </div>
      </div>
    </>
  );
};

export default Hero;
