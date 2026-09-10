import {
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineCube,
  HiOutlineLockClosed,
  HiOutlineServerStack,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';
import { TbApi, TbBrandSpeedtest } from 'react-icons/tb';

const iconMap = {
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  NestJS: SiNestjs,
  'PHP / Laravel': [SiPhp, SiLaravel],
  Python: SiPython,
  'Next.js': SiNextdotjs,
  'React.js': SiReact,
  'Tailwind CSS': SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Prisma: SiPrisma,
  RabbitMQ: SiRabbitmq,
  'Socket.io': SiSocketdotio,
  'AWS EC2': FaAws,
  'VPS Hosting': HiOutlineServerStack,
  'CI/CD': SiGithubactions,
  GitHub: SiGithub,
  'OAuth 2.0': HiOutlineLockClosed,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  'REST APIs': TbApi,
  Microservices: HiOutlineCube,
  Agile: TbBrandSpeedtest,
  'System Design': HiOutlineCpuChip,
  Debugging: HiOutlineWrenchScrewdriver,
  'Team Leadership': HiOutlineUserGroup,
  'Client Comms': HiOutlineChatBubbleLeftRight,
};

export function getSkillIcons(name) {
  const icons = iconMap[name];
  if (!icons) return [HiOutlineCodeBracket];
  return Array.isArray(icons) ? icons : [icons];
}

export const skillBrandColors = {
  'Node.js': '#339933',
  'Express.js': '#000000',
  NestJS: '#E0234E',
  Python: '#3776AB',
  'Next.js': '#FFFFFF',
  'React.js': '#61DAFB',
  'Tailwind CSS': '#06B6D4',
  PostgreSQL: '#4169E1',
  MySQL: '#4479A1',
  MongoDB: '#47A248',
  Redis: '#DC382D',
  Prisma: '#2D3748',
  RabbitMQ: '#FF6600',
  'Socket.io': '#010101',
  'AWS EC2': '#FF9900',
  GitHub: '#FFFFFF',
  Firebase: '#FFCA28',
  Supabase: '#3FCF8E',
  'PHP / Laravel': '#777BB4',
};
