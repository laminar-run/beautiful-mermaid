export const initialMermaid = `
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
  `;