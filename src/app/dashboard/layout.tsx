import React from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  archive,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  archive: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>{users}</div>
          <div>{notifications}</div>
          <div>{archive}</div>
        </div>
      </div>
    </div>
  );
}
