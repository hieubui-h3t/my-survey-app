export function getCurrentPage(pathname: string): string {
  switch (pathname) {
    case "/dashboard":
      return "Dashboard";
    case "/program-data":
      return "Program Data";
    case "/view-report":
      return "View Report";
    case "/event-calendar":
      return "Event Calendar";
    case "/speaker-directory":
      return "Speaker Directory";
    case "/program-library":
      return "Program Library";
    case "/resource-docs":
      return "Resource Docs";
    case "/speaker":
      return "Speaker";
    case "/venue":
      return "Venue";
    case "/setting":
      return "Setting";
    default:
      return "Unknown";
  }
} 