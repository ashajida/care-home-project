export const hideMenu = () => {
    const toggleCheck = document.getElementById(
      "menu-toggle"
    ) as HTMLInputElement;
    toggleCheck.checked = false;
  };