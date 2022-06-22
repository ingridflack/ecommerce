import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IProductItem } from "../interfaces";
import { toast } from "react-toastify";
import { checkProductStock } from "../services";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: string;
  quantity: number;
}

interface CartContextData {
  cart: IProductItem[];
  addProduct: (product: IProductItem) => Promise<void>;
  removeProduct: (productId: string) => void;
  updateProductAmount: ({ productId, quantity }: UpdateProductAmount) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const STORAGE_KEY = "@Ecommerce:cart";

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<IProductItem[]>([]);

  useEffect(() => {
    const storagedCart =
      typeof localStorage === "undefined"
        ? null
        : localStorage.getItem(STORAGE_KEY);

    setCart(storagedCart ? JSON.parse(storagedCart) : []);
  }, []);

  const clearCart = () => {
    setCart([]);
  };

  const addProduct = async (product: IProductItem) => {
    try {
      const updatedCart = [...cart];

      const productExists = updatedCart.find(({ id }) => product.id === id);

      const { data: productStock } = await checkProductStock(product.id);

      const stockAmount = productStock.qty_stock;
      const currentAmount = productExists ? productExists.quantity : 0;

      const amount = currentAmount + 1;

      if (amount > stockAmount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }

      if (productExists) {
        productExists.quantity = amount;
      } else {
        const newProduct = {
          ...product,
          quantity: 1,
        };

        updatedCart.push(newProduct);
      }

      setCart(updatedCart);

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
    } catch {
      toast.error("Erro ao adicionar o produto");
    }
  };

  const removeProduct = (productId: string) => {
    try {
      const updatedCart = [...cart];

      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
      } else {
        throw Error();
      }

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    quantity,
  }: UpdateProductAmount) => {
    try {
      if (quantity <= 0) return;

      const { data } = await checkProductStock(productId);

      const { qty_stock: stockAmount } = data;

      if (quantity > stockAmount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      } else {
        const updatedCart = [...cart];

        const productExists = updatedCart.find(
          (product) => product.id === productId
        );

        if (productExists) {
          productExists.quantity = quantity;

          setCart(updatedCart);
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
        } else {
          throw Error();
        }
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
