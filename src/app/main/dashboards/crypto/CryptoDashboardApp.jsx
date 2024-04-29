import TeamMembersWidget from "../project/tabs/team/widgets/TeamMembersWidget";
import Typography from "@mui/material/Typography";

function CryptoDashboardApp() {
  return (
    <div className="flex flex-col w-full container">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0">
        <div className="flex flex-col flex-auto">
          <Typography className="text-3xl font-semibold tracking-tight leading-8">
            All members
          </Typography>
          <Typography
            className="font-medium tracking-tight"
            color="text.secondary"
          >
            Here are your team members
          </Typography>
        </div>
      </div>
      <TeamMembersWidget />
    </div>
  );
}

export default CryptoDashboardApp;
