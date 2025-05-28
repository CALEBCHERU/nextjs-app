// app/dashboard/layout.jsx
export default function DashboardLayout({ children }) {
  return (
    <div>
        {/* This layout wraps all child routes (/dashboard, /dashboard/settings) and does not reload on navigation.
It's good for persistent elements like a sidebar. */}
      <nav>📋 Dashboard Navigation</nav>
      <div>{children}</div>
    </div>
  );
}
