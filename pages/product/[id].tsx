import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  //   const router = useRouter();
  //   console.log(router.query);
  //   console.log(router.params);
  const {
    query: { id },
  } = useRouter();

  return (
    <section>
      <h1>Página producto: {id}</h1>
    </section>
  );
};

export default ProductItem;
