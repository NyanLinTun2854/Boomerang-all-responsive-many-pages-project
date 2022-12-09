import React from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

const AboutCount = () => {
  return (
    <div className="w-full max-h-[600px] bgEmployee relative flex items-center py-[30px] sm:py-[80px] lg:py-[80px]">
      <div className="color-overlay"></div>
      <div className="w-[90%] mx-auto h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 justify-items-center">
        <div>
          <CountUp start={0} end={1538} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#fff] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#fff] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
        <div>
          <CountUp start={0} end={2124} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#fff] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#fff] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
        <div>
          <CountUp start={0} end={3128} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#fff] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#fff] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
        <div>
          <CountUp start={0} end={9534} duration={5}>
            {({ countUpRef, start }) => (
              <Waypoint onEnter={start}>
                <div>
                  <span
                    ref={countUpRef}
                    className="text-[3.125rem] font-[500] leading-[1.3] text-[#fff] font-poppin"
                  />
                </div>
              </Waypoint>
            )}
          </CountUp>

          <div>
            <p className="text-[.875rem] font-[400] leading-[1.8] text-[#fff] font-poppin">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCount;
