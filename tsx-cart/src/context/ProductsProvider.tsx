import React, { useState, useEffect, createContext, ReactElement } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

//const initState: ProductType[] = [];

const initState: ProductType[] = [
  {
    sku: "item01",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item02",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item03",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type UserProductsContextType = { products: ProductType[] };

const initContextState: UserProductsContextType = {
  products: [],
};

const ProductsContext =
  createContext<UserProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  /*  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      let data;
      try {
        const res = await fetch("http://localhost:3500/products");
        const json = await res.json();
        data = json;
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
      }
      return data;
    };

    fetchProducts().then((products) => setProducts(products));
  }, []); */

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
