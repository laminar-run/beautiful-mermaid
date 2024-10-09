import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import mermaid from 'mermaid';
import React, { useEffect, useState } from 'react';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'Open Sans, Arial, sans-serif',
    primaryColor: '#1E90FF',
    primaryBorderColor: '#1E90FF',
    primaryTextColor: '#333',
  },
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
  },
});

const customStyles = `
/* CSS Variables for Customization */
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  --primary-color: #3B82F6;
  --secondary-color: #10B981;
  --background-color: #F8FAFC;
  --node-fill: #FFFFFF;
  --node-stroke: #E2E8F0;
  --node-text-color: #1E293B;
  --cluster-fill: #EFF6FF;
  --cluster-stroke: #BFDBFE;
  --cluster-text-color: #2563EB;
  --edge-color: #94A3B8;
  --edge-stroke-width: 1.5px;
  --node-stroke-width: 1.5px;
  --font-size: 14px;
  --font-weight: 600;
  --border-radius: 8px;
  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Global SVG Styles */
svg {
  background-color: var(--background-color);
  font-family: var(--font-family);
}

/* Node Styles */
.node rect,
.node circle,
.node ellipse,
.node polygon,
.node path {
  stroke-width: var(--node-stroke-width);
  stroke: var(--node-stroke);
  fill: var(--node-fill);
  rx: var(--border-radius);
  ry: var(--border-radius);
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.06));
}

.node foreignObject {
  overflow: visible;
}

.nodeLabel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
}

.nodeLabel i {
  margin-right: 6px;
  font-size: calc(var(--font-size) + 2px);
  color: var(--primary-color);
}

.nodeLabel span {
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--node-text-color);
}

/* Edge Styles */
.edgePath .path {
  stroke: var(--edge-color);
  stroke-width: var(--edge-stroke-width);
  fill: none;
}

.edgeLabel {
  font-size: calc(var(--font-size) - 1px);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3px 6px;
  border-radius: 4px;
  font-weight: var(--font-weight);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Cluster Styles */
.cluster rect {
  fill: var(--cluster-fill);
  stroke: var(--cluster-stroke);
  stroke-width: var(--node-stroke-width);
  rx: calc(var(--border-radius) * 1.5);
  ry: calc(var(--border-radius) * 1.5);
}

.cluster text.label {
  fill: var(--cluster-text-color);
  font-size: calc(var(--font-size) + 4px);
  font-weight: 700;
  text-anchor: middle;
  dominant-baseline: text-before-edge;
  dy: -1.2em; /* Position the title above the cluster */
}

.clusterLabel {
  pointer-events: none;
}

.cluster {
  overflow: visible;
}

/* System-specific styles */
#Legacy_Systems rect {
  fill: #FFF4E6;
}

#Modern_Systems rect {
  fill: #E6F4FF;
}

#AI_BI_Systems rect {
  fill: #F3E8FF;
}

#Laminar_Platform rect {
  fill: #EBF8FF;
  stroke: #3182CE;
  stroke-width: 2px;
  rx: 12px;
  ry: 12px;
}

#Protocols_Connectors rect {
  fill: #BEE3F8;
  rx: 10px;
  ry: 10px;
}

#Integration_Workflows rect {
  fill: #90CDF4;
  stroke: #3182CE;
  stroke-width: 2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  :root {
    --font-size: 12px;
    --border-radius: 6px;
  }

  .edgeLabel {
    font-size: calc(var(--font-size) - 1px);
    padding: 2px 4px;
  }

  .nodeLabel i {
    font-size: calc(var(--font-size) + 1px);
  }

  .cluster text {
    font-size: calc(var(--font-size) + 1px);
  }
}
`;

export default function App() {
  const [mermaidScript, setMermaidScript] = useState(`
    graph LR
    %% Define styles for different groups
    classDef legacy fill:#F0F0F0,stroke:#0B0B0B,color:#0B0B0B,font-size:12px;
    classDef laminar fill:#E6E9F7,stroke:#4F69C6,color:#4F69C6,font-size:14px,font-weight:bold;
    classDef modern fill:#F5F5F5,stroke:#0B0B0B,color:#0B0B0B,font-size:12px;
    classDef aibi fill:#FAFAFA,stroke:#0B0B0B,color:#0B0B0B,font-size:12px;

    %% Legacy Systems
    subgraph Legacy_Systems ["Legacy Systems"]
        direction TB
        M["<i class='fas fa-server'></i> Mainframe"]
        C["<i class='fas fa-cogs'></i> COBOL"]
        A["<i class='fas fa-database'></i> AS/400"]
        O["<i class='fas fa-database'></i> Oracle"]
        S["<i class='fas fa-industry'></i> SAP ERP"]
    end
    class M,C,A,O,S legacy;

    %% Laminar Platform
    subgraph Laminar_Platform ["Laminar Platform"]
        direction TB
        subgraph Protocols_Connectors ["Protocols & Connectors"]
            FTP["<i class='fas fa-exchange-alt'></i> FTP"]
            HTTP["<i class='fas fa-globe'></i> HTTP/S"]
            DB["<i class='fas fa-plug'></i> DB"]
            API["<i class='fas fa-code'></i> API"]
        end
        IW["<i class='fas fa-project-diagram'></i> Integration Workflows"]
    end
    class FTP,HTTP,DB,API,IW laminar;

    %% Modern Systems
    subgraph Modern_Systems ["Modern Systems"]
        direction TB
        AG["<i class='fas fa-network-wired'></i> API Gateway"]
        WA["<i class='fas fa-window-maximize'></i> Web App"]
        MA["<i class='fas fa-mobile-alt'></i> Mobile App"]
        MS["<i class='fas fa-cubes'></i> Microservices"]
        DL["<i class='fas fa-database'></i> Data Lake"]
    end
    class AG,WA,MA,MS,DL modern;

    %% AI & BI Systems
    subgraph AI_BI_Systems ["AI & BI Systems"]
        direction TB
        AI["<i class='fas fa-brain'></i> AI Engine"]
        ML["<i class='fas fa-cog'></i> ML Models"]
        PA["<i class='fas fa-chart-line'></i> Analytics"]
        BI["<i class='fas fa-chart-bar'></i> BI Dashboard"]
    end
    class AI,ML,PA,BI aibi;

    %% Connections
    M & C & A & O & S --> Protocols_Connectors
    Protocols_Connectors --> IW
    IW --> AG & MS & DL
    AG --> WA & MA
    MS --> DL
    DL --> AI & ML
    AI & ML --> PA
    PA & ML --> BI

    %% Styling for Laminar Platform
    style Laminar_Platform fill:#E6E9F7,stroke:#4F69C6,stroke-width:3px;
    style Protocols_Connectors fill:#CDD3F0,stroke:#4F69C6,stroke-width:2px;
    style IW fill:#A3AEE2,stroke:#4F69C6,stroke-width:2px;

    %% Global styles to ensure no orange
    linkStyle default stroke:#4F69C6,stroke-width:1px;
    style Legacy_Systems fill:#F0F0F0,stroke:#0B0B0B,color:#0B0B0B;
    style Modern_Systems fill:#F5F5F5,stroke:#0B0B0B,color:#0B0B0B;
    style AI_BI_Systems fill:#FAFAFA,stroke:#0B0B0B,color:#0B0B0B;
  `);
  const [svgOutput, setSvgOutput] = useState('');

  useEffect(() => {
    renderDiagram();
  }, [mermaidScript]);

  const renderDiagram = async () => {
    try {
      const { svg } = await mermaid.render('mermaid-diagram', mermaidScript);
      setSvgOutput(svg.replace('</svg>', `<style>${customStyles}</style></svg>`));
    } catch (error) {
      console.error('Mermaid rendering failed:', error);
      setSvgOutput('');
    }
  };

  const handleScriptChange = (event) => {
    setMermaidScript(event.target.value);
  };

  const handleDownload = () => {
    const blob = new Blob([svgOutput], { type: 'image/svg+xml;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'laminar-diagram.svg';
    link.click();
  };

  return (
    <div>
      <textarea
        rows="15"
        cols="80"
        value={mermaidScript}
        onChange={handleScriptChange}
        placeholder="Enter your Mermaid script here"
        style={{ fontFamily: 'monospace', padding: '10px', marginBottom: '10px', width: '100%' }}
      />
      <div>
        <button onClick={renderDiagram} style={{ marginRight: '10px' }}>
          Refresh Diagram
        </button>
        <button onClick={handleDownload} disabled={!svgOutput}>
          Download SVG
        </button>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: svgOutput }}
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
    </div>
  );
}
