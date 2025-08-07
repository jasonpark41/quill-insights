import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Mail } from "lucide-react";
import React, { RefObject } from "react";

type DashboardHeaderProps = {
  handleExport: (type: "pdf" | "excel") => void;
  dropdownRef: RefObject<HTMLDivElement>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
};

export const DashboardHeader = ({
  handleExport,
  dropdownRef,
  open,
  setOpen,
  period,
  setPeriod,
}: DashboardHeaderProps) => (
  <div className="bg-primary text-primary-foreground py-8">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4 -ml-4">
          <span className="text-7xl font-bold text-primary-foreground">Quill</span>
          <div>
            <h1 className="text-3xl font-bold font-montserrat mb-2">Insights</h1>
            <p className="text-primary-foreground/90 text-lg">
              Track your facility spending, discover savings, and optimize your supply budget
            </p>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary" className="bg-healthcare-mint text-jet">
                January 2025
              </Badge>
              <Badge variant="secondary" className="bg-healthcare-mint text-jet">
                {period} Report
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2" onClick={() => handleExport('pdf')}>
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="secondary" className="gap-2" onClick={() => handleExport('excel')}>
            <Download className="h-4 w-4" />
            Export Excel
          </Button>
          <div className="relative" ref={dropdownRef}>
            <Button
              variant="secondary"
              className="gap-2"
              onClick={() => setOpen((prev: boolean) => !prev)}
            >
              <Calendar className="h-4 w-4" />
              {period}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            {open && (
              <div className="absolute left-0 z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <ul className="py-1">
                  {["Monthly", "Quarterly", "Yearly"].map(option => (
                    <li
                      key={option}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                        period === option ? "font-bold text-primary" : "text-gray-700"
                      }`}
                      onClick={() => {
                        setPeriod(option);
                        setOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Button variant="secondary" className="gap-2">
            <Mail className="h-4 w-4" />
            Email Settings
          </Button>
        </div>
      </div>
    </div>
  </div>
);