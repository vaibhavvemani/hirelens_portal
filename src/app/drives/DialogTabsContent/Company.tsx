import { Drive } from "@/types/drives";
import { Building, FileText, Globe, Banknote, MapPin } from "lucide-react";

interface CompanyProps {
  drive: Drive;
}

const Company = ({ drive }: CompanyProps) => {
  return (
    <div className="flex flex-col gap-4 pb-5">
      <div className="flex items-center gap-2">
        <Building strokeWidth={2.5} size={20} />
        <h1 className="text-xl font-bold">{drive.company}</h1>
      </div>

      <div className="flex flex-col gap-1 font-medium">
        {/* Description */}
        <div className="flex items-start gap-2">
          <FileText
            strokeWidth={2}
            size={18}
            className="mt-0.5 flex-shrink-0"
          />
          <p className="text-sm">{drive.companydetails.description}</p>
        </div>

        {/* Website */}
        <div className="flex items-center gap-2">
          <Globe strokeWidth={2} size={18} />
          <a
            href={drive.companydetails.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            {drive.companydetails.website}
          </a>
        </div>

        {/* Revenue */}
        <div className="flex items-center gap-2">
          <Banknote strokeWidth={2} size={18} />
          <p className="text-sm">Revenue: {drive.companydetails.revenue}</p>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPin strokeWidth={2} size={18} className="mt-0.5 flex-shrink-0" />
          <p className="text-sm">{drive.companydetails.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
