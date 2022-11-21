import { FormEventHandler, useCallback, useEffect, useState } from 'react';

export const daisyThemes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

export default function ThemeDropdown(): JSX.Element {
  const [theme, setTheme] = useState(daisyThemes[0]);

  useEffect(() => console.log(theme), [theme]);

  const onChange = useCallback<FormEventHandler<HTMLSelectElement>>(
    (e) => {
      // @ts-ignore
      const themeFromFormValue = e.target.value;
      const htmlTag = document.getElementsByTagName('html');

      if (htmlTag) {
        const htmlElement = htmlTag[0];
        htmlElement.setAttribute('data-theme', themeFromFormValue);
      }

      setTheme(themeFromFormValue);
    },
    [setTheme]
  );

  return (
    <select className="select select-ghost w-full max-w-xs" onChange={onChange}>
      {daisyThemes.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
      <option disabled defaultValue="">
        Pick the best JS framework
      </option>
      <option>Svelte</option>
      <option>Vue</option>
      <option>React</option>
    </select>
  );
}
