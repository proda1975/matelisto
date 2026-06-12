# Firebase integration (quick setup)

1) Crear el proyecto en Firebase y habilitar Firestore.

2) Instalar la dependencia en el proyecto `matelisto`:

```bash
npm install firebase
```

3) Copiar `.env.example` a `.env` en la carpeta `matelisto` y completar las variables con las credenciales del proyecto Firebase (ver la configuración del proyecto en la consola de Firebase).

4) Asegurarse de que el archivo `.env` esté ignorado por git (ya existe `matelisto/.gitignore` con la entrada `.env`).

5) Crear manualmente la colección `products` en Firestore y añadir documentos con campos recomendados:

```json
{
  "name": "Nombre del producto",
  "description": "Descripción",
  "price": 123.45,
  "image": "https://.../image.jpg",
  "category": "electronics"
}
```

6) Ejecutar la app en modo desarrollo:

```bash
npm install
npm run dev
```

### Despliegue en Netlify

- En Netlify, configura las variables de entorno con los mismos nombres que usas en `.env`:
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_STORAGE_BUCKET`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - `VITE_FIREBASE_APP_ID`

- Netlify debe usar el comando de build `npm run build` y publicar la carpeta `dist`.
- Agrega un archivo `netlify.toml` para garantizar el routing SPA:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Notas:
- Las funciones de ejemplo ya creadas en `src/services/productService.js` usan `getDocs`, `getDoc`, `query` y `where`.
- `src/firebase/firebaseConfig.js` lee las variables desde `import.meta.env` (Vite).
- Si quieres subir imágenes desde el front, considera un servicio externo (imgBB, Cloudinary) y guardar la URL en Firestore.
