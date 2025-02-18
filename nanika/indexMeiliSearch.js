require("dotenv").config(); // <- Asegura que las variables de entorno se carguen
const axios = require("axios");

const MEDUSA_API = process.env.MEDUSA_API || "http://localhost:9000"; // <- Ahora se lee de .env
const MEILISEARCH_HOST = process.env.MEILISEARCH_HOST;
const MEILISEARCH_API_KEY = process.env.MEILISEARCH_API_KEY;
const PUBLISHABLE_API_KEY = process.env.PUBLISHABLE_API_KEY; // <- También desde .env

// Función para obtener los productos desde Medusa
const fetchProducts = async () => {
  try {
    const response = await axios.get(`${MEDUSA_API}/store/products`, {
      headers: {
        "x-publishable-api-key": PUBLISHABLE_API_KEY, // <- Ahora se usa la variable de entorno
        "Accept": "application/json"
      }
    });

    return response.data.products.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      variant_sku: product.variants?.[0]?.sku || "",
      thumbnail: product.thumbnail,
      handle: product.handle
    }));
  } catch (error) {
    console.error("Error fetching products from Medusa:", error.response?.data || error.message);
    return [];
  }
};

// Función para indexar los productos en MeiliSearch
const indexProducts = async () => {
  const products = await fetchProducts();

  if (products.length === 0) {
    console.log("No products found.");
    return;
  }

  try {
    await axios.post(`${MEILISEARCH_HOST}/indexes/products/documents`, products, {
      headers: {
        "Authorization": `Bearer ${MEILISEARCH_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    console.log("Products indexed successfully!");
  } catch (error) {
    console.error("Error indexing products in MeiliSearch:", error.response?.data || error.message);
  }
};

// Ejecutar el script
indexProducts();
