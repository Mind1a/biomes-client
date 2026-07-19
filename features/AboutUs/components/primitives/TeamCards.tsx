import Image from "next/image";
import { TeamMember } from "../../types/AboutUs.types";
import { socialIcons } from "../../data/AboutUs";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="lg:w-[426px] md:max-w-[396px] w-full min-h-[106px] rounded-2xl bg-white px-10 py-10">
      <h3>{member.name}</h3>

      <p>{member.position}</p>

      <div className="mt-2 flex items-center gap-2">
        {member.socialLinks.map((social, index) => {
          const icon = socialIcons[social.type];

          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                width={icon.width}
                height={icon.height}
                alt={social.type}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
