import '@fortawesome/fontawesome-free/css/all.min.css';
import Editor from '@monaco-editor/react';
import mermaid from 'mermaid/dist/mermaid.esm.mjs';
import React, { useCallback, useEffect, useState } from 'react';
import './MermaidStyles.css';
import { getAllThemes, getTheme } from './communityThemes';
import { initialMermaid } from './initial-mermaid';

const initialMermaidConfig = {
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'Inter, sans-serif',
};

const defaultThemes = [
  { name: 'Default', value: 'default' },
  { name: 'Forest', value: 'forest' },
  { name: 'Dark', value: 'dark' },
  { name: 'Neutral', value: 'neutral' },
];

export default function App() {
  const [mermaidScript, setMermaidScript] = useState(initialMermaid);
  const [svgOutput, setSvgOutput] = useState('');
  const [theme, setTheme] = useState('default');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [availableThemes, setAvailableThemes] = useState(defaultThemes);
  const [mermaidConfig, setMermaidConfig] = useState(initialMermaidConfig);

  useEffect(() => {
    const communityThemeNames = getAllThemes();
    setAvailableThemes([
      ...defaultThemes,
      ...communityThemeNames.map((name) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value: `community/${name}`,
      })),
    ]);
  }, []);

  const renderDiagram = useCallback(async () => {
    try {
      mermaid.initialize(mermaidConfig);
      const { svg } = await mermaid.render('mermaid-diagram', mermaidScript);
      setSvgOutput(svg);
    } catch (error) {
      console.error('Mermaid rendering failed:', error);
      setSvgOutput('');
    }
  }, [mermaidScript, mermaidConfig]);

  useEffect(() => {
    if (autoRefresh) {
      const debounce = setTimeout(() => {
        renderDiagram();
      }, 1000);
      return () => clearTimeout(debounce);
    }
  }, [mermaidScript, autoRefresh, renderDiagram]);

  useEffect(() => {
    const isCommunityTheme = theme.startsWith('community/');
    const themeName = isCommunityTheme ? theme.replace('community/', '') : theme;

    const themeConfig = isCommunityTheme
      ? { theme: 'base', themeVariables: getTheme(themeName) }
      : { theme: themeName };

    setMermaidConfig((prevConfig) => ({
      ...prevConfig,
      ...themeConfig,
    }));

    renderDiagram();
  }, [theme]);

  const handleScriptChange = (value) => {
    setMermaidScript(value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleDownload = () => {
    const blob = new Blob([svgOutput], { type: 'image/svg+xml;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mermaid-diagram.svg';
    link.click();
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Beautiful Mermaid</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <div className="h-[calc(100vh-300px)]">
                <Editor
                  height="100%"
                  defaultLanguage="mermaid"
                  value={mermaidScript}
                  onChange={handleScriptChange}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                  }}
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={renderDiagram}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                  Refresh Diagram
                </button>
                <button
                  onClick={handleDownload}
                  disabled={!svgOutput}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-50"
                >
                  Download SVG
                </button>
                <select
                  value={theme}
                  onChange={handleThemeChange}
                  className="px-2 py-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  {availableThemes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.name}
                    </option>
                  ))}
                </select>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={autoRefresh}
                    onChange={() => setAutoRefresh(!autoRefresh)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Auto Refresh</span>
                </label>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[calc(100vh-300px)] border-2 border-gray-200 rounded-lg p-4">
                <div
                  className={`relative w-full h-full flex items-center justify-center overflow-auto ${fullscreen ? 'fixed inset-0 z-50 bg-white p-8' : ''
                    }`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: svgOutput }}
                    className="w-full h-full"
                  />
                  <button
                    onClick={toggleFullscreen}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-60"
                  >
                    <i
                      className={`fas ${fullscreen ? 'fa-compress-alt' : 'fa-expand-alt'}`}
                    ></i>
                  </button>
                </div>
                {svgOutput === '' && (
                  <div className="text-red-500 mt-2">
                    Error rendering diagram. Please check your Mermaid syntax.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
