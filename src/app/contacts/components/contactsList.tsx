"use client";

import { CustomTable } from "@/app/components/customTable";
import { useFetchContacts } from "@/app/hooks/useFetchContacts";
import { Spin } from "antd";

const contactHeaders = ["Name", "Role", "Email", "Companies"];

export const ContactsList = () => {
  const { data: contacts, isLoading, isError } = useFetchContacts();
  const tableRows = contacts?.map((contact) => {
    const company = contact.companies;
    return [
      contact.name,
      <p
        key={contact.role}
        className="border-[#015CB9] border text-[#015CB9] rounded-2xl px-2 py-1 w-fit"
      >
        {contact.role}
      </p>,
      contact.email,
      <p key={company.Name}>{company.Name}</p>,
    ];
  });

  return (
    <div>
      {isError ? (
        <span className="h-[400px] text-gray-500 font-semibold w-full flex items-center justify-center">
          <p>Loading failed due to poor network</p>
        </span>
      ) : isLoading ? (
        <span className="h-[400px] w-full flex items-center justify-center">
          <Spin />
        </span>
      ) : (
        <CustomTable headers={contactHeaders} rows={tableRows ?? []} />
      )}
    </div>
  );
};
