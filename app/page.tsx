import prisma from "@/prisma/client";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import IssueChart from "./components/IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  // return <LatestIssues />;
  // return <IssueSummary open={open} inProgress={inProgress} closed={closed} />;
  return <IssueChart open={open} inProgress={inProgress} closed={closed} />;
}
