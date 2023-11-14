// pages/NeueSeite.tsx
import { useTheme } from 'next-themes'; // Importieren von useTheme

const NeueSeite: React.FC = () => {
  const { theme } = useTheme(); // Verwenden von useThemeimport { useTheme } from 'next-themes'; // Importieren von useTheme


  useEffect(() => {
    const iframe = document.getElementById('themeChangerFrame');
    if (iframe) {
      iframe.contentWindow.postMessage({ theme: theme }, '*');
    }
  }, [theme]);

  return (
    <Container>
      <h1>Hallo von der neuen Seite!</h1>
      <iframe id="themeChangerFrame" src="https://togetherai-einfachllamistral.hf.space" style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        border: 0
      }}></iframe>
    </Container>
  );
};

export default NeueSeite;
