import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleCheckBig } from "lucide-react";

function Challenges() {
  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer group h-fit w-[354px]">
      <div className="relative h-44 sm:h-48">
        <img
          src="/public/cardimage/Group 1000002771.png"
          alt="Healthcare IoT"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center py-6 gap-5 flex flex-col justify-center items-center">
        <Badge
          variant="outline"
          className=" rounded-sm font-normal font-inter text-xs bg-customeYellowLight text-foreground border-none "
        >
          Badge
        </Badge>
        <h1 className="max-w-[246px] font-poppins font-semibold text-base text-center">
          Data Science Bootcamp - Graded Datathon
        </h1>
        <div className="mt-1.5 flex flex-col gap-2">
          <p className="text-sm font-medium font-poppins text-customeBrown">
            Starts in
          </p>
          <div className="flex flex-col">
            <div className="text-[18px] leading-[28px] flex gap-2 font-poppins font-semibold">
              <p>00</p>:<p>15</p>:<p>22</p>
            </div>
            <div className="w-full text-customeBrown gap-4 text-[10px] font-medium font-inter flex justify-between items-center">
              <p>Days</p>
              <p>Hours</p>
              <p>Minutes</p>
            </div>
          </div>
        </div>

        <Button className="bg-customGreenButton hover:bg-customGreen hover:text-background h-10 text-sm font-semibold font-poppins rounded-xl text-white">
          <CircleCheckBig className="mr-3" />
          Participate Now
        </Button>
      </div>
    </div>
  );
}

export default Challenges;
