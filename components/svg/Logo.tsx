export interface LogoProps {
  /**
   * Classes for the logo
   */
  classes: string;

  /**
   * Whether the logo is white or colour
   */
  white: boolean;
}

export default function Logo({ classes, white = false }: LogoProps) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3018.84 863.99"
    >
      <path
        d="M1875.81 471.39c-3.28-.48-6.57-.88-9.84-1.44-15.44-2.64-26.5-11.72-35.18-24.17-11.52-16.52-19.25-34.93-26.34-53.63-2.52-6.65-4.96-13.38-6.76-20.24-1.06-4.07-.8-8.48-1.22-13.95-1.27 1.78-2.15 2.65-2.6 3.69-9.93 23.26-20.11 46.41-29.59 69.85-5.62 13.88-13.81 24.78-28.72 28.9-5.04 1.4-10.53 1.32-15.82 1.66-6.48.41-13.02.16-19.46.87-16.87 1.87-24.12-7.14-24.97-22.44-.36-6.42 1.07-13.32 3.28-19.42 12.08-33.24 28.35-64.58 44.55-95.93 8.33-16.11 16.94-32.09 25.4-48.14.76-1.44 1.42-2.92 1.36-5.06-.9.96-1.84 1.87-2.68 2.87-13.23 15.6-29.69 21.82-49.56 15.86-13.2-3.96-26.12-8.89-38.99-13.85-4.25-1.64-7.71-1.84-11.83.23-18.78 9.42-33.66 23.68-48.61 38-7.5 7.19-11.26 16.4-15.68 25.28-15.29 30.71-29.29 61.97-40.63 94.4-5.12 14.64-13.9 26.27-29.76 30.5-4.45 1.18-9.21 1.4-13.84 1.62-8.82.41-17.65.74-26.47.66-11.68-.11-19-7.69-19.8-19.4-.79-11.46 4.26-21.37 7.79-31.7.62-1.81 1.23-3.63 1-6.02-2.61 2.44-5.25 4.86-7.84 7.33-15.35 14.66-31.59 28.16-50.52 38.08-17.74 9.29-36.42 13.35-56.48 10.21-16.55-2.59-26.28-11.66-29.58-28.14-.25-1.27-.46-2.54-.8-4.39-4.55 3.56-8.65 6.89-12.87 10.06-19.02 14.29-39.91 23.05-64.21 22.6-31.36-.58-52.57-19.01-56.41-50.2-1.03-8.36-.39-16.93-.51-25.4-.02-1.1 0-2.2 0-4.64-2.67 2.61-4.53 4.36-6.32 6.18-19.58 20.04-39.49 39.72-62.82 55.51-14.66 9.93-30.44 17.2-48.29 19.05-12.08 1.25-23.95.29-35.33-4.34-11.7-4.76-17.55-13.88-18.88-26.05-1.35-12.29.83-24.23 4.48-35.92 7.42-23.83 18.97-45.78 31.09-67.46 8.29-14.82 16.78-29.53 24.99-44.39 1.75-3.17 3-6.7 3.95-10.21 1.4-5.16-1.17-7.76-6.13-5.74-5.5 2.23-10.94 5.01-15.77 8.45-25.34 18.04-46.9 40.2-65.1 65.15-8.68 11.9-14.08 26.39-19.83 40.18-6.08 14.56-10.86 29.67-16.12 44.57-6.22 17.64-17.33 29.46-36.97 30.87-7.97.57-15.98.55-23.97.83-3.49.12-6.99.44-10.48.43-11.03-.02-17.66-6.08-19.03-17.08-1.01-8.15.51-15.85 3.29-23.49 13.51-37 30.58-72.33 49.55-106.79 4.9-8.9 9.92-17.73 14.65-26.72 1.69-3.21 2.96-6.71 3.93-10.21 1.64-5.92-.9-8.34-6.8-6.49-2.83.88-5.56 2.25-8.14 3.72-18.46 10.53-34.15 24.63-47.67 40.69-6.58 7.82-10.47 18.13-14.64 27.72-12.4 28.52-24.53 57.16-36.37 85.92-5.92 14.37-14.02 26.68-29.97 30.22-9.3 2.07-19.19 1.47-28.82 2.05-3.49.21-6.98.46-10.48.46-12.08-.02-19.54-7.09-20.62-19.16-.75-8.35 1-16.2 3.97-23.91 2.54-6.59 4.96-13.22 6.46-20.51-1.32 1.12-2.65 2.23-3.95 3.37-28.25 24.77-59.54 44.53-95.66 55.48-27.92 8.47-56.6 11.34-85.32 4.36-31.41-7.64-50.2-27.41-54.34-60.08-.08-.63-.31-1.25-.68-2.65-1.65 1.56-2.99 2.69-4.17 3.96-15.71 16.89-32.47 32.56-52.19 44.79-18.7 11.6-38.73 19.45-60.93 20.13-21.73.66-41.2-6.15-58.63-19.19-17.64-13.19-26.59-31.76-32.21-52.14-7.1-25.72-9.46-52.02-7.34-78.66.61-7.63 1.16-15.28 2.09-22.87 3.14-25.57 15.44-38.17 40.81-42 39.89-6.02 68.03-28.49 87.53-62.83 7.86-13.84 12.06-28.93 12.55-44.79.93-30.15-17.75-56.88-47.52-69.3-20.96-8.74-42.93-10.45-65.19-9.32-56.1 2.84-102.82 27.7-144.7 63.09-13.47 11.38-26.16 23.73-38.72 36.12-8.93 8.81-17.14 6.9-24.66-.68-6.69-6.74-9.91-15.28-11.58-24.46-3.26-18.01-3.07-35.46 7.86-51.36 7.26-10.56 16-19.61 26.41-27.03 41.24-29.35 86.96-47.9 136.73-56.79 24.16-4.32 48.47-7.3 72.99-6.43 37.47 1.33 74.4 6.14 108.44 23.41 25.72 13.05 47.86 30.37 61.8 56.35 18.71 34.86 19.41 71.28 5.15 107.23-24.35 61.35-70.53 97.25-134.96 110.03-11.2 2.22-11.1 1.89-10.77 13.17.54 18.22 2.4 36.27 8.46 53.54 2.4 6.83 5.96 13.36 9.74 19.57 6.82 11.2 17.51 15.55 30.31 16.29 20.55 1.18 37.13-7.44 52.18-20.18 16.11-13.64 29.59-29.75 42.58-46.26 1.71-2.17 2.64-4.97 3.81-7.53 22.66-49.43 56.85-88.19 105.46-113.47 24.89-12.94 51.39-18.82 79.5-17.6 33.16 1.45 54.71 28.04 49.8 61.27-6.92 46.87-33.61 79.81-72.78 103.95-21.79 13.42-45.3 22.38-70.82 25.67-2.77.36-5.57.55-9.84.97 2.25 3.74 3.74 6.96 5.89 9.64 5.31 6.61 12.79 9.3 20.87 10.62 22 3.58 42.25-2.12 61.76-11.7 23.14-11.36 43.1-27.14 61.46-44.97 8.96-8.69 17.11-18.2 25.8-27.18 13.55-14 21.94-31.2 30.74-48.22 10.92-21.13 22.08-42.16 33.56-62.99 3.01-5.47 7.5-10.16 11.5-15.05 2.89-3.53 6.82-5.48 11.42-5.18 15.92 1.07 31.93 1.59 47.72 3.69 13.05 1.74 17.82 10.93 13.47 24.08-2.07 6.27-5.48 12.1-8.3 18.11-.6 1.27-1.32 2.47-1.23 4.39 1.11-.82 2.24-1.61 3.31-2.47 16.51-13.32 33.62-25.74 53.28-34.1 16.02-6.81 32.57-10.94 50.09-7.39 4.68.95 9.3 2.66 13.65 4.67 8.97 4.13 14.08 13.25 12.19 22.94-1.77 9.1-4.66 17.98-7.12 26.95-.43 1.56-1.12 3.05-.85 5.4 1.37-1.19 2.76-2.37 4.11-3.58 20.1-18.11 41.02-35.07 65.58-46.98 12.73-6.17 26.04-10.38 40.15-11.15 10.84-.59 21.23 2.03 30.47 7.93 9.35 5.98 11.29 15.16 9.92 25.4-2.69 20.17-11.02 38.38-20.72 55.87-16.3 29.41-33.36 58.41-49.98 87.65-2.62 4.61-4.83 9.5-6.76 14.44-1 2.56-1.41 5.52-1.35 8.29.11 5.44 3.64 8.29 8.64 6.34 5.51-2.15 11.44-4.51 15.66-8.43 16.43-15.31 32.44-31.1 48.23-47.07 7.49-7.57 14.5-15.68 21.06-24.06 4.38-5.59 7.56-12.11 11.35-18.17 25.04-39.98 57.59-71.88 100.29-92.73 19.46-9.5 39.84-15.73 61.64-16.99 17.21-.99 33.36 1.03 46.29 14.31 1.22-.98 2.15-1.61 2.93-2.37 9.32-9.11 20.18-14.75 33.51-14.14 9.28.43 18.69.62 27.78 2.34 13.94 2.63 20.06 13.79 14.81 27.01-3.86 9.7-9.12 18.85-13.96 28.15-21.5 41.36-43.13 82.65-64.54 124.05-2.66 5.14-4.76 10.66-6.32 16.23-1.56 5.6 1.17 8.58 6.59 6.67 6.46-2.28 13.06-5.28 18.38-9.5 19.81-15.7 35.66-35.36 52.64-53.92 17.19-18.79 27.25-41.68 38.87-63.73 9.23-17.52 18.44-35.06 28.11-52.34 3.14-5.61 7.63-10.47 11.64-15.57 3.46-4.4 8.34-6.3 13.69-5.91 15.43 1.11 30.9 2 46.21 4.12 12.03 1.67 16.84 9.54 13.65 21.37-1.84 6.81-5.36 13.18-8.21 19.71-.65 1.49-1.62 2.84-1.75 5.13 1.32-.94 2.7-1.82 3.97-2.83 17.5-13.96 35.59-26.97 56.66-35.15 17.8-6.91 35.88-9.9 54.53-3.39 10.35 3.62 17.41 10.25 17.51 21.74.05 5.2-1.82 10.43-2.91 15.62-.36 1.73-1.01 3.4-.61 5.57.95-1.58 1.97-3.12 2.84-4.75 21.15-39.66 42.02-79.46 63.49-118.95 16.47-30.29 34.05-59.91 54.31-87.93 9.11-12.61 19.73-18.52 35.25-14.78 5.47 1.32 11.19 1.55 16.77 2.42 1.96.31 3.89.93 5.75 1.64 11.97 4.56 17.1 13.77 13.91 26.18a70.877 70.877 0 01-6.38 16.18c-29.75 54.52-59.69 108.94-89.55 163.39-.98 1.78-1.75 3.68-2.62 5.52l1.07 1.01c1.27-.72 2.71-1.25 3.77-2.2 15.73-14.2 31.83-28.01 50.95-37.44 8.22-4.05 17.16-7.42 26.14-8.99 14.34-2.51 36.72 10.91 42.28 24.2 2.9 6.94 1.78 14.12-.93 20.86-7.63 18.98-19.21 34.91-36.79 45.99-8.53 5.37-16.89 5.35-25.02-.86-4.76-3.64-9.56-7.23-14.2-11.02-6.26-5.1-13.52-5.6-20.15-2.38-10.94 5.31-19.77 13.44-25.83 24.23-3.47 6.16-1.78 12.26.37 18.3 9.67 27.26 22.26 53.03 39.24 76.54 1.95 2.69 4.06 5.29 6.3 7.74 6.75 7.33 14.04 8.74 23.46 5.36 13.54-4.87 25.16-12.77 35.83-22.16 1.86-1.64 3.13-4.26 4-6.67 5.26-14.56 10.69-29.07 15.34-43.82 4.92-15.6 14.17-28.57 23.68-41.41 27.45-37.05 62.25-64.6 105.72-80.66 18.33-6.77 37.31-9.64 56.88-8.72 10.58.5 19.63 4.64 27.88 10.95 1.29.99 2.58 2 3.74 2.9.62-.27 1.01-.32 1.22-.54 14.51-16.12 33.32-17.09 52.97-14.95 3.79.41 7.63.94 11.3 1.96 12.23 3.4 18.18 13.48 13.75 25.42-3.68 9.92-9.01 19.25-13.89 28.7-19.03 36.83-38.27 73.55-57.21 110.42-5.07 9.88-9.73 20.01-13.85 30.32-2.27 5.67.54 8.82 6.3 7.11 5.62-1.67 11.76-3.86 15.93-7.71 15.03-13.88 29.34-28.53 43.86-42.95 2.36-2.34 4.21-5.21 6.63-7.47 12.24-11.48 17.94-26.97 25.79-41.19 31.77-57.6 63.93-114.97 95.64-172.61 15.82-28.76 31.47-57.58 50.91-84.12 3.05-4.16 6.6-7.95 9.68-12.08 5.89-7.9 13.98-9.49 23.05-8.35 8.24 1.04 16.54 1.87 24.68 3.49 16.13 3.2 23.34 14.93 18.78 30.73-1.59 5.52-4.16 10.9-7.06 15.89-38.9 66.96-78.19 133.69-116.81 200.81-13.77 23.92-26.89 48.31-34.83 75.02-3.57 12.01-6.39 24.13-5.56 36.81.53 8.11 3.16 15.01 11.11 18.67 8.74 4.02 16.6.83 24.15-3.42.83-.47 1.25-2.96.84-4.17-8.04-24.11-6.87-48.18.14-72.24 10.28-35.29 25.68-67.84 50.99-95.07 16.59-17.85 35.25-32.77 59.54-38.41 7.62-1.77 15.99-2.22 23.72-1.15 17.35 2.39 27.84 13.61 32.46 29.99 5.89 20.91 3.15 41.58-3.58 61.85-16.12 48.53-41.49 91.42-77.97 127.51-1.23 1.22-2.32 2.58-4.3 4.79 8.52 0 15.32-1.6 21.86-4.55 15.69-7.07 29.09-17.47 41.68-28.96 28.19-25.72 52.39-55.09 75.01-85.59 10-13.49 16.38-29.68 24.28-44.71 26.35-50.1 52.1-100.52 79.2-150.2 11.69-21.42 26.36-41.2 39.25-62 8.65-13.96 20.96-17.06 36.03-14.23 6.04 1.14 12.25 1.38 18.26 2.63 17.01 3.55 24.55 15.6 18.53 31.8-4.08 10.98-10.39 21.15-16.01 31.52-40.97 75.51-82.11 150.93-122.97 226.5-11.24 20.79-21.82 41.94-32.45 63.06-2.37 4.71-4.27 9.83-5.36 14.98-1.82 8.59 3.72 13.47 11.53 9.67 7.84-3.82 15.45-8.63 22.13-14.24 22.01-18.5 40.67-40.32 59.52-61.91 1.81-2.07 2.79-4.89 4.05-7.4 23.06-45.79 56.08-82 102-105.68 24.91-12.84 51.42-18.77 79.54-17.45 29.88 1.41 50.26 22.13 49.81 51.98-.47 31.42-13 58.41-33.92 81.12-29.67 32.22-66.65 51.42-110.11 57.81-1.48.22-2.98.26-4.47.42-1.27.13-2.54.32-4.41.56 2.73 9.07 8.47 14.71 16.64 17.68 14.43 5.25 29.17 4.51 43.81.95 23.61-5.74 43.9-18.07 62.95-32.65 21.4-16.37 40.55-35.07 57.28-56.2 2.73-3.45 5.22-3.43 8.42-.89 6.39 5.08 8.98 11.7 6.02 19.46-2.34 6.14-5.28 12.39-9.34 17.48-23.44 29.31-49.83 55.61-81.46 76.14-27.91 18.12-57.63 32.01-91.16 35.97-21.82 2.58-43.51 2.88-64.72-4.34-27.15-9.24-44.65-32.43-45.79-61.16-.18-4.62-.03-9.24-.03-13.87-.39-.18-.77-.37-1.16-.55-1.58 1.52-3.23 2.97-4.73 4.57-21 22.42-42.75 44-69 60.4-15.91 9.94-32.84 17.22-52.08 16.27-6.41-.32-12.96-1.49-19.06-3.46-13.47-4.37-20.42-15.02-20.96-30.21-.43-12.08.98-23.93 4.09-35.59.42-1.58.78-3.17.36-5.47-1.23 1.1-2.5 2.16-3.68 3.32-15.79 15.45-32.91 29.15-52.47 39.61-23.41 12.53-47.7 15.92-73.3 7.51-1.97-.65-4.89.09-6.85 1.16-18.7 10.19-38.23 18-59.28 21.71-13.85 2.44-27.73 3.24-41.71 1.04-24.64-3.88-40.18-18.67-49.27-41.1-4.88-12.04-6.59-24.71-6.85-37.62-.03-1.6 0-3.2-1.05-5.28-4.53 4.95-9.03 9.93-13.61 14.84-18.1 19.42-37 37.95-59.43 52.45-17.53 11.33-36.29 19.08-57.62 18.18-6.09-.26-12.3-1.25-18.15-2.96-12.94-3.77-20.26-12.77-22.2-26.14-.16-1.11-.55-2.19-1.07-4.16-1.79 1.35-3.18 2.33-4.49 3.4-14.85 12.09-30.64 22.43-49.68 26.73-12.17 2.75-24.45 3.26-36.7.89-18.12-3.5-30.29-14.47-37.83-31-.54-1.19-1.04-2.41-1.68-3.88-25.31 19.54-51.33 37.14-83.83 41.55-2.02.02-4.02.02-6.02.02zm183.13-93.16c.31.09.62.18.92.27.19 1.82.33 3.64.59 5.45 1.42 9.89 6.81 14.97 16.68 13.61 15.11-2.07 27.03-9.73 34.28-23.57 3.24-6.19 5.75-12.76 9.02-18.92 14.96-28.23 29.69-56.59 45.33-84.44 5.96-10.61-1.94-20.6-11.22-21.71-9.19-1.1-17.84.15-25.14 5.72-6.84 5.22-13.59 10.85-19.21 17.32-20.34 23.46-33.37 51.19-44.49 79.82-3.26 8.43-4.56 17.62-6.76 26.45zM1364.95 248.5c-8.64.03-17.64 6.09-25.91 13.66-14.71 13.47-25.35 29.89-34.45 47.46-9.19 17.74-19.11 35.24-23.08 55.05-1.47 7.33-1.48 15.19-.71 22.66.65 6.32 6.16 10.01 12.32 10.41 13.06.85 32.28-11.22 37.75-23.19 5.33-11.65 10.86-23.22 16.83-34.55 12.71-24.16 25.84-48.1 38.56-72.25 1.15-2.19 1.42-5.49.73-7.89-2.3-8.02-8.14-11.28-22.04-11.36zm1459.45 94.7c2.32-.13 3.94-.09 5.52-.33 18.58-2.82 34.06-11.69 45.89-25.94 13.87-16.71 22.85-35.88 23.33-58.1.18-8.45-4.28-11.68-12.56-10.28-8.77 1.48-15 6.88-20.48 13.29-19.48 22.77-31.21 49.68-41.13 77.53-.33.89-.3 1.91-.57 3.83zm-2225.53-1.22c.4.55.8 1.1 1.19 1.64 4.32-.78 8.76-1.16 12.94-2.4 22.62-6.72 38.97-21.06 49.62-41.94 6.46-12.66 11.75-25.79 11.56-40.35-.11-8.68-4.45-11.83-13.05-10.28-9.35 1.68-15.58 7.9-21.37 14.63-14.85 17.27-24.35 37.64-33.26 58.29-2.86 6.67-5.1 13.6-7.63 20.41zM2427.6 362.7c1.34-1.12 2.03-1.55 2.53-2.13 23.57-28.14 42.33-59.21 56.2-93.18 1.92-4.7 3-9.9 3.5-14.96.26-2.63-.87-6.75-2.74-7.83-1.76-1.01-6.07.28-7.93 2-6.08 5.61-12.11 11.44-17.15 17.96-14.33 18.58-22.39 40.28-29.59 62.31-3.69 11.27-5.9 22.79-4.82 35.83zM92.64 466.16c-27.63-.05-45.46-4.16-62.25-13.47-37.81-20.96-41.96-79.99-3.28-105.15 11.88-7.73 24.33-14.68 39.15-14.84 12.93-.14 20.59 6.48 22.48 19.26 1.79 12.09-2 23.31-5.14 34.72-1.7 6.16-2.4 12.7-2.66 19.11-.24 5.92 2.97 8.29 8.77 6.61 3.88-1.13 7.78-3.09 10.97-5.58 13.83-10.81 23.7-25.18 33.95-39.13 18.02-24.51 31.83-51.51 45.83-78.4 23-44.16 45.77-88.47 72.85-130.34 10.88-16.83 22.81-32.99 38.78-45.4 6.75-5.25 14.4-9.62 22.18-13.23 10.2-4.73 21-4.55 31.68-.87 12.29 4.25 23.6 10.05 32.04 20.35 6.09 7.43 6.07 8.84-.07 16.12-15.36 18.2-31.1 36.1-46 54.67-18.41 22.95-32.28 48.88-46.61 74.44-18.24 32.53-35.63 65.57-54.85 97.51-18.83 31.3-42 59.18-72.39 80.4-22.34 15.59-46.91 23.36-65.43 23.22z"
        fill={white ? "#ffffff" : "#ab2328"}
      ></path>
      <path
        d="M634.02 691.78c-11.72-12.11-27.92-19.53-44.91-19.53-32.8 0-59.36 28.51-59.36 60.92s26.75 60.92 59.75 60.92c16.6 0 32.8-7.81 44.52-19.53v20.31c-12.69 9.18-28.31 14.45-43.93 14.45-41.59 0-76.73-33.78-76.73-75.56 0-42.17 34.56-76.73 76.73-76.73 16.4 0 30.85 4.69 43.93 14.45v20.3zM935.48 733.37c0 42.37-34.75 75.95-76.73 75.95s-76.73-33.58-76.73-75.95c0-42.17 34.75-76.34 76.73-76.34s76.73 34.16 76.73 76.34zm-137.06-.2c0 33.19 26.94 60.92 60.33 60.92s60.33-27.73 60.33-60.92c0-33.39-26.55-60.92-60.33-60.92s-60.33 27.54-60.33 60.92zM1104.56 651.17l53.5 123.59 53.69-123.59 29.87 155.62h-16.79l-18.94-99.58h-.39l-47.45 105.63-47.25-105.63h-.39l-18.94 99.58h-16.79l29.88-155.62zM1407.19 651.17l53.5 123.59 53.69-123.59 29.87 155.62h-16.79l-18.94-99.58h-.39l-47.45 105.63-47.25-105.63h-.39l-18.94 99.58h-16.79l29.88-155.62zM1690.69 659.56h76.34v15.23h-59.94v43.74h58.19v15.23h-58.19v57.79h59.94v15.23h-76.34V659.56zM1939.04 806.78h-16.4V659.56h21.28c27.92 0 53.89 7.42 53.89 40.61 0 22.65-14.25 38.66-36.9 40.61l46.86 66h-20.11l-44.52-64.63h-4.1v64.63zm0-79.07h5.08c18.55 0 37.29-3.51 37.29-26.36 0-24.21-17.77-26.55-37.49-26.55h-4.88v52.91zM2268.42 691.78c-11.71-12.11-27.92-19.53-44.91-19.53-32.8 0-59.36 28.51-59.36 60.92s26.75 60.92 59.75 60.92c16.6 0 32.8-7.81 44.52-19.53v20.31c-12.69 9.18-28.31 14.45-43.93 14.45-41.59 0-76.73-33.78-76.73-75.56 0-42.17 34.56-76.73 76.73-76.73 16.4 0 30.85 4.69 43.93 14.45v20.3zM2423.83 659.56h76.34v15.23h-59.94v43.74h58.18v15.23h-58.18v57.79h59.94v15.23h-76.34V659.56z"
        fill={white ? "#ffffff" : "#000000"}
      ></path>
    </svg>
  );
}
