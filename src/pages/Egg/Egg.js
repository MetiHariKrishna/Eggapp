import EggDeatils from "@/componets/EggDeatils";
import { useRouter } from "next/router";
import React from "react";

const Egg = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <EggDeatils id={id} />
    </div>
  );
};

export default Egg;
