// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From Button.tsx
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void}

// From Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}


