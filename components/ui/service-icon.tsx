import type { ServiceIcon as IconName } from "@/components/data/services";
import {
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineBanknotes,
  HiOutlineSquares2X2,
  HiOutlineLightBulb,
  HiOutlineCpuChip,
  HiOutlineCircleStack,
} from "react-icons/hi2";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";

const map: Record<IconName, React.ComponentType<{ className?: string }>> = {
  globe: HiOutlineGlobeAlt,
  telegram: FaTelegram,
  mobile: HiOutlineDevicePhoneMobile,
  fintech: HiOutlineBanknotes,
  erp: HiOutlineSquares2X2,
  consult: HiOutlineLightBulb,
  architecture: HiOutlineCpuChip,
  whatsapp: FaWhatsapp,
  database: HiOutlineCircleStack,
};

export default function ServiceIcon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} />;
}
