# Fortaleza de Contraseña - React

Aplicación desarrollada en React que permite evaluar la seguridad de una contraseña en tiempo real.



## Funcionalidades

- Ingreso de contraseña (input controlado)
- Mostrar / ocultar contraseña
- Evaluación de fortaleza:
  - Poco segura
  - Segura
  - Muy segura
- Checklist de requisitos dinámico:
  - Mínimo 8 caracteres
  - Incluye mayúsculas
  - Incluye números
  - Incluye símbolos
- Botón para copiar contraseña al portapapeles



## Arquitectura

La aplicación está compuesta por los siguientes componentes:

- `App` → componente principal
- `PasswordInput` → manejo del input
- `StrengthIndicator` → cálculo de fortaleza
- `RequirementsChecklist` → validaciones dinámicas



## Conceptos aplicados

- useState para manejo de estado
- Props para comunicación entre componentes
- Inputs controlados
- Renderizado dinámico con map()
- Validaciones en tiempo real



## Estilos

Se utilizó CSS para mejorar la presentación visual y la experiencia del usuario.



## Deploy

https://tp2-git-master-samirquevs-projects.vercel.app

---

## Autor

- Samir Quevedo
