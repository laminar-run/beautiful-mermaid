# Beautiful Mermaid

A React-based application for creating and exporting aesthetically pleasing system diagrams using Mermaid.js.

## Features

- Real-time Mermaid diagram rendering
- Custom theme support with Mermaid.js
- Responsive design
- One-click SVG export
- Font Awesome icon integration

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/beautiful-mermaid.git
   ```

2. Navigate to the project directory:
   ```bash
   cd beautiful-mermaid
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   Visit http://localhost:3000 to view the app.

## Usage

1. **Edit Mermaid Syntax:**
   Enter your Mermaid diagram code in the editor on the left side of the screen.

2. **Real-time Rendering:**
   The diagram will update in real-time as you type if "Auto Refresh" is enabled.

3. **Manual Refresh:**
   Click the Refresh Diagram button to manually update the rendering if "Auto Refresh" is disabled.

4. **Export Diagram:**
   Use the Download SVG button to export your diagram as an SVG file.

5. **Customize Theme:**
   Select a theme from the dropdown menu to change the diagram's appearance.

## Customization

### Extending Mermaid Themes

You can customize the appearance of your diagrams by adding new themes or modifying existing ones. This allows you to adjust colors, fonts, and other style properties to suit your preferences.

#### Adding a New Theme

1. **Locate the communityThemes.js File**
   
   The `communityThemes.js` file is located in the `src` directory of the project. This file manages custom themes for the application.

2. **Register a New Theme**

   Use the `registerTheme` function to add a new theme. Each theme consists of a set of style variables that Mermaid uses to style diagrams.

   ```javascript
   // src/communityThemes.js

   // Existing imports and code...

   registerTheme('yourThemeName', {
     primaryColor: '#123456',
     primaryTextColor: '#ffffff',
     primaryBorderColor: '#654321',
     lineColor: '#abcdef',
     secondaryColor: '#fedcba',
     tertiaryColor: '#a1b2c3',
     // Add other theme variables as needed
   });
   ```

   Replace 'yourThemeName' with the name of your theme, and adjust the color values to your liking.

3. **Theme Variables Reference**

   You can customize various aspects of the theme using the following variables:

   - Colors:
     - `primaryColor`
     - `secondaryColor`
     - `tertiaryColor`
     - `primaryTextColor`
     - `secondaryTextColor`
     - `lineColor`
     - `background`
   - Typography:
     - `fontFamily`
     - `fontSize`
   - Borders and Lines:
     - `primaryBorderColor`
     - `secondaryBorderColor`
     - `nodeBorder`
     - `edgeBorder`

   For a full list of theme variables, refer to the Mermaid.js Theme Configuration documentation.

4. **Save and Refresh**

   Save the `communityThemes.js` file. The application will automatically include your new theme, and it will appear in the theme selection dropdown menu.

#### Example: Creating a "Sunset" Theme

Here's an example of how to register a new theme called 'sunset':

```javascript
// src/communityThemes.js

registerTheme('sunset', {
  primaryColor: '#FF5E5B',
  primaryTextColor: '#FFFFFF',
  primaryBorderColor: '#C84648',
  lineColor: '#333333',
  secondaryColor: '#FFED66',
  tertiaryColor: '#8BD3E6',
  fontFamily: 'Helvetica, sans-serif',
  fontSize: '16px',
});
```

After adding this code, the "Sunset" theme will be available in the theme selection dropdown.

#### Modifying Existing Themes

If you'd like to modify an existing theme, you can override it by registering a theme with the same name in `communityThemes.js`. Be cautious, as this will replace the existing theme configuration.

Example: Overriding the "Dark" Theme

```javascript
// src/communityThemes.js

registerTheme('dark', {
  primaryColor: '#1E1E1E',
  primaryTextColor: '#D4D4D4',
  primaryBorderColor: '#3C3C3C',
  lineColor: '#FFFFFF',
  secondaryColor: '#252526',
  tertiaryColor: '#373737',
  fontFamily: 'Courier New, monospace',
  fontSize: '14px',
});
```

### Applying Your Theme

1. **Select the Theme:**
   Open the application in your browser and select your custom theme from the dropdown menu.

2. **Render the Diagram:**
   The diagram will update to reflect the styles defined in your custom theme.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Mermaid.js for the diagram rendering engine
- Font Awesome for the icon set
- React for the UI framework