import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getAnalytics } from "@/actions/get-analytics";



import { Chart } from "../../analytics/_components/chart";
import { DataCard } from "../../analytics/_components/data-card";

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    data,
    totalRevenue,
    totalSales,
  } = await getAnalytics(userId);

  return ( 
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard
          label="Toplam gelir"
          value={totalRevenue}
          shouldFormat
        />
        <DataCard
          label="Toplam satış"
          value={totalSales}
        />
      </div>
      <Chart
        data={data}
      />
    </div>
   );
}
 
export default AnalyticsPage;