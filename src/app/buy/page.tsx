import React, { Suspense } from "react";
import BuyPageContent from "./BuyPageContent";

export default function BuyPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <BuyPageContent />
    </Suspense>
  );
}
