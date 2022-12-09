import React from "react";
import { SlEnergy } from "react-icons/sl";
import { SlGameController } from "react-icons/sl";
import { SlFire } from "react-icons/sl";
import { SlDiamond } from "react-icons/sl";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

const CountedUp = () => {
  return (
    <div className="w-full 2xl:container mx-auto h-auto bg-[#f8f8f8] pt-[60px] sm:pt-[80px] lg:pt-[120px] pb-[30px]">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6">
        <div className="flex flex-col items-center">
          <SlEnergy className="w-[34px] h-[34px] text-pBlue mb-4" />

          <CountUp start={0} end={1538} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#222] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <SlFire className="w-[34px] h-[34px] text-pBlue mb-4" />

          <CountUp start={0} end={2124} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#222] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <SlGameController className="w-[34px] h-[34px] text-pBlue mb-4" />

          <CountUp start={0} end={3128} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#222] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <SlDiamond className="w-[34px] h-[34px] text-pBlue mb-4" />

          <CountUp start={0} end={9534} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#222] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountedUp;
