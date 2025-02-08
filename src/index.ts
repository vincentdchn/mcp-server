import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
    name: 'Demo sum',
    version: '1.0.0',
});

server.tool('add', { a: z.number(), b: z.number() }, async ({ a, b }) => ({
    content: [{ text: String(a + b), type: 'text' }],
}));

const transport = new StdioServerTransport();
await server.connect(transport);
