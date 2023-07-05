import { useEffect, useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import { ProductBanner } from "../../feature/Product/ProductBanner";
import { ProductIntro } from "../../feature/Product/ProductIntro";
import { ProductInfo } from "../../feature/Product/ProductInfo";
import { Cadastral } from "../../feature/Product/Cadastral";
import { Protection } from "../../feature/Product/Protection";
import { List } from "../../components/List";

export const Product = () => {
  const [productData, setProductData] = useState();
  useEffect(() => {
    setProductData(JSON.parse(localStorage.getItem("selectedArea")));
  }, []);
  return (
    <Wrapper>
      <ProductBanner image={productData?.generalInfo?.image} video={productData?.video} />
      <ProductIntro
        map={productData?.intro?.map}
        slides={productData?.intro?.slides}
        title={productData?.intro?.title}
        address={productData?.generalInfo?.address}
        text={productData?.intro?.text}
      />
      <ProductInfo
        firstRowTitle={productData?.info?.firstRow?.title}
        firstRowText={productData?.info?.firstRow?.text}
        firstRowImage={productData?.info?.firstRow?.image}
        secondRowTitle={productData?.info?.secondRow?.title}
        secondRowText={productData?.info?.secondRow?.text}
        secondRowImage={productData?.info?.secondRow?.image}
      />
      <Cadastral properties={productData?.properties} />
      <Protection />
      <List />
    </Wrapper>
  );
};
