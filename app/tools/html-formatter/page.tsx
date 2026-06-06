import DeveloperToolPage from "../_components/DeveloperToolPage";
import { getTool } from "@/data/developerTools";

export default function Page() {
  return <DeveloperToolPage tool={getTool("html-formatter")} />;
}
