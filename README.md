<h1 align="center">
  MCP Server
</h1>
<h4 align="center">
  A Testing Environment for Model Context Protocol
</h4>
<p align="center">
This repository serves as a playground to explore Model Context Protocol (MCP) capabilities and experiment with 
integrating AI models with external data sources and tools.
More information about MCP can be found [here](https://github.com/modelcontextprotocol).
</p>

<br/>

## Features

This test environment includes:

-   **MCP TypeScript SDK**: Official SDK integration
-   **TypeScript**: Latest version with strict type checking
-   **ESLint**: Advanced linting with multiple plugins
-   **Vitest**: Modern testing framework
-   **ts-reset**: Type safety improvements

## Setup

### Prerequisites

-   Node.js (v20 or higher recommended)
-   pnpm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/vincentdchn/mcp-server
cd mcp-server
```

2. Use correct Node version

```bash
nvm use
```

3. Install dependencies:

```bash
pnpm install
```

4. Run the development server:

```bash
pnpm dev
```

## Testing

Run tests in watch mode using:

```bash
pnpm test
```

Tests in CI mode:

```bash
pnpm test:ci
```

Tests with coverage:

```bash
pnpm test:coverage
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Available Scripts

-   `dev`: Run development server with watch mode
-   `test`: Run tests with Vitest
-   `test:ci`: Run tests in CI mode
-   `test:coverage`: Run tests with coverage
-   `lint`: Run ESLint with auto-fix
-   `format`: Format code with Prettier
-   `build`: Build TypeScript project
