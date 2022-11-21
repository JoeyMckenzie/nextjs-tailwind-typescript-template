import { defaultHead } from 'next/head';
import { FormEventHandler, useCallback, useEffect, useState } from 'react';

const daisyThemes = [
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

const THEME_KEY = 'chowTheme';

export default function ThemeDropdown(): JSX.Element {
  const defaultTheme = daisyThemes[0];
  const [theme, setTheme] = useState(defaultTheme);

  const setStorageTheme = useCallback(
    (selectedTheme: string) => {
      localStorage.setItem(THEME_KEY, selectedTheme);
      setTheme(selectedTheme);
    },
    [setTheme]
  );

  const setGlobalTheme = useCallback(
    (selectedTheme: string) => {
      const htmlTag = document.getElementsByTagName('html');

      if (htmlTag) {
        const htmlElement = htmlTag[0];
        htmlElement.setAttribute('data-theme', selectedTheme);
      }

      setStorageTheme(selectedTheme);
    },
    [setStorageTheme]
  );

  useEffect(() => {
    const stashedTheme = localStorage.getItem(THEME_KEY);
    const selectedTheme = !!stashedTheme ? stashedTheme : defaultTheme;
    setGlobalTheme(selectedTheme);
  }, [defaultTheme, setGlobalTheme]);

  const onChange: FormEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      // @ts-ignore
      setGlobalTheme(e.target.value);
    },
    [setGlobalTheme]
  );

  return (
    <select
      className="select-ghost select w-full max-w-xs"
      onChange={onChange}
      value={theme}
      defaultValue={defaultTheme}
    >
      {daisyThemes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}
