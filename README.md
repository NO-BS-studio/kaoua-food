# How to Add a New Product

This guide explains how to add a new product to the Kaoua Food website.

## Step 1: Add Product Image

1. Navigate to the `public/products/` folder
2. Choose the appropriate brand subfolder (e.g., `OPTILLA`, `BANADO`, `DOYDOY`, `HENINA`, `MOON`, `NAPOLITANO`)
3. Within the brand folder, you can put it in any folder you want
4. Add your product image to this folder


## Step 2: Update the Products Data File

Open the file: `src/data/products.jsx`

### Product Object Structure

Add a new product object to the `products` array following this structure:

```jsx
{
  id: "unique-product-id",                    // Unique identifier (lowercase with hyphens)
  name: "Product Name",                        // Default product name
  description: "Product description...",       // Default product description
  image: "/products/BRAND/TYPE/image.png",    // Path to product image (relative to public folder)
  type: "PRODUCT_TYPE",                        // Product category
  brand: "BRAND_NAME",                         // Brand name
  
  // French translations
  nameFR: "Nom du produit",
  descFR: "Description en français...",
  
  // English translations
  nameEN: "Product Name in English",
  descEN: "Product description in English...",
  
  // Arabic translations
  nameAR: "اسم المنتج بالعربية",
  descAR: "وصف المنتج بالعربية...",
}
```

### Example Product Entry

```jsx
{
  id: "optilla-200g",
  name: "Pâte à tartiner OPTILLA 200G",
  description: "Sugar, vegetable fat, (lean cocoa, whey and whole milk) powder, hazelnut, salt. Food additives: emulsifier (soy lecithin E322), artificial flavors (hazelnut, vanillin). Contains hazelnuts, milk and soy lecithin. Gluten free. Store in cool and dry place.",
  image: "/products/OPTILLA/PATE A TARTINER/OPTILLA 200G_trimmed.png",
  type: "PATE A TARTINER",
  brand: "OPTILLA",
  
  nameFR: "Pâte à tartiner OPTILLA 200G",
  descFR: "Sucre, matières grasses végétales, poudre de cacao maigre, lactosérum et lait entier en poudre, noisette, sel. Additifs alimentaires : émulsifiant (lécithine de soja E322), arômes artificiels (noisette, vanilline). Contient des noisettes, du lait et de la lécithine de soja. Sans gluten. À conserver dans un endroit frais et sec.",
  
  nameEN: "OPTILLA Spread 200G",
  descEN: "Sugar, vegetable fat, skim cocoa, whey and whole milk powder, hazelnut, salt. Food additives: emulsifier (soy lecithin E322), artificial flavors (hazelnut, vanillin). Contains hazelnuts, milk and soy lecithin. Gluten free. Store in a cool, dry place.",
  
  nameAR: "معجون OPTILLA 200غ",
  descAR: "سكر، دهون نباتية، مسحوق كاكاو منزوع الدسم، مصل اللبن وحليب كامل مجفف، بندق، ملح. المواد المضافة: مستحلب (ليسيثين الصويا E322)، نكهات صناعية (بندق، فانيلين). يحتوي على بندق وحليب وليسيثين الصويا. خالٍ من الغلوتين. احفظه في مكان بارد وجاف.",
}
```

## Step 3: Field Guidelines

### Required Fields

- **id**: Must be unique across all products. Use lowercase with hyphens (e.g., `"optilla-200g"`)
- **name**: The default product name (typically in French)
- **description**: Product ingredients and storage information
- **image**: Path starting with `/products/` (relative to the `public` folder)
- **type**: Product type (any type) 
- **brand**: Brand name (all caps, necessarily from the brands list below)

### Translation Fields

Provide translations for all three languages:

- **French**: `nameFR`, `descFR`
- **English**: `nameEN`, `descEN`
- **Arabic**: `nameAR`, `descAR`

## Step 4: Available Brands and Types

### Brands
- `OPTILLA`
- `BANADO`
- `DOYDOY`
- `HENINA`
- `MOON`
- `NAPOLITANO`

### Common Product Types (for OPTILLA)
- `PATE A TARTINER` (Spread)
- `BISCUITS`
- `CHOCOLATE-BARS`
- `COMPOUND COATING GLACAGE`
- `DOUBLE TWIST BONBONS`
- `MADELAINE`
- `STICKS`
- `TABLETTE`
- or basically any type you write (will automatically add it in the list)

## Step 5: Test Your Changes and deploy

1. Save the `products.jsx` file
2. Run the development server if not already running:
   ```bash
   npm run dev
   ```
3. Navigate to the Products page
4. Verify that your new product appears correctly
5. Check that all translations are working properly by switching languages

6. Create the build :
   ```bash
   npm run build
   ```
7. copy the content of the dist folder on the deployment server (typically the folder `public_html`)