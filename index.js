import express, { json } from "express"
import { readFile } from "fs"
import cors from "cors"

const app = express()
const PORT = 3000

// Enable CORS for all origins
app.use(cors())

// Middleware to parse JSON
app.use(json())

// Serve static files
app.use("/assets", express.static("public/assets"))

// Load product data
const dataPath = "./data/data.json"
let products = []
readFile(dataPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading data file:", err)
    return
  }
  products = JSON.parse(data)
})

// Updated Product Listing API to support filtering by category
app.get("/api/products", (req, res) => {
  const { category } = req.query
  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category === category
    )
    res.json(filteredProducts)
  } else {
    res.json(products)
  }
})

// API: Product Details
app.get("/api/products/:slug", (req, res) => {
  const product = products.find((p) => p.slug === req.params.slug)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: "Product not found" })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
