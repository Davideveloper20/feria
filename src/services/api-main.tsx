import axios from "axios";

export const loginAdmin = async (data: any) => {

  try {
    const response = await axios.post("http://localhost:3001/api/login", {
      username: data.username,
      password: data.password,
    });

    if (response.status === 201) {

      console.log("login ingresado  con éxito front:", response.data);
    }
    return response;
  } catch (error) {
    console.error("Error login ingresado en front:", error);
  }
};

export const createProduct = async (data: any) => {
  try {
    const response = await axios.post("http://localhost:3001/api/create", {
      title: data.name,
      reference: data.reference,
      size: data.size,
      price: data.price,
      image: data.image,
      categorie: data.categorie, 
      color:data.color,  
    });

    if (response.status === 201) {
      console.log("Producto creado con éxito front:", response.data);
    }
  } catch (error) {
    console.error("Error al crear el producto en front:", error);
  }
};

export const updateImage = async (data: any) => {
  try {
    const response = await axios.post("http://localhost:3001/api/images", {
      _id: data._id,
      title: data.title,
      image: data.image,
      price: data.price,
      reference: data.reference,
      size: data.size,
      color:data.color,  

    });

    if (response.status === 201) {
      console.log("Producto actualizada con éxito front:", response.data);
    }
  } catch (error) {
    console.error("Error al actualizar producto en front:", error);
  }
};

export const getProducts = async (product: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/category/${product}`
    ); 

    return response.data;
  } catch (error) {
    console.error("Error al realizar la petición:", error);
  }
};
