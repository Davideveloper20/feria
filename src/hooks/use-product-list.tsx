import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { adminSessionAtom } from "@/store/admin-session-atom";
import { cartAtom } from "@/store/cart-atom";
import { updateImage, createProduct } from "@/services/api-main";
import { ProductListProps, Product } from "@/interfaces/main.interface";

export const useProductList = ({ title, products }: ProductListProps) => {
  const router = useRouter();

  const [cart, setCart] = useAtom(cartAtom);
  const [storedValue, setStoredValue] = useAtom(adminSessionAtom);

  const [titleCategory, setTitleCategory] = useState("");
  const [selectedAddProduct, setSelectedAddProduct] = useState({
    name: "",
    reference: "",
    size: "",
    price: "",
    image: "",
    categorie: "",
    color: "",
  });

  const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);
  const [isModalEditImage, setIsModalEditImage] = useState(false);
  const [isModalAddProduct, setIsModalAddProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const addToCart = (product: Product) => {
    setIsModalOpenSuccess(true);
    setCart((prevCart) => [...prevCart, product]);
  };

  const editProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalEditImage(true);
  };

  const addProductDetail = () => {
    setIsModalAddProduct(true);
    setTitleCategory(title);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];

      const fileName = selectedFile.name;
      setSelectedImage(selectedFile);
      setSelectedProduct((prevProduct) => ({
        ...prevProduct,
        image: fileName,
      }));
    }
  };

  const handleNewImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];

      const fileName = selectedFile.name;

      setSelectedImage(selectedFile);

      setSelectedAddProduct((prevProduct) => ({
        ...prevProduct,
        image: fileName,
        categorie: titleCategory,
      }));
    }
  };

  const saveEditedImage = async () => {
    if (!selectedImage || !selectedProduct) {
      return;
    }

    try {
      const data: any = await updateImage(selectedProduct);

      setIsModalEditImage(false);
      router.reload();

      console.log("Producto editado exitosamente:", data);
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/delete/${selectedProduct?._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setIsModalEditImage(false);
        router.reload();
      } else {
        console.error("Error al eliminar el producto");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const saveNewImage = async () => {
    if (!selectedAddProduct) {
      return;
    }

    try {
      const data: any = await createProduct(selectedAddProduct);

      setIsModalAddProduct(false);
      router.reload();

      console.log("Producto creado exitosamente:", data);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("Session");
    if (storedData) {
      setStoredValue(storedData);
    }
  }, []);

  return {
    cart,
    storedValue,
    titleCategory,
    selectedAddProduct,
    isModalOpenSuccess,
    isModalEditImage,
    isModalAddProduct,
    selectedProduct,
    selectedImage,
    addToCart,
    editProductDetail,
    addProductDetail,
    handleImageChange,
    handleNewImageChange,
    saveEditedImage,
    deleteProduct,
    saveNewImage,
    setIsModalEditImage,
    setIsModalAddProduct,
    setSelectedAddProduct,
    setSelectedProduct,
    setIsModalOpenSuccess,

  };
};
