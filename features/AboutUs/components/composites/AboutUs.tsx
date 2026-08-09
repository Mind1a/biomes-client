import Image from "next/image";
import { aboutUsData, projectAuthor, teamData } from "../../data/AboutUs";
import TeamCard from "../primitives/TeamCards";

const AboutUs = () => {
  return (
    <section>
      {/* Background photo section */}
      <div className="relative">
        <Image
          src="/assets/images/AboutUs/AboutUsBackGroundPhoto.svg"
          width={1440}
          height={480}
          alt="backgroundPhoto"
          className="w-full"
        />
        <div className="absolute left-[7%] top-[92%] -translate-10 ">
          <h1 className="text-white font-bold text-[15px] pl-10 md:text-[30px] md:pl-0 lg:text-[50px]">
            პროექტის შესახებ
          </h1>
        </div>
      </div>
      {/* hero section */}
      <div className="flex flex-col mx-auto min-h-[dvh] md:flex-col md:items-center md:pl-4 md:pr-4 lg:flex-row lg:items-start lg:max-w-[1398px] lg:mt-8.25 ">
        <div className="max-w-214 bg-[#FFFFFF]  pl-4 pb-4 pr-4 mb-8 ml-4 mr-4 rounded-3xl mt-3.5 pt-6 lg:pl-8 lg:pr-8 lg:pb-6 leading-7 md:max-w-[802px]">
          {aboutUsData.map((section) => (
            <div key={section.title}>
              <h2 className="text-[15px] md:text-[20px] mb-4 font-bold">
                {section.title}
              </h2>

              <div className="lg:space-y-7.5 md:space-y-6 text-[14px] md:text-[18px]">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pr-4 lg:p-0 md:p-0 lg:min-h-[632px]">
          <div className="bg-[#FFFFFF] ml-4 pb-4 md:mx-auto lg:mr-4.5  lg:w-117.75 lg:min-h-200 lg:ml-6  rounded-[20px] mt-3.5 pt-6 pl-6 pr-3.75 md:max-w-[802px] md:h-[400px]">
            <div className="w-[148x] h-37 flex">
              <Image
                src="/assets/images/AboutUs/project-author.svg"
                width={148}
                height={148}
                alt="project-author"
              />
              <div className="ml-3 ">
                <h2 className="text-[18px] font-bold">{projectAuthor.name}</h2>
                <h3 className="text-[16px]">{projectAuthor.role}</h3>

                <p className=" lg:w-60 md:max-w-162  lg:min-h-21  mt-3 leading-7 text-[14px] md:text-[16px]">
                  {projectAuthor.bio}
                </p>
              </div>
            </div>
            <div>
              {projectAuthor.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="lg:w-100 md:max-w-[770px] min-h-77 leading-7 text-[14px] md:text-[18px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-[#FFFFFF]   md:w-full md:mx-auto  lg:w-117.75 h-27 ml-6 mt-4 rounded-[20px]  md:mr-4">
            <div className="p-6 ">
              <h2 className="mb-4 font-bold">საავტორო უფლებები</h2>
              <a
                href="https://www.google.se/index.html"
                className="text-[#0000FF]"
                target="_blank"
              >
                <ul className="list-disc pl-5.5">
                  <li> https://www.google.se/index.html</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
      ;{/* bottom section */}
      <div className="mx-4 md:mx-auto md:max-w-200.5 lg:max-w-345 mb-20 md:mt-8 md:px-4 lg:px-0">
        <h2 className="mb-8 mt-10 text-[18px] md:text-[25px] font-bold">
          პროექტზე მუშაობდნენ
        </h2>
        <div className="grid grid-cols-1 gap-6 md:hidden text-[14px] md:text-[18px]">
          {teamData.slice(0, 6).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="hidden grid-cols-2 gap-6 md:grid xl:hidden">
          {teamData.slice(0, 8).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="hidden grid-cols-3 gap-6 xl:grid">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
