# models (folder)

### Products (file)

- name - String
  - Required
- price - Number

  - Required

- image - String
  - Required

# controllers (folder)

### productsController (file)

- createProduct

  - creates a Product with req.body

- getAllProducts
  - finds all products

### imageUploadController (file)

- uploadImage
  - takes a file and creates an image on the local storage, returns a string of the path

# Routes

### productRoutes - /api/v1/products

- '/'

  - GET - getAllProducts
  - POST - createProduct

- '/uploads'
  - POST - uploadImage
