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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{notifications}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{archive}</div>
      </div>
    </div>
  );
}
