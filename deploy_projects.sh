#!/bin/bash

# Lista de proyectos y sus correspondientes repositorios de GitHub
proyectos=("accordion" "contetful cms" "birthday buddy")
repositorios=("brivastorres/practicas-con-react/accordion" "brivastorres/practicas-con-reactconterful-cms" "brivastorres/practicas-con-react-rithday-buddy")

# Ruta al directorio raíz del repositorio
raiz_repositorio="/d/practicas de programacion/programacion fronted/practicando con react/react projects practice"

# Tu token de API de Vercel
vercel_token="DtbRpNq3kXz2RStUgGrKpzp2"

# Iterar sobre cada proyecto y desplegarlo
for i in "${!proyectos[@]}"; do
  proyecto="${proyectos[$i]}"
  repo="${repositorios[$i]}"

  echo "Desplegando $proyecto..."

  # Cambiar al directorio del proyecto
  cd "$raiz_repositorio/$proyecto" || exit

  # Desplegar el proyecto en Vercel
  vercel --prod --yes --name "$proyecto"

  # Conectar el proyecto al repositorio de GitHub usando la API de Vercel
  echo "Conectando $proyecto a $repo en GitHub..."
  curl -X PATCH "https://api.vercel.com/v8/projects/$proyecto/link" \
    -H "Authorization: Bearer $vercel_token" \
    -H "Content-Type: application/json" \
    -d '{
      "type": "github",
      "repo": {
        "id": "'$repo'",
        "repo": "'$repo'",
        "org": "usuario", 
        "name": "'$repo'"
      },
      "gitCredentialId": null
    }'

  # Volver al directorio raíz
  cd "$raiz_repositorio" || exit
done
