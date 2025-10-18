import React, { Suspense } from "react";
import LeasePageContent from "./LeasePageContent";

export default function BuyPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <LeasePageContent />
    </Suspense>
  );
}
